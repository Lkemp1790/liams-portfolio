import { Metadata } from "next";
import { notFound } from "next/navigation";
import SliceZone from "@/components/SliceZone";

import { components } from "@/slices";
import { pages as allPages } from "@/data";

type Params = { uid: string };

export default function Page({ params }: { params: Params }) {
  const page = allPages.find(p => p.uid === params.uid && p.type === "page");
  if (!page) notFound();

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const page = allPages.find(p => p.uid === params.uid && p.type === "page");
  if (!page) return {};

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  return allPages
    .filter(p => p.type === "page")
    .map((page) => {
      return { uid: page.uid };
    });
}
