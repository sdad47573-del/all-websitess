# Restaurante El Cortijillo · Astro

Landing estática bilingüe para El Cortijillo, restaurante familiar de La Cala de Mijas.

## Desarrollo

```bash
bun run --filter restaurante-el-cortijillo dev
bun run --filter restaurante-el-cortijillo check
bun run --filter restaurante-el-cortijillo typecheck
bun run --filter restaurante-el-cortijillo build
```

## SEO y datos

- Español en `/` e inglés en `/en/`, con canonical, hreflang, metadatos Open Graph y Twitter.
- Sitemap, `robots.txt`, Schema.org `Restaurant` + `FAQPage`, mapa, indicaciones y contacto.
- Datos consultados en la ficha de Google Maps, Turismo de Mijas e Instagram público del restaurante.
- Horarios procedentes del perfil social y la oficina de turismo; confirmar antes de publicar cambios definitivos.
- Dominio provisional: `https://restaurante-el-cortijillo.vercel.app`. Actualizar `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` al establecer dominio final.

## Fotos de Google Maps

El sitio enlaza a la ficha y a su galería, pero no se pudo extraer de Maps una URL directa al archivo de foto. El arte del hero y el social card son ilustraciones originales y no se presentan como fotografías reales del local. Las fotos autorizadas se pueden integrar después en `src/assets/`.
