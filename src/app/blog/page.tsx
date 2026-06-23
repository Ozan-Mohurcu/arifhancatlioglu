import type { Metadata } from "next";
import { profile } from "@/data/site";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: `Country Notes — ${profile.brand}`,
  description: "Memories and impressions from the countries Arifhan has visited.",
};

export default function BlogIndex() {
  return <BlogList />;
}
