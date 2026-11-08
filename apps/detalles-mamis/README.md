# DETALLES MAMIS · Avenida de Cádiz, 56 · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**DETALLES MAMIS** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** DETALLES MAMIS (así, en mayúsculas, como lo publica la ficha) ·
  **Categoría:** Floristería
- **Dirección:** Avenida de Cádiz, 56, Sur, 14009 Córdoba
- **Plus code:** V6CC+8G Córdoba · **Coords:** 37.8707922, -4.778748
- **Ficha:** `ChIJsZ668I8gbQ0R-0HuvnRpNjM` · `/g/1hhwh83n1`
- **Teléfono:** 662 14 43 04 (`tel:+34662144304`) · **Sin web propia**
- **Valoración:** 4,9/5 con 21 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos lun–jue (9:30–13:30 y 17:30–19:30); vie y sáb solo por la
  mañana; dom 10:00–13:00
- **Accesibilidad:** acceso para sillas de ruedas disponible
- **Fotos:** 9 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor →
  sin atribución

Lo que la ficha no publica no se inventa: sin descripción, sin catálogo ni precios. Todo
vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/detalles-mamis
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs detalles-mamis
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/detalles-mamis`).
