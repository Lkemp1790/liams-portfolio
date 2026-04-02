import Link from "next/link";
import SliceZone from "@/components/SliceZone";
import { Page } from "@/data";
import { components } from "@/slices";
import { formatDate } from "@/utils/formatDate";
import Button from "@/components/Button";
import PrismicNextImage from "@/components/PrismicNextImage";

export default function ContentBody({ page }: { page: Page }) {
  const formattedDate = formatDate(page.data.date);

  return (
    <article>
      {/* ── CINEMATIC HERO ─────────────────────────────────────────────── */}
      <div className="relative min-h-[70vh] w-full overflow-hidden bg-slate-950">
        {/* Background image with dark overlay */}
        {page.data.hover_image?.url && (
          <>
            <div className="absolute inset-0 z-0">
              <PrismicNextImage
                field={page.data.hover_image}
                className="h-full w-full object-cover object-center opacity-30"
                priority
              />
            </div>
            {/* Gradient overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />
          </>
        )}

        {/* Hero content */}
        <div className="relative z-20 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-6 md:pb-24 md:pt-40">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <Link href="/projects" className="transition-colors hover:text-slate-300">
              Projects
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-400">Case Study</span>
          </div>

          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            {page.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {page.data.title}
          </h1>

          {/* Divider + meta row */}
          <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-slate-800 pt-8">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
              {formattedDate}
            </p>
            {page.data.live_link && (
              <Button
                linkField={page.data.live_link}
                label="View Live Project"
                className="border-blue-400 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 bg-blue-600"
              />
            )}
          </div>
        </div>
      </div>

      {/* ── CONTENT BODY ────────────────────────────────────────────────── */}
      <div className="bg-slate-950">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </article>
  );
}
