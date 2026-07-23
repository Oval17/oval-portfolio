import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const studioRoutes: MetadataRoute.Sitemap = [
    "projects",
    "blog",
    "books",
    "extras",
  ].map((slug) => ({
    url: `https://ovalele.in/studio/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: "https://ovalele.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://ovalele.in/studio",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...studioRoutes,
  ];
}
