import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts, getPost } from "@/data/blog";
import { profile } from "@/data/site";
import PostView from "@/components/PostView";

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
  return <PostView post={post} />;
}
