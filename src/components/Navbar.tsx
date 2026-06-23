"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/site";
import { Menu, Close } from "./Icons";

const links = [
  { href: "#yolculuk", label: "Yolculuk" },
  { href: "#hakkinda", label: "Hakkında" },
  { href: "#destek", label: "Destek Ol" },
  { href: "#icerikler", label: "İçerikler" },
  { href: "#blog", label: "Günlük" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight">
          <span className="text-gradient">{profile.brand}</span>
        </a>

        {/* Masaüstü menü */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-sand/80 transition hover:text-ember"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#destek"
            className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink transition hover:bg-amber"
          >
            Destek Ol
          </a>
        </div>

        {/* Mobil menü butonu */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Menü"
        >
          {open ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobil açılır menü */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink/95 px-5 py-4">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-sand/90"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
