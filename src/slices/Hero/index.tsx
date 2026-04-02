"use client";
import { HeroSlice, SliceComponentProps } from "@/data";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Bounded from "@/components/bounded";
import Button from "@/components/Button";
import Avatar from "@/components/Avatar";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".hero-eyebrow, .hero-heading, .hero-copy, .hero-actions, .hero-proof",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.15,
            stagger: 0.12,
          }
        )
        .fromTo(
          ".hero-portrait-wrap",
          { y: 30, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          0.2,
        );

      gsap.to(".hero-portrait-wrap", {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const fullName = `${slice.primary.first_name} ${slice.primary.last_name}`.trim();

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      ref={component}
    >
      <div className="grid min-h-[74vh] grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr,0.8fr] md:gap-14">
        <div className="w-full">
          <p className="hero-eyebrow mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-300 opacity-0">
            {fullName}
          </p>
          <h1 className="hero-heading max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight text-white opacity-0 md:text-5xl lg:text-6xl">
            Full-Stack Developer building AI-powered web applications and automation systems
          </h1>
          <p className="hero-copy mt-5 max-w-2xl text-base leading-8 text-slate-300 opacity-0 md:text-lg">
            React, TypeScript, Node.js, scalable systems, and real-world impact. I build systems that focus on automation, efficiency, and solving complex business problems.
          </p>
          <div className="hero-actions mt-8 flex flex-col gap-4 opacity-0 sm:flex-row">
            <Button
              linkField={{ url: "/projects" }}
              label="View Projects"
              className="border-blue-400 bg-blue-400 text-slate-950 hover:bg-blue-300"
            />
            <Button
              linkField={{ url: "/contact" }}
              label="Contact"
              className="border-slate-700 bg-slate-900 text-slate-100"
            />
          </div>
          <div className="hero-proof mt-10 grid gap-4 border-t border-slate-800 pt-6 text-left opacity-0 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Frontend
              </p>
              <p className="mt-2 text-base text-slate-200">
                React, Next.js, TypeScript
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Backend
              </p>
              <p className="mt-2 text-base text-slate-200">
                APIs, databases, auth, automations
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                AI Systems
              </p>
              <p className="mt-2 text-base text-slate-200">
                OpenAI workflows, messaging, operations
              </p>
            </div>
          </div>
        </div>
        <div className="hero-portrait-wrap relative mx-auto w-full max-w-sm opacity-0 md:max-w-md">
          <div className="absolute inset-6 -z-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />
          <Avatar
            image={{ url: "/me.jpg", alt: fullName }}
            className="mx-auto w-full"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
