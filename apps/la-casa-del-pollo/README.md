# La Casa del Pollo · Astro

Sitio informativo para La Casa del Pollo, restaurante especializado en pollo y comida casera para llevar en la calle Tántalo, 12, Villaverde (28021 Madrid).

## Desarrollo

```bash
bun run --filter la-casa-del-pollo dev
bun run --filter la-casa-del-pollo typecheck
bun run --filter la-casa-del-pollo build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`Menu`/`FAQPage`.
- Dirección: C. Tántalo, 12, Villaverde, 28021 Madrid. Teléfono: 910 70 18 27.
- Nota de Google: 4,7 sobre 5 con 293 reseñas. Horario: martes a domingo, 8:00–15:30; lunes cerrado.
- La carta y los precios se han transcrito del cartel fotografiado en el local y publicado en la galería de Google Maps. Los precios son orientativos y pueden cambiar.
- Dominio provisional: `https://la-casa-del-pollo.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs la-casa-del-pollo`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital · https://sur-digital.vercel.app/.
