# El rincón de la paella · Astro

Sitio informativo para la casa de paellas, arroces y guisos para llevar de la calle Francisco Fernández Ordóñez, 5 (Miguelturra, Ciudad Real).

## Desarrollo

```bash
bun run --filter el-rincon-de-la-paella dev
bun run --filter el-rincon-de-la-paella typecheck
bun run --filter el-rincon-de-la-paella build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Francisco Fernández Ordóñez, 5, 13170 Miguelturra (Ciudad Real). Teléfono publicado: 672 60 17 17. Coordenadas, feature id y Plus Code (8CCRX457+CM) proceden del Google Maps proporcionado.
- Nota de Google: 5,0 sobre 5 con 33 reseñas. Categoría: restaurante de comida para llevar.
- **La ficha no publica horario**: la web lo dice así y remite al teléfono en lugar de inventar franjas.
- Tampoco hay carta con precios ni web propia. Los platos salen de las fotos del perfil (paella mixta, paella de marisco, arroz negro, arroz con verduras, fideuá, cordero, pollo guisado, garbanzos, ensaladilla) y de las reseñas (paella mixta para cinco, croquetas).
- Dominio provisional: `https://el-rincon-de-la-paella.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs el-rincon-de-la-paella`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
