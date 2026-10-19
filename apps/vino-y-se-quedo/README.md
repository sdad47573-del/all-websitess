# Vino y se quedó

Landing page estática en Astro para Vino y se quedó,
restaurante de tapas y vinos con vistas a la Plaza de España ·
11150 Vejer de la Frontera (Cádiz).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/vino-y-se-quedo
bun run dev
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección aproximada, coordenadas) y `FAQPage`.
- Datos contrastados con la ficha de Google Maps del local y reseñas públicas:
  vistas a la Plaza de España, Vejer; vinos de Cádiz, tapas, platos y atún.
- **No se publican teléfono ni horario**: no hay fuente verificable y no se inventan.
  El JSON-LD no lleva `telephone` ni `openingHoursSpecification` por el mismo motivo.
  La web remite a la ficha de Google Maps para esos datos.

## Fotografías

No se han descargado fotos de Google Maps (derechos de autor de sus autores).
La web usa ilustraciones propias SVG en `public/fotos/` como marcadores de posición.
Si el titular facilita fotos del local (o autoriza por escrito las de su ficha),
guárdalas en `public/fotos/` o `src/assets/` y referencia cada `alt`.

Antes de publicar:

1. Confirmar dirección exacta, teléfono y horario con el titular y añadirlos a
   `src/pages/index.astro` (const `business`), al JSON-LD y a esta página.
2. Sustituye los SVG por fotos propias (terraza, Plaza de España, atún, vinos).
3. Genera `public/og.jpg` (1200×630) a partir de una foto propia para compartir en redes.
4. Completa NIF/CIF, razón social y correo del titular en el aviso legal.
