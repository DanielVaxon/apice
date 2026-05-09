import type { MetadataRoute } from "next";
import { APICE_INFO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const base = APICE_INFO.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/area-do-cliente"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
