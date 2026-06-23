"use client";

import Reveal from "./Reveal";
import { profile } from "@/data/site";
import { Compass, MapPin, Heart } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";

export default function About() {
  const { m, contentLocale } = useI18n();
  const bio = contentLocale === "tr" ? profile.bio : profile.bioEn;
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="hakkinda" className="relative mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-ash">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: profile.photo ? `url(${profile.photo})` : undefined }}
              >
                {!profile.photo && (
                  <div className="flex h-full items-center justify-center text-sand/15">
                    <Compass size={88} />
                  </div>
                )}
              </div>
            </div>
            <div className="glass absolute -bottom-5 -right-3 flex items-center gap-2 rounded-2xl px-5 py-3 text-sm">
              <MapPin size={16} className="text-ember" /> {m.about.badge} · {new Date().getFullYear()}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="eyebrow">{m.about.eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              {m.about.heading.replace("{name}", firstName)}
            </h2>
            <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-sand/80">{bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#icerikler"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
              >
                {m.about.ctaContent}
              </a>
              <a
                href="#destek"
                className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-amber"
              >
                <Heart size={16} /> {m.about.ctaSupport}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
