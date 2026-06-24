"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { ChevronDown } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";
import { useSiteData } from "@/sanity/SiteDataProvider";
import { countryFlag, cleanCountry } from "@/lib/flags";

type Group = {
  country: string;
  cities: string[];
  state: "done" | "now" | "next";
  postId?: string;
};

// Aynı ülkenin şehirlerini tek satırda topla (sıra korunur)
function groupByCountry(
  items: { city: string; country: string }[],
  state: Group["state"]
): Group[] {
  const map = new Map<string, Group>();
  for (const it of items) {
    const g = map.get(it.country);
    if (g) g.cities.push(it.city);
    else map.set(it.country, { country: it.country, cities: [it.city], state });
  }
  return [...map.values()];
}

export default function Journey() {
  const { m } = useI18n();
  const { visited, currentLocation, upcoming, posts } = useSiteData();
  const [open, setOpen] = useState(false);

  // Ülke -> blog yazısı eşlemesi (varsa o ülkenin sayfasına bağla)
  const postByCountry = new Map(posts.map((p) => [p.country, p.id]));
  const withPost = (g: Group): Group => ({ ...g, postId: postByCountry.get(g.country) });

  const rows: Group[] = [
    ...groupByCountry(visited, "done").map(withPost),
    ...groupByCountry([currentLocation], "now").map(withPost),
    ...groupByCountry(upcoming, "next").map(withPost),
  ];

  const dot = {
    done: "bg-moss border-moss",
    now: "bg-ember border-ember animate-pulse",
    next: "bg-transparent border-sky",
  };
  const labelText = { done: m.journey.done, now: m.journey.now, next: m.journey.next };
  const labelColor = { done: "text-moss", now: "text-ember", next: "text-sky" };

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{m.journey.eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{m.journey.title}</h2>
            <p className="mt-3 max-w-lg text-sand/70">{m.journey.desc}</p>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-ember hover:text-ember"
          >
            {open ? m.journey.hide : `${m.journey.showAll} (${groupByCountry(visited, "done").length})`}
            <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      </Reveal>

      {/* Kapalıyken sadece şu anki konum */}
      {!open && (
        <Reveal>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-ember/30 bg-ember/[0.06] px-5 py-4">
            <span className="h-3 w-3 animate-pulse rounded-full bg-ember" />
            <span className="font-display font-semibold">
              {countryFlag(currentLocation.country)} {cleanCountry(currentLocation.country)}
            </span>
            <span className="text-sand/50">{currentLocation.city}</span>
            <span className="ml-auto text-xs font-semibold uppercase tracking-wider text-ember">
              {m.journey.now}
            </span>
          </div>
        </Reveal>
      )}

      {/* Açıkken tam çizelge */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="relative mt-10 pl-6">
              <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-moss to-ember" />
              <div className="space-y-7">
                {rows.map((r, i) => {
                  const Inner = (
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      {/* Önce ülke (bayrak + ad) */}
                      <h3 className="font-display text-lg font-semibold">
                        {countryFlag(r.country)} {cleanCountry(r.country)}
                      </h3>
                      {/* Yanında şehirler (küçük) */}
                      <span className="text-sm text-sand/50">{r.cities.join(", ")}</span>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${labelColor[r.state]}`}
                      >
                        · {labelText[r.state]}
                      </span>
                      {r.postId && (
                        <span className="text-xs text-ember/60 transition group-hover:text-ember">↗</span>
                      )}
                    </div>
                  );
                  return (
                    <div key={`${r.country}-${i}`} className="relative">
                      <span
                        className={`absolute -left-[22px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${dot[r.state]}`}
                      />
                      {r.postId ? (
                        <Link href={`/blog/${r.postId}`} className="group block transition hover:opacity-90">
                          {Inner}
                        </Link>
                      ) : (
                        Inner
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
