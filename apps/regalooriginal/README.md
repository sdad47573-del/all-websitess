# RegaloOriginal.com · Alcobendas · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**RegaloOriginal.com** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** RegaloOriginal.com · **Categorías:** Tienda de regalos, Tienda de
  cestas de regalo (no es una floristería: el esquema usa `@type: Store`)
- **Dirección:** Calle Valportillo Primera, 12, 28108 Alcobendas, Madrid
  (sin distrito publicado)
- **Plus code:** G8JW+FM Alcobendas (completo 8CG3G8JW+FM) · **Coords:** 40.5311539, -3.653366
- **Ficha:** `0xd422c7af7cef3b9:0x9babe2e20b222eac` · `/g/1q62mnh4x` ·
  reseñas `ChIJufPO93osQg0RrC4iC-Liq5s`
- **Teléfono:** 919 49 60 76 (`tel:+34919496076`) · **Sin web publicada en la ficha**
- **Valoración:** 4,4/5 con 27.956 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** de lunes a viernes de 9:00 a 19:30; sábado y domingo de 9:00 a 14:00
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal (con sus erratas):** «Regalos personalizados y desayunos a
  domicilio :) Entregamos en 24 horas en toda España y en dos días en toda Europa.
  Tenemos más de 15.000 productos diferentes, pensados para todas las ocasiones:
  cumpleaños, aniversarios, sorpresas románticas...» (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  6 apaisadas + 4 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin extractos de reseñas, sin accesibilidad,
sin distrito, sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/regalooriginal
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
