import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost, getPhotos } from "@/data/blog";
import { profile } from "@/data/site";

export function generateStaticParams() {
  return posts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);
  if (!post) return { title: "Bulunamadı" };
  return {
    title: `${post.title} — ${profile.brand}`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getPost(id);
  if (!post) notFound();

  const photos = getPhotos(post);

  return (
    <main className="mx-auto max-w-3xl px-5 py-24">
      <Link href="/blog" className="text-sm text-sand/60 transition hover:text-ember">
        ← Tüm ülke notları
      </Link>

      <div className="mt-5 flex items-center gap-3 text-sm text-sand/50">
        <span className="rounded-full border border-ember/30 bg-ember/[0.08] px-3 py-1 font-semibold text-amber">
          {post.country}
        </span>
        <span>{post.city}</span>
        <span>·</span>
        <span>{post.date}</span>
      </div>

      <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
        {post.title}
      </h1>

      {/* Kapak */}
      <div className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-ash">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photos[0]} alt={post.country} className="h-full w-full object-cover" />
      </div>

      {/* Metin */}
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-sand/85">
        {post.paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Galeri (kalan fotoğraflar) */}
      {photos.length > 1 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {photos.slice(1).map((src, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-ash"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${post.country} ${i + 2}`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link href="/blog" className="text-sm font-semibold text-ember hover:underline">
          ← Diğer ülke notlarına dön
        </Link>
      </div>
    </main>
  );
}
