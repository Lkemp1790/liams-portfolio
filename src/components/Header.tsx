import React from "react";
import NavBar from "@/components/NavBar";
import { settings } from "@/data";

export default function Header() {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={settings} />
    </header>
  );
}
