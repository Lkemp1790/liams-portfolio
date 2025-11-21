import QuoteForm from "@/components/forms/QuoteForm";
import Bounded from "@/components/bounded";
import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quote | Liam Kemp",
  description: "Request a quote for your next web development or automation project.",
};

export default function QuotePage() {
  return (
    <Bounded>
      <div className="flex flex-col items-center">
        <div className="text-center mb-12 max-w-3xl">
          <Heading size="xl" className="mb-6">
            Start Your Project
          </Heading>
          <p className="text-xl text-slate-300">
            Ready to bring your idea to life? Fill out the details below to get a custom quote.
            Whether it&apos;s a new website, a complex web app, or an automation workflow,
            I&apos;m here to help you build it right.
          </p>
        </div>

        <QuoteForm />
      </div>
    </Bounded>
  );
}

