# La mimosa atelier · Calle Periodista Eduardo Baro, 9, Loc 1 · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La mimosa atelier** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** La mimosa atelier (tal como lo publica la ficha) · **Categoría:** Floristería
- **Dirección:** Calle Periodista Eduardo Baro, 9, Loc 1, Sureste, 14010 Córdoba
- **Plus code:** V6GP+XR Córdoba · **Coords:** 37.8774537, -4.7629357
- **Ficha:** `ChIJv-s_7FDfbA0RZ9JcpTQKhSQ` · `/g/11vxcbb6wg`
- **Teléfono:** 624 32 56 62 (`tel:+34624325662`) · **Sin web propia**
- **Valoración:** 4,1/5 con 28 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 17:30–20:00); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible
- **Descripción literal:** arreglos florales únicos para cada ocasión, diseño artesanal
  y flores frescas
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 9 verticales
  y 1 cuadrada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/la-mimosa-atelier
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs la-mimosa-atelier
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/la-mimosa-atelier`).
