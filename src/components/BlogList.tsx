"use client";

import Link from "next/link";
import { posts, getPhotos, localizePost } from "@/data/blog";
import { useI18n } from "@/i18n/I18nProvider";

export default function BlogList() {
  const { m, contentLocale } = useI18n();

  return (
    <main className="mx-auto max-w-6xl px-5 py-24">
      <Link href="/#blog" className="text-sm text-sand/60 transition hover:text-ember">
        ← {m.blog.backHome}
      </Link>
      <h1 className="mt-4 font-display text-4xl font-bold">{m.blog.title}</h1>
      <p className="mt-3 max-w-lg text-sand/70">
        {posts.length} {m.blog.allDesc}
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const cover = getPhotos(p)[0];
          const loc = localizePost(p, contentLocale);
          return (
            <Link
              key={p.id}
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
                <h2 className="font-display text-lg font-semibold leading-snug transition group-hover:text-ember">
                  {loc.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-sand/60">{loc.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
