import { Metadata } from "next";
import SliceZone from "@/components/SliceZone";
import { components } from "@/slices";
import { pages } from "@/data";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";

export default function Page() {
  const page = pages.find(p => p.uid === "home");
  if (!page) return null;

  const topSlices = page.data.slices.filter(s => s.slice_type !== "text_block");
  const bottomSlices = page.data.slices.filter(s => s.slice_type === "text_block");

  return (
    <>
      <SliceZone slices={topSlices} components={components} />
      <FeaturedCaseStudies />
      <SliceZone slices={bottomSlices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const page = pages.find(p => p.uid === "home");
  if (!page) return {};
  return {
      title: page.data.meta_title,
      description: page.data.meta_description,
  }
}
