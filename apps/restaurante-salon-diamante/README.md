# Restaurante Salón Diamante

Landing estática en Astro para el Restaurante Salón Diamante, en la calle Islas Baleares 7 del polígono de Onda (Castellón).

## Desarrollo

```bash
bun install
bun run dev
bun run check
bun run typecheck
bun run build
```

## Contenido y datos

- Nombre, dirección, coordenadas, categoría, teléfono, horario, nota, reseñas y servicios de
  accesibilidad: ficha pública de Google Maps (`39.966033,-0.2370636`, feature
  `0xd600b3d8bfdd54d:0x4f55180c6533c5c2`). Están en `src/data/site.ts`.
- La sección «El salón» cita la descripción que el propio local publica en su ficha (almuerzos,
  comidas, bodas, bautizos, cumpleaños).
- Fotografías: descargadas del perfil del establecimiento en Google Maps con
  `node scripts/fetch-maps-photos.mjs restaurante-salon-diamante` y reducidas con
  `node scripts/optimize-source-images.mjs restaurante-salon-diamante`. Viven en `src/assets/fotos/`.
- La ficha **no** publica carta, precios ni web propia (muestra la opción de añadir un sitio web). Los
  platos que aparecen en la sección «La mesa» son los que mencionan la descripción y las reseñas
  destacadas, no una carta oficial.

## Antes de publicar

1. Sustituir `https://restaurante-salon-diamante.vercel.app` por el dominio definitivo en
   `astro.config.mjs` y `public/robots.txt` (el canonical y el Open Graph salen de `BUSINESS.siteUrl`).
2. Completar los datos legales pendientes (NIF/CIF, razón social y correo de contacto) en
   `src/pages/aviso-legal.astro` y quitar el aviso de la parte superior.
3. Confirmar con el establecimiento la dirección, el teléfono, el horario y la oferta antes de publicar.
