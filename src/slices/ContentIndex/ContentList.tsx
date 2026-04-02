"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { Page, ImageField, ContentIndexSlice } from "@/data";
import Link from "next/link";
import PrismicNextImage from "@/components/PrismicNextImage";

gsap.registerPlugin(ScrollTrigger);

type ContentListProps = {
  items: Page[];
  fallbackItemImage: ImageField;
  viewMoreText: string;
  contentType: ContentIndexSlice["primary"]["content_type"];
};

export default function ContentList({
  items,
  fallbackItemImage,
  viewMoreText = "View Case Study",
  contentType,
}: ContentListProps) {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      items.forEach((item, index) => {
        gsap.fromTo(
          `.content-item-${index}`,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `.content-item-${index}`,
              start: "top 80%",
            },
          }
        );
      });
    }, component);

    return () => ctx.revert();
  }, [items]);

  const urlPrefix = contentType === "Blog" ? "/blog" : "/projects";

  const sortedItems = items
  .slice()
  .sort((a: any, b: any) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateA.getTime() - dateB.getTime();
  })
  .reverse();

  return (
    <div ref={component} className="flex flex-col gap-12 md:gap-20">
      {sortedItems.map((item, index) => {
        const title = item.data.title || "Untitled";
        const metaDescription = item.data.meta_description || "";
        const image = item.data.hover_image?.url
          ? item.data.hover_image
          : fallbackItemImage;
        const href = `${urlPrefix}/${item.uid}`;
        const liveLink = item.data.live_link?.url;

        return (
          <article
            key={index}
            className={`content-item-${index} group flex flex-col gap-8 md:gap-12 lg:items-center ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Image Container */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 lg:w-1/2">
              <div className="aspect-[4/3] w-full">
                {image?.url && (
                  <PrismicNextImage
                    field={image}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
              </div>
            </div>

            {/* Content Container */}
            <div className="flex w-full flex-col lg:w-1/2">
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-medium text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
                {title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {metaDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm font-bold uppercase tracking-widest text-slate-50 transition-colors hover:border-slate-50 hover:text-white"
                >
                  {viewMoreText} <MdArrowOutward className="text-lg" />
                </Link>
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-200"
                  >
                    Live Site <MdArrowOutward className="text-base" />
                  </a>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
