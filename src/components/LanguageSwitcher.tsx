"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { locales, localeNames } from "@/i18n/config";
import { ChevronDown } from "./Icons";

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm font-semibold transition hover:border-ember hover:text-ember"
        aria-label="Dil / Language"
      >
        {localeNames[locale].code}
        <ChevronDown size={14} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-2 min-w-[9rem] overflow-hidden rounded-xl border border-white/10 bg-ash shadow-xl ${
            compact ? "left-0" : "right-0"
          }`}
        >
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-white/5 ${
                l === locale ? "text-ember" : "text-sand/80"
              }`}
            >
              <span>{localeNames[l].native}</span>
              <span className="text-xs text-sand/40">{localeNames[l].code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
