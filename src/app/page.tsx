import { Metadata } from "next";
import SliceZone from "@/components/SliceZone";
import { components } from "@/slices";
import { pages } from "@/data";

export default function Page() {
  const page = pages.find(p => p.uid === "home");
  if (!page) return null;

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const page = pages.find(p => p.uid === "home");
  if (!page) return {};
  return {
      title: page.data.meta_title,
      description: page.data.meta_description,
  }
}
