# Restaurante Casa Pacorrín

Landing page estática en Astro para Restaurante Casa Pacorrín, cocina mediterránea, arroces y carnes
a la brasa en Cam. Huerta de Abajo, 131 · 30565 Las Torres de Cotillas, Murcia.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/restaurante-casa-pacorrin
bun run dev
bun run check
bun run typecheck
bun run build
```

## SEO y contenido

- Metadatos locales, canonical, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horarios, accesibilidad) y `FAQPage`.
- Datos de la ficha de Google Maps: Cam. Huerta de Abajo 131, 30565 Las Torres de Cotillas (Murcia),
  38.029702,-1.2270929, teléfono 968 62 79 77, valoración 4,2 (1.208 reseñas).
- Horario: lunes 9:00-17:00, miércoles 11:00-17:00, jueves a sábado 11:00-17:00 y 20:00-23:50,
  domingo 9:00-17:30, martes cerrado.
- Cocina mediterránea, arroces y carnes a la brasa; salón para eventos y celebraciones.

## Fotografías

10 imágenes descargadas de la ficha de Google Maps con `scripts/fetch-maps-photos.mjs`
(`src/assets/fotos/restaurante-casa-pacorrin-*.jpg` + `.maps-manifest.json`), atribuidas en la
web. La portada y 5 fotos enlazadas en `src/pages/index.astro`; `public/og.jpg` generada desde la
portada.

## Pendiente

El aviso legal deja marcados el NIF/CIF, la razón social, el domicilio fiscal y el correo del titular.
