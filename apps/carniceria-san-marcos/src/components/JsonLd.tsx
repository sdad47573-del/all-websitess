import { FAQS, PRODUCTS } from "@/lib/shop";

/**
 * Structured data so Google shows product prices and the FAQ in results.
 * Product offers are rendered inline (ItemPage → mainEntity ItemList) and the
 * FAQ block is injected with dangerouslySetInnerHTML per Google's guidelines.
 */
export function JsonLd() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const productsLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        category: p.category,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: p.pricePerKg,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsLd) }}
      />
    </>
  );
}
