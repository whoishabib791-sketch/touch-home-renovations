import { useEffect } from "react";
import { site } from "../data/site";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function Seo({ title, description, path, image = "/images/kitchen-04.jpg", type = "website" }: SeoProps) {
  const url = `${site.origin}${path}`;
  const fullTitle = title.includes("Touch Home") ? title : `${title} | Touch Home Renovations`;

  useEffect(() => {
    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", type, "property");
    setMeta("og:image", image.startsWith("http") ? image : `${site.origin}${image}`, "property");
    setLink("canonical", url);
  }, [description, fullTitle, image, type, url]);

  return null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.append(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.append(el);
  }
  el.setAttribute("href", href);
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    telephone: site.phone,
    email: site.email,
    url: site.origin,
    image: `${site.origin}/images/kitchen-04.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.suburb,
      addressRegion: site.address.state,
      postalCode: site.address.postcode,
      addressCountry: "AU",
    },
    areaServed: "Melbourne",
    sameAs: [site.social.facebook, site.social.instagram],
  };
}
