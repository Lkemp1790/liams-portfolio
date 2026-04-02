"use client";

import { GalleryBlockSlice, SliceComponentProps } from "@/data";
import PrismicNextImage from "@/components/PrismicNextImage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export type GalleryBlockProps = SliceComponentProps<GalleryBlockSlice>;

const GalleryBlock = ({ slice }: GalleryBlockProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!slice.items || slice.items.length === 0) return <></>;

  const isSingle = slice.items.length === 1;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full overflow-hidden py-12 md:py-20 bg-slate-950 cs-gallery"
    >
      {!isSingle ? (
        <>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: ".cs-next",
              prevEl: ".cs-prev",
            }}
            pagination={{ el: ".cs-dots", clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: true }}
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="cs-swiper w-full"
          >
            {slice.items.map((item, index) => (
              <SwiperSlide key={index} className="cs-slide">
                <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/60 border border-white/5">
                  <PrismicNextImage
                    field={item.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls row */}
          <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <button className="cs-prev group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 backdrop-blur-sm transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="cs-next group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 backdrop-blur-sm transition-all hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="cs-dots flex items-center gap-2" />

            <p className="text-xs font-semibold tabular-nums tracking-widest text-slate-500">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(slice.items.length).padStart(2, "0")}
            </p>
          </div>
        </>
      ) : (
        /* Single image - full bleed showcase */
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-white/5 shadow-2xl shadow-black/60">
            <PrismicNextImage
              field={slice.items[0].image}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .cs-swiper {
          padding: 40px 0 !important;
        }
        .cs-slide {
          width: min(720px, 80vw) !important;
          height: auto;
          aspect-ratio: 16 / 10;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .cs-slide:not(.swiper-slide-active) {
          opacity: 0.45;
        }
        .cs-dots .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(148, 163, 184, 0.4);
          opacity: 1;
          margin: 0 3px !important;
          transition: all 0.25s;
        }
        .cs-dots .swiper-pagination-bullet-active {
          background: #3b82f6;
          width: 24px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default GalleryBlock;
