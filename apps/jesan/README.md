# Floristería Jesan · San Blas-Canillejas · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Jesan** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Jesan · **Categoría:** Floristería
- **Dirección:** Avenida de Guadalajara, 2, 28032 Madrid
  (distrito de San Blas-Canillejas, en el Centro Comercial Las Rosas)
- **Plus code:** C99H+9Q Madrid (completo 8CG8C99H+9Q) · **Coords:** 40.418404, -3.6205735
- **Ficha:** `0xd422f7f71c8fe67:0x2e753e64e37d6bdd` · `/g/1v1tpd7_` ·
  reseñas `ChIJZ_7IcX8vQg0R3Wt942Q-dS4`
- **Teléfono:** 917 75 79 10 (`tel:+34917757910`) · **Sin web propia**
- **Valoración:** 4,5/5 con 123 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** de lunes a sábado de 10:00 a 22:00; domingo de 10:00 a 15:00
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal (con sus erratas):** «Ya estamos abiertos de nuevo»
  (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  7 verticales + 2 apaisadas + 1 cuadrada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin extractos de reseñas, sin accesibilidad,
sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/jesan
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
