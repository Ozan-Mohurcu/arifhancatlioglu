import type { Metadata } from "next";
import { profile } from "@/data/site";
import BlogList from "@/components/BlogList";
import { getPosts } from "@/sanity/blogData";

export const metadata: Metadata = {
  title: `Country Notes — ${profile.brand}`,
  description: "Memories and impressions from the countries Arifhan has visited.",
};

export default async function BlogIndex() {
  const posts = await getPosts();
  return <BlogList posts={posts} />;
}
