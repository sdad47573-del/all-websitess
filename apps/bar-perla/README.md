# Bar Perla

Web informativa de **Bar Perla**, bar restaurante en la **Av. de Huelva, 88 · 11540 Sanlúcar de Barrameda** (Cádiz). Astro, Tailwind y DaisyUI, como el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps (octubre de 2026): nombre, dirección,
  teléfono (956 36 40 43), categoría, horario, accesibilidad, valoración (4,2 con 575 reseñas),
  coordenadas y plus code.
- Horario: lunes y de miércoles a sábado 12:00–16:30 y 20:30–24:00; domingo 12:00–17:00;
  martes cerrado.
- La ficha no publica descripción del titular ni carta. El contenido se apoya en la categoría
  y en las reseñas: pescado y ensaladas, con la ensalada de marisco mencionada.
- Fotos: 10 imágenes descargadas de la galería con
  `node scripts/fetch-maps-photos.mjs bar-perla` y reducidas con
  `node scripts/optimize-source-images.mjs --max=1600 bar-perla`.
- `siteUrl` (`https://bar-perla.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=bar-perla
bun run typecheck   # dentro de apps/bar-perla
node scripts/check-site-content.mjs bar-perla
```

## Crédito

El pie incluye «Creado por Sur Digital» con enlace a <https://sur-digital.vercel.app/>.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo).
2. Confirmar con el titular horario, festivos y carta.
3. Revisar las fotos publicadas y concretar sus `alt` si el titular aporta descripciones.
