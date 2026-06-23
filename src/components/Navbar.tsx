"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/site";
import { Menu, Close } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { m } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#yolculuk", label: m.nav.journey },
    { href: "#hakkinda", label: m.nav.about },
    { href: "#destek", label: m.nav.support },
    { href: "#icerikler", label: m.nav.content },
    { href: "#blog", label: m.nav.blog },
    { href: "#iletisim", label: m.nav.contact },
  ];

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
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-sand/80 transition hover:text-ember"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#destek"
            className="rounded-full bg-ember px-4 py-2 text-sm font-semibold text-ink transition hover:bg-amber"
          >
            {m.nav.support}
          </a>
        </div>

        {/* Mobil: dil + menü */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher compact />
          <button onClick={() => setOpen((v) => !v)} aria-label="Menü">
            {open ? <Close size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
