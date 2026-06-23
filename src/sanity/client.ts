import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset, apiVersion } from "./env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // yayınlanmış içerik için hızlı CDN
});

const builder = imageUrlBuilder({ projectId, dataset });

// Sanity görselini URL'e çevir
export function urlForImage(source: unknown): string | null {
  if (!source) return null;
  try {
    return builder.image(source as never).width(1200).fit("max").url();
  } catch {
    return null;
  }
}
