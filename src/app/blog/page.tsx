import Link from "next/link";
import type { Metadata } from "next";
import { posts, getPhotos } from "@/data/blog";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: `Ülke Notları — ${profile.brand}`,
  description: "Arifhan'ın gezdiği ülkelerden anılar ve izlenimler.",
};

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-24">
      <Link href="/#blog" className="text-sm text-sand/60 transition hover:text-ember">
        ← Ana sayfa
      </Link>
      <h1 className="mt-4 font-display text-4xl font-bold">Ülke Notları</h1>
      <p className="mt-3 max-w-lg text-sand/70">
        Gezdiğim {posts.length} ülkeden anılar, izlenimler ve küçük hikâyeler.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => {
          const cover = getPhotos(p)[0];
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
                  {p.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm text-sand/60">{p.excerpt}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
