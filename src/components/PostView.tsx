"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/I18nProvider";
import type { ViewPost } from "@/sanity/blogData";

export default function PostView({ post }: { post: ViewPost }) {
  const { m, contentLocale } = useI18n();
  const title = post.title[contentLocale];
  const paragraphs = post.paragraphs[contentLocale]?.length
    ? post.paragraphs[contentLocale]
    : post.paragraphs.tr;
  const photos = post.photos;

  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <Link href="/blog" className="text-sm text-sand/60 transition hover:text-ember">
        ← {m.blog.backList}
      </Link>

      <div className="mt-5 flex items-center gap-3 text-sm text-sand/50">
        <span className="rounded-full border border-ember/30 bg-ember/[0.08] px-3 py-1 font-semibold text-amber">
          {post.country}
        </span>
        {post.city && <span>{post.city}</span>}
        {post.date && (
          <>
            <span>·</span>
            <span>{post.date}</span>
          </>
        )}
      </div>

      <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h1>

      {photos[0] && (
        <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-ash">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photos[0]} alt={post.country} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-sand/85">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {photos.slice(1).map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-ash">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${post.country} ${i + 2}`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link href="/blog" className="text-sm font-semibold text-ember hover:underline">
          ← {m.blog.other}
        </Link>
      </div>
    </main>
  );
}
