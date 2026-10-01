# Restaurante Nueve Dragones · Astro

Sitio bilingüe (español e inglés) para el restaurante chino de La Cala de Mijas.

## Desarrollo

```bash
bun run --filter restaurante-nueve-dragones dev
bun run --filter restaurante-nueve-dragones check
bun run --filter restaurante-nueve-dragones typecheck
bun run --filter restaurante-nueve-dragones build
```

## SEO y datos locales

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección pública: P.º Costa del Sol, 5, 29649 La Cala de Mijas, Málaga. Teléfono publicado: +34 951 23 67 73. Las coordenadas y la ficha enlazada proceden del Google Maps proporcionado.
- Datos contrastados con directorios públicos (Sybaria y Wanderboat/Wanderlog); los horarios publicados pueden variar y la web recomienda confirmar por teléfono. No se afirma que estos directorios sean canales oficiales del restaurante.
- Dominio provisional: `https://restaurante-nueve-dragones.vercel.app`. Al decidir el dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts`.

## Fotografías

La lectura de Google Maps no proporcionó URL de archivo fotográfico directa verificable para incrustar. Los botones abren la ficha original para consultar sus fotos. El motivo vectorial decorativo y la tarjeta social son ilustraciones originales, no fotografías del restaurante.
