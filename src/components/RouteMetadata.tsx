import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { profile } from "@/data/portfolio";
import pages from "@/data/metadata.json";

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = Object.prototype.hasOwnProperty.call(pages, path)
      ? pages[path as keyof typeof pages]
      : undefined;
    const title = page?.title ?? "Page Not Found | Adnan Khattak";
    const description = page?.description ?? "This page could not be found. Explore Adnan Khattak's mobile engineering portfolio.";
    const url = new URL(path, profile.siteUrl).href;

    document.title = title;
    const setMeta = (attribute: "name" | "property", key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.content = content;
    };
    setMeta("name", "description", description);
    setMeta("name", "robots", page ? "index, follow" : "noindex, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }, [pathname]);

  return null;
};

export default RouteMetadata;
