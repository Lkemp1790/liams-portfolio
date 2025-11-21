import { Metadata } from "next";
import { notFound } from "next/navigation";

import ContentBody from "@/components/ContentBody";
import { projects } from "@/data";

type Params = { uid: string };

export default function Page({ params }: { params: Params }) {
  const page = projects.find(p => p.uid === params.uid);
  if (!page) notFound();

  return <ContentBody page={page} />;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const page = projects.find(p => p.uid === params.uid);
  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  return projects.map((page) => {
    return { uid: page.uid };
  });
}

