# Sabor Kebab Ciudad Real · Astro

Sitio informativo para el restaurante turco y bar de la calle Corazón de María, 3, bajo (Ciudad Real).

## Desarrollo

```bash
bun run --filter sabor-kebab-ciudad-real dev
bun run --filter sabor-kebab-ciudad-real typecheck
bun run --filter sabor-kebab-ciudad-real build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: C. Corazón de María, 3, bajo, 13003 Ciudad Real. Fijo publicado: 926 09 39 34. Coordenadas, feature id y Plus Code proceden del Google Maps proporcionado.
- Nota de Google: 3,4 sobre 5 con 128 reseñas. Categorías: restaurante turco y bar. Horario: 13:00–1:00 todos los días, sin día de cierre. Accesibilidad: solo acceso adaptado.
- **Precios reales**: los combos (2 dürüm 12,50 €, 3 dürüm 15,00 €, 5 dürüm 25,00 € y 2 platos 13,50 €) están copiados del cartel de ofertas de la fachada, leído en la foto del perfil. El resto de la carta no está publicado y no se copia.
- **Segundo teléfono**: el rótulo de la fachada anuncia «Teléfono pedidos 926 09 39 34 · 622 53 90 31». La ficha de Google solo recoge el fijo; el móvil se muestra como número de pedidos.
- Dominio provisional: `https://sabor-kebab-ciudad-real.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs sabor-kebab-ciudad-real`, en `src/assets/fotos/` con su `.maps-manifest.json`. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
