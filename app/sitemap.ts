import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zacherypipes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, changeFrequency: "monthly" },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly" },
  ];
}
