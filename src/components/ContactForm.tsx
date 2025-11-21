"use client";

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-slate-100 placeholder-slate-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
          placeholder="How can I help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={clsx(
          "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold text-black transition-transform ease-out hover:scale-105",
          status === "sending" && "opacity-70 cursor-not-allowed"
        )}
      >
        <span className="absolute inset-0 z-0 h-full translate-y-10 bg-blue-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
        <span className="relative flex items-center justify-center gap-2">
          {status === "sending" ? "Sending..." : "Send Message"}
          <MdArrowOutward className="inline-block" />
        </span>
      </button>

      {status === "success" && (
        <p className="text-green-400">Message sent successfully! I'll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400">Something went wrong. Please try again later.</p>
      )}
    </form>
  );
}

