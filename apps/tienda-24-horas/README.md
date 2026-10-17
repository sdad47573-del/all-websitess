# Tienda 24 horas · Calle Jaboneros, 9 · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Tienda 24 horas** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Tienda 24 horas · **Categoría:** Tienda general
- **Dirección:** Calle Jaboneros, 9, Distrito Centro, 29009 Málaga
- **Plus code:** PHFC+29 Málaga · **Coords:** 36.7225509, -4.4290741
- **Ficha:** `ChIJUcDGfqv3cg0RXZEAbxyjp80` · `/g/11w92j6hyt`
- **Teléfono:** 674 44 93 87 (`tel:+34674449387`) · **Sin web propia**
- **Valoración:** 5/5 con 3 reseñas (sin extractos literales en el endpoint)
- **Horario:** abierto 24 horas, todos los días (en el esquema: 00:00–23:59 lun–dom)
- **Accesibilidad:** la ficha no publica ningún dato
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor →
  sin atribución

Lo que la ficha no publica no se inventa: sin descripción, sin catálogo ni precios. Todo
vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/tienda-24-horas
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs tienda-24-horas
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/tienda-24-horas`).
