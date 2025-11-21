import ContactForm from "@/components/ContactForm";
import Bounded from "@/components/bounded";
import Heading from "@/components/Heading";
import { Metadata } from "next";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export const metadata: Metadata = {
  title: "Contact | Liam Kemp",
  description: "Get in touch with Liam Kemp for freelance opportunities or collaboration.",
};

export default function ContactPage() {
  return (
    <Bounded>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <Heading size="xl" className="mb-8">
            Get in Touch
          </Heading>
          <p className="mb-8 max-w-prose text-xl text-slate-300">
            Have a general question or just want to say hello? Use the form on the right.
          </p>
          <p className="mb-8 max-w-prose text-xl text-slate-300">
            If you have a specific project in mind and want a proposal, please use my detailed quote request form instead.
          </p>

          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-400 hover:underline"
          >
            Request a Project Quote <MdArrowOutward />
          </Link>
        </div>

        <div className="flex items-start justify-center md:justify-end">
          <ContactForm />
        </div>
      </div>
    </Bounded>
  );
}
