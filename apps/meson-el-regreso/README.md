# Mesón El Regreso

Landing page estática en Astro para el Mesón El Regreso, restaurante del Distrito Centro de Málaga
(plaza de San Juan de la Cruz, 1 · Edificio Galaxia, local 7).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/meson-el-regreso
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, servicios, redes) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del restaurante, RestaurantGuru, TheFork y Tripadvisor:
  teléfono 951 24 66 19, plaza de San Juan de la Cruz 1 (Edificio Galaxia, local 7), 29007 Málaga,
  horario de martes a sábado 12:15–16:30 y 20:00–23:30.
- No se publican precios de la carta: solo se citan platos presentes en la carta difundida por el local
  y un precio medio orientativo (20-30 €/persona) indicado como tal.

## Fotografías

Las imágenes de `public/fotos/` se descargaron del perfil de Google Maps del propio restaurante
(`maps.google.com/maps/contrib/110332947300766950535`) y están atribuidas en la propia web.

Antes de publicar conviene:

1. Revisar que cada foto corresponde al local y ajustar los textos `alt` y los nombres de archivo
   (ahora son genéricos: `meson-el-regreso-malaga-foto-N.jpg`) según lo que se vea en cada imagen.
2. Confirmar que el titular autoriza el uso de esas fotografías en la web.
3. Optimizar los archivos (pesan entre 140 y 280 KB) si se quiere mejorar el LCP.

## Antes de publicar

1. Cambiar `https://meson-el-regreso.vercel.app` por el dominio definitivo en `astro.config.mjs`,
   canonical, JSON-LD, Open Graph y `public/robots.txt`.
2. Confirmar con el restaurante el horario vigente y la disponibilidad de carta.
