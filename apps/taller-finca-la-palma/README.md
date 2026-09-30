# Taller Finca la Palma

Landing estática en Astro para el taller situado en C. Francisco Barbin, 11, Teatinos, Málaga.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/taller-finca-la-palma
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## Contenido y SEO

- Dirección, teléfono fijo, coordenadas y correo: ficha/directorio local de Taller Finca la Palma.
- WhatsApp (+34 647 00 45 77) y servicios de chapa, pintura y mecánica: perfil oficial de Instagram del taller.
- La página incluye llamada, WhatsApp, email, Instagram, indicaciones, mapa y JSON-LD `AutoRepair`.
- Se omiten horarios, rating y reseñas porque no se verificaron directamente con el negocio.
- Dominio provisional: `https://taller-finca-la-palma.vercel.app`. Actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` cuando se confirme el dominio.
- El enlace de Maps proporcionado abre la ficha general sin apuntar a una foto identificable; la página enlaza a la ficha/galería, pero no incrusta imágenes todavía.

Antes de publicar, confirmar con el taller los datos de contacto y el dominio definitivo. Para incorporar fotos, pedir al titular archivos o enlaces directos autorizados.
