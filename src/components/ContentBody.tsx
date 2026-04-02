import SliceZone from "@/components/SliceZone";
import { Page } from "@/data";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/bounded";
import { formatDate } from "@/utils/formatDate";
import Button from "@/components/Button";
import PrismicNextImage from "@/components/PrismicNextImage";

export default function ContentBody({
  page,
}: {
  page: Page;
}) {
  const formattedDate = formatDate(page.data.date);
  return (
    <article className="py-16 md:py-24">
      {/* Header: title, tags, CTA, hero image — constrained width */}
      <Bounded className="pb-0">
        <div className="w-full flex max-w-prose flex-col gap-6">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
            {formattedDate}
          </p>
          <Heading as="h1" size="xl">
            {page.data.title}
          </Heading>

          <div className="flex flex-wrap gap-3">
            {page.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {page.data.live_link && (
            <div className="mt-2">
              <Button
                linkField={page.data.live_link}
                label="View Live Project"
                className="border-blue-400 bg-blue-400 text-slate-950 hover:bg-blue-300"
              />
            </div>
          )}

          {/* Featured Image */}
          {page.data.hover_image?.url && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
              <PrismicNextImage
                field={page.data.hover_image}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          )}
        </div>
      </Bounded>

      {/* Slices — each uses its own Bounded for consistent alignment */}
      <SliceZone slices={page.data.slices} components={components} />
    </article>
  );
}
