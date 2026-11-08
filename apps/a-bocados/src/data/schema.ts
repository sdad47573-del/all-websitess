/**
 * Migas de pan y FAQ para el JSON-LD.
 *
 * El schema Restaurant, WebPage y las imágenes los genera Layout.astro desde
 * SCHEMA y GALLERY, así que aquí solo viven las migas y el FAQ.
 */
import { BUSINESS, FAQ } from "./site";

const site = BUSINESS.siteUrl;

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site).toString(),
    })),
  };
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};
