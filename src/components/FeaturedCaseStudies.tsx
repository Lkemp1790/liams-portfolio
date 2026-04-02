import Link from "next/link";
import Bounded from "@/components/bounded";
import PrismicNextImage from "@/components/PrismicNextImage";
import { MdArrowOutward } from "react-icons/md";

const caseStudies = [
  {
    eyebrow: "Operations & Automation",
    title: "Enso Labs Outreach Engine",
    problem:
      "Growth teams were losing hours daily juggling disconnected tools for lead generation, campaign delivery, mailbox operations, and SMS follow-ups.",
    solution:
      "Architected and built a centralised internal admin platform. It manages lead pipelines, AI-personalised email campaigns, DNS/mailbox provisioning, warmup recovery, and automated SMS sequences from a single unified dashboard.",
    impact:
      "Replaced 4+ disjointed SaaS tools, reducing manual campaign setup time by 80% while providing tighter operational control over email deliverability at scale.",
    tech: ["Next.js", "Node.js", "AI Personalisation", "PostgreSQL"],
    href: "/projects/enso-labs",
    image: {
      url: "/screenshot-2026-04-02_08-29-05.png",
      alt: "Enso Labs outreach CRM grid",
    },
  },
  {
    eyebrow: "Complex Data Systems",
    title: "Saltburn Pool League",
    problem:
      "A local sports league was manually processing hundreds of match results, leading to errors, delayed league tables, and frustrated players.",
    solution:
      "Developed a full-stack automated league management system. Features include captain portals for digital scorecards, live score updates on fixture tables, and an admin dashboard for auto-creating round-robin seasons.",
    impact:
      "Eliminated 100% of manual data entry for administrators. Provided players with instant, error-free updates immediately after matches, transforming the league's digital experience.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    href: "/projects/saltburn-pool-league",
    image: { url: "/pool2.jpg", alt: "Fantasy sports platform dashboard" },
  },
];

export default function FeaturedCaseStudies() {
  return (
    <Bounded className="py-16 md:py-24">
      <div className="flex flex-col gap-16 md:gap-24">

        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
            Selected Work
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Featured Case Studies
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
            Senior-level engineering is about solving expensive problems. Here are examples of robust systems built to drive efficiency, automation, and business value.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col gap-20 md:gap-32">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className={`group flex flex-col gap-8 md:gap-16 lg:items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 lg:w-1/2">
                <div className="aspect-[4/3] w-full">
                  <PrismicNextImage
                    field={study.image}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
                </div>
              </div>

              {/* Content Container */}
              <div className="flex w-full flex-col lg:w-1/2">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-400">
                  {study.eyebrow}
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
                  {study.title}
                </h3>

                <div className="mt-8 flex flex-col gap-6 border-l-2 border-slate-800 pl-6">
                  <CaseStudyDetail label="The Problem" text={study.problem} />
                  <CaseStudyDetail label="The Solution" text={study.solution} />
                  <CaseStudyDetail label="The Impact" text={study.impact} />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10">
                  <Link
                    href={study.href}
                    className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-bold uppercase tracking-widest text-slate-50 transition-colors hover:border-slate-50 hover:text-white"
                  >
                    Read full case study <MdArrowOutward className="text-lg" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-100 transition-all hover:bg-slate-800 hover:text-white"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </Bounded>
  );
}

function CaseStudyDetail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500">
        {label}
      </h4>
      <p className="mt-2 text-base leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}
