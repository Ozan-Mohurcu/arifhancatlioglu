"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { profile } from "@/data/site";
import { Heart, ChevronDown } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";
import { useSiteData } from "@/sanity/SiteDataProvider";

// Harita yalnızca tarayıcıda yüklensin
const WorldMap = dynamic(() => import("./WorldMap"), { ssr: false });

export default function Hero() {
  const { m, contentLocale } = useI18n();
  const { currentLocation, stats, upcoming, profile: p } = useSiteData();
  const tagline = contentLocale === "tr" ? p.taglineTr : p.taglineEn;

  return (
    <section id="yolculuk" className="relative w-full overflow-hidden md:min-h-[100svh]">
      {/* Harita — MOBİLDE üstte blok (yarım ekran), MASAÜSTÜNDE tam ekran arka plan */}
      <div className="relative h-[50svh] w-full md:absolute md:inset-0 md:h-full">
        <WorldMap />
        {/* Okunabilirlik degradesi (mobilde hafif alt, masaüstünde güçlü) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink md:from-ink/70 md:via-ink/10 md:to-ink" />

        {/* Harita lejantı — sadece masaüstü */}
        <div className="glass absolute right-5 top-24 z-10 hidden rounded-xl p-3.5 text-xs md:block">
          <div className="mb-1.5 flex items-center gap-2.5">
            <span className="inline-block h-2 w-2 rounded-full bg-moss" /> {m.legend.visited}
          </div>
          {upcoming.length > 0 && (
            <div className="mb-1.5 flex items-center gap-2.5">
              <span className="inline-block h-2 w-4 rounded-full bg-sky" /> {m.legend.upcoming}
            </div>
          )}
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-ember" /> {m.legend.current}
          </div>
        </div>
      </div>

      {/* İçerik — MOBİLDE haritanın altında düz/koyu zemin, MASAÜSTÜNDE üstte ortalı */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-12 pt-8 md:flex md:min-h-[100svh] md:flex-col md:justify-center md:pb-16 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Canlı konum rozeti */}
          <div className="eyebrow mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
            </span>
            {currentLocation.city}, {currentLocation.country}
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            {profile.name.split(" ")[0]} <span className="text-gradient">{m.hero.onTheRoad}</span>
          </h1>
          <p className="mt-4 text-base text-sand/80 sm:text-lg">{tagline}</p>

          {/* İstatistikler */}
          <div className="mt-8 flex flex-wrap gap-6">
            {stats.map((s) => (
              <div key={s.key}>
                <div className="font-display text-2xl font-bold text-ember sm:text-3xl">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-sand/60">{m.stats[s.key]}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#destek"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-semibold text-ink shadow-lg shadow-ember/20 transition hover:bg-amber"
            >
              <Heart size={18} /> {m.hero.ctaSupport}
            </a>
            <a
              href="#hakkinda"
              className="glass rounded-full px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              {m.hero.ctaStory}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Aşağı kaydır göstergesi — sadece masaüstü */}
      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 animate-floaty text-sand/40 md:block">
        <ChevronDown size={22} />
      </div>
    </section>
  );
}
