import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z
      .enum(["Precios", "SEO local", "Guías", "Sectores", "Anuncios"])
      .default("Guías"),
    // Preguntas frecuentes del artículo. Si existen, la plantilla pinta el
    // bloque visible y emite el FAQPage desde la misma fuente: no hay que
    // repetirlas en el Markdown ni pueden desincronizarse del schema.
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
