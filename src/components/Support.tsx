"use client";

import Reveal from "./Reveal";
import { tiers, supporters } from "@/data/support";
import { Coffee, Utensils, Bed } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";

const iconFor = {
  coffee: Coffee,
  meal: Utensils,
  hotel: Bed,
};

export default function Support() {
  const { m } = useI18n();
  const tierText = {
    coffee: { title: m.support.coffeeT, desc: m.support.coffeeD },
    meal: { title: m.support.mealT, desc: m.support.mealD },
    hotel: { title: m.support.hotelT, desc: m.support.hotelD },
  };
  return (
    <section id="destek" className="relative overflow-hidden py-28">
      {/* Yumuşak ışık efekti */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-ember/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow justify-center">{m.support.eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{m.support.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sand/70">{m.support.desc}</p>
          </div>
        </Reveal>

        {/* Kademeler */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {tiers.map((t, i) => {
            const Icon = iconFor[t.icon];
            return (
              <Reveal key={t.id} delay={i * 0.08}>
                <div
                  className={`group relative flex h-full flex-col items-center rounded-2xl border p-8 text-center transition duration-300 ${
                    t.highlight
                      ? "border-ember/50 bg-gradient-to-b from-ember/10 to-transparent"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
                  }`}
                >
                  {t.highlight && (
                    <span className="absolute -top-3 rounded-full bg-ember px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                      {m.support.popular}
                    </span>
                  )}
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full border transition duration-300 group-hover:scale-105 ${
                      t.highlight ? "border-ember/40 text-ember" : "border-white/15 text-sand/80"
                    }`}
                  >
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">{tierText[t.icon].title}</h3>
                  <div className="mt-1 font-display text-2xl font-bold text-ember">{t.amount}</div>
                  <p className="mt-2 text-sm text-sand/60">{tierText[t.icon].desc}</p>

                  {t.shopierUrl ? (
                    <a
                      href={t.shopierUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-7 w-full rounded-full py-2.5 text-sm font-semibold transition ${
                        t.highlight
                          ? "bg-ember text-ink hover:bg-amber"
                          : "border border-white/15 hover:border-ember hover:text-ember"
                      }`}
                    >
                      {m.support.donate}
                    </a>
                  ) : (
                    <span className="mt-7 w-full cursor-not-allowed rounded-full border border-white/10 py-2.5 text-sm font-semibold text-sand/40">
                      {m.support.soon}
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Destek olanlar duvarı */}
        {supporters.length > 0 && (
          <Reveal delay={0.15}>
            <div className="mt-16 text-center">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gradient">
                {m.support.wall}
              </h3>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {supporters.map((s, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-ember/30 bg-ember/[0.08] px-4 py-2 text-sm font-medium text-amber shadow-[0_0_18px_-6px] shadow-ember/50"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
