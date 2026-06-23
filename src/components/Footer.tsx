"use client";

import { profile, socials } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { m } = useI18n();
  const links = [
    { label: "YouTube", href: socials.youtube },
    { label: "Instagram", href: socials.instagram },
    { label: "TikTok", href: socials.tiktok },
  ];

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center">
        <div className="font-display text-lg font-extrabold">
          <span className="text-gradient">{profile.brand}</span>
        </div>
        <div className="flex flex-wrap justify-center gap-5 text-sm text-sand/70">
          {links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-ember">
              {l.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="hover:text-ember">
            {m.footer.email}
          </a>
        </div>
        <p className="text-xs text-sand/40">
          © {new Date().getFullYear()} {profile.name}. {m.footer.tagline}
        </p>
      </div>
    </footer>
  );
}
