"use client";

import { useState } from "react";
import { MdArrowOutward, MdCheck, MdError } from "react-icons/md";
import clsx from "clsx";

const COMMON_FEATURES = [
  "CMS (Content Management)",
  "E-commerce / Payments",
  "User Authentication",
  "SEO Optimization",
  "Analytics / Tracking",
  "Contact Forms",
  "Newsletter Integration",
  "Dark Mode",
  "Multi-language",
  "AI Integration",
  "Admin Dashboard",
  "API Integration",
];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    company: "",

    // Project Details
    projectType: "",
    budget: "",
    timeline: "",

    // Description
    description: "",
    otherFeatures: "",
  });

  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Combine checkboxes and text area for the API
    const featuresList = selectedFeatures.map(f => `- ${f}`).join("\n");
    const finalFeatures = `${featuresList}\n\nOther Requirements:\n${formData.otherFeatures}`;

    const payload = {
      ...formData,
      features: finalFeatures,
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 rounded-2xl border-2 border-slate-800 bg-slate-900 p-10 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-4xl text-green-400">
          <MdCheck />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Request Received!</h2>
        <p className="max-w-md text-slate-400">
          Thanks for reaching out, {formData.name}. I&apos;ve received your project details and will review them shortly. Expect a proposal or follow-up email within 24-48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={step === 3 ? handleSubmit : handleNext} className="w-full max-w-2xl space-y-8 rounded-2xl border-2 border-slate-800 bg-slate-900 p-6 md:p-10">

      {/* Progress Bar */}
      <div className="mb-8 flex items-center gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={clsx(
                "flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm transition-colors duration-300",
                step >= i ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-500 border border-slate-700"
              )}
            >
              {i}
            </div>
            {i < 3 && <div className={clsx("h-1 w-8 md:w-16 rounded-full", step > i ? "bg-blue-500" : "bg-slate-800")} />}
          </div>
        ))}
      </div>

      {/* Step 1: Contact Information */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-white">Let&apos;s start with the basics</h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">Company / Organization</label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
              placeholder="jane@acme.com"
            />
          </div>
        </div>
      )}

      {/* Step 2: Project Scope */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-white">Tell me about the project</h3>

          <div>
            <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-slate-300">What are we building?</label>
            <select
              name="projectType"
              id="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
            >
              <option value="" disabled>Select a type...</option>
              <option value="Website">Website (Marketing/Portfolio)</option>
              <option value="WebApp">Web Application (SaaS/Dashboard)</option>
              <option value="MobileApp">Mobile App</option>
              <option value="Automation">Workflow Automation / AI</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium text-slate-300">Estimated Budget</label>
              <select
                name="budget"
                id="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
              >
                <option value="" disabled>Select range...</option>
                <option value="<1k">&lt; £1,000</option>
                <option value="1k-5k">£1,000 - £5,000</option>
                <option value="5k-10k">£5,000 - £10,000</option>
                <option value="10k+">£10,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-slate-300">Desired Timeline</label>
              <select
                name="timeline"
                id="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
              >
                <option value="" disabled>Select timeline...</option>
                <option value="ASAP">ASAP (Rush)</option>
                <option value="1month">Within 1 month</option>
                <option value="1-3months">1 - 3 months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Details */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <h3 className="text-xl font-bold text-white">The Nitty Gritty</h3>

          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-slate-300">Project Overview</label>
            <p className="mb-2 text-xs text-slate-500">Briefly describe the main goal of the project and who it&apos;s for.</p>
            <textarea
              name="description"
              id="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
              placeholder="We need a platform that allows users to..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">Key Features</label>
            <p className="mb-3 text-xs text-slate-500">Select all that apply.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {COMMON_FEATURES.map((feature) => (
                <label key={feature} className="flex items-center space-x-3 p-3 rounded-lg border border-slate-700 bg-slate-800/50 hover:bg-slate-800 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="w-4 h-4 text-blue-500 rounded border-slate-600 focus:ring-blue-500 focus:ring-offset-slate-900 bg-slate-700"
                  />
                  <span className="text-sm text-slate-200 select-none">{feature}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="otherFeatures" className="mb-2 block text-sm font-medium text-slate-300">Other Requirements / Notes</label>
            <textarea
              name="otherFeatures"
              id="otherFeatures"
              rows={3}
              value={formData.otherFeatures}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 focus:border-blue-400 focus:outline-none"
              placeholder="Any other specific requirements or details..."
            />
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4 border-t border-slate-800">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="px-6 py-2 text-slate-400 hover:text-white font-medium transition-colors"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className={clsx(
            "group relative flex items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-6 py-2 font-bold text-black transition-transform ease-out hover:scale-105",
            status === "sending" && "opacity-70 cursor-not-allowed"
          )}
        >
          <span className="absolute inset-0 z-0 h-full translate-y-10 bg-blue-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
          <span className="relative flex items-center gap-2">
            {step === 3 ? (status === "sending" ? "Sending..." : "Submit Request") : "Next Step"}
            <MdArrowOutward />
          </span>
        </button>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
          <MdError />
          Something went wrong. Please try again or email me directly.
        </div>
      )}
    </form>
  );
}
