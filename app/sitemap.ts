import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zacherypipes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly" },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly" },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly" },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
  }));

  return [...staticRoutes, ...postRoutes];
}
