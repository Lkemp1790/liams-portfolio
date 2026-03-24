import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/bounded";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { settings } from "@/data";

export default function Footer() {
  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-blue-400"
          >
            {settings.data.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            © {new Date().getFullYear()} {settings.data.name}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {settings.data.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-blue-400",
                    )}
                    href={link.url}
                  >
                    {label}
                  </Link>
                </li>
                {index < settings.data.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {settings.data.github.url && (
            <Link
              href={settings.data.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-blue-400"
              aria-label={settings.data.name + " on GitHub"}
            >
              <FaGithub />
            </Link>
          )}
          {settings.data.linkedin.url && (
            <Link
              href={settings.data.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-blue-400"
              aria-label={settings.data.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </Link>
          )}
        </div>
      </div>
    </Bounded>
  );
}
