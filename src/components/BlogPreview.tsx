"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { posts, getPhotos, localizePost } from "@/data/blog";
import { ArrowUpRight } from "./Icons";
import { useI18n } from "@/i18n/I18nProvider";

export default function BlogPreview() {
  const { m, contentLocale } = useI18n();
  const items = posts.slice(0, 6);

  return (
    <section id="blog" className="relative mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">{m.blog.eyebrow}</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{m.blog.title}</h2>
            <p className="mt-3 max-w-lg text-sand/70">{m.blog.desc}</p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition hover:border-ember hover:text-ember"
          >
            {m.blog.seeAll} <ArrowUpRight size={16} />
          </Link>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => {
          const cover = getPhotos(p)[0];
          const loc = localizePost(p, contentLocale);
          return (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${p.id}`}
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ash">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cover}
                    alt={p.country}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {p.country}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug transition group-hover:text-ember">
                    {loc.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-sand/60">{loc.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
