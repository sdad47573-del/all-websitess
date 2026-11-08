# Bar Restaurante El Manjar Pinillo · Astro

Web local bilingüe para Bar Restaurante El Manjar, en el Polígono El Pinillo, Torremolinos.

## Desarrollo

```bash
bun run --filter el-manjar-pinillo dev
bun run --filter el-manjar-pinillo check
bun run --filter el-manjar-pinillo typecheck
bun run --filter el-manjar-pinillo build
```

## SEO y datos

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos locales/sociales, sitemap y JSON-LD `Restaurant` + `FAQPage`.
- Incluye teléfono, mapa, indicaciones y acceso a Facebook para consultar el menú diario publicado.
- La ficha de Maps confirma nombre y coordenadas. Dirección, teléfono, desayunos y Facebook se contrastaron con la página pública del negocio, Waze y directorios. El horario puede cambiar y se presenta como sujeto a confirmación.
- Dominio provisional: `https://el-manjar-pinillo.vercel.app`; actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando tengas dominio definitivo.

## Fotografías

La ficha de Google Maps no entregó archivos directos de imagen. Los enlaces de la web abren la galería oficial. Hero y tarjeta social son ilustraciones SVG originales, no fotografías del restaurante. Las publicaciones de menú pueden verse en la página de Facebook enlazada.
