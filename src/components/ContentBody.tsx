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
    <Bounded as="article">
      <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
        <Heading as="h1">{page.data.title}</Heading>
        <div className="flex gap-4 text-blue-400">
          {page.tags.map((tag, index) => (
            <span key={index} className="text-xl font-bold">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">
          {formattedDate}
        </p>

        {page.data.live_link && (
          <div className="mt-8">
            <Button
              linkField={page.data.live_link}
              label="View Live Site"
              className="text-slate-900 bg-blue-400 border-blue-400 hover:bg-blue-300"
            />
          </div>
        )}

        {/* Featured Image */}
        {page.data.hover_image?.url && (
          <div className="mt-8 rounded-xl overflow-hidden border-2 border-slate-800">
             <PrismicNextImage
               field={page.data.hover_image}
               className="w-full h-auto object-cover"
               priority
             />
          </div>
        )}

        <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </Bounded>
  );
}
