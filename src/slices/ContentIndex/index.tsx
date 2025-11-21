"use client";

import { ContentIndexSlice, SliceComponentProps } from "@/data";
import { projects } from "@/data";
import RichText from "@/components/RichText";
import ContentList from "./ContentList";
import Bounded from "@/components/bounded";
import Heading from "@/components/Heading";

export type BlogPostIndexProps = SliceComponentProps<ContentIndexSlice>;

const BlogPostIndex = ({ slice }: BlogPostIndexProps): JSX.Element => {
  const contentType = slice.primary.content_type || "Blog";
  // We removed blogPosts, so if contentType is Blog, return empty array or just projects (though it shouldn't happen with current data)
  const items = contentType === "Blog" ? [] : projects;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {slice.primary.description && (
        <div className="prose prose-xl prose-invert mb-10">
          <RichText field={slice.primary.description} />
        </div>
      )}
      <ContentList
        items={items}
        contentType={slice.primary.content_type}
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
    </Bounded>
  );
};

export default BlogPostIndex;
