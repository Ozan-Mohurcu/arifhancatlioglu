import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts as localPosts } from "@/data/blog";
import { profile } from "@/data/site";
import PostView from "@/components/PostView";
import { getPostBySlug } from "@/sanity/blogData";

// Yerel yazılar için statik üretim; Sanity'de sonradan eklenenler talep anında render olur
export function generateStaticParams() {
  return localPosts.map((p) => ({ id: p.id }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostBySlug(id);
  if (!post) return { title: "Bulunamadı" };
  return {
    title: `${post.title.tr} — ${profile.brand}`,
    description: post.excerpt.tr,
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostBySlug(id);
  if (!post) notFound();
  return <PostView post={post} />;
}
