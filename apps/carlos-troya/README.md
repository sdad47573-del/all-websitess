# Flores Carlos de Troya · Salamanca · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Flores Carlos de Troya** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Flores Carlos de Troya · **Categoría:** Floristería
- **Dirección:** Calle de Diego de León, 61, 28006 Madrid (distrito de Salamanca)
- **Plus code:** C8MF+WJ Madrid (completo 8CG8C8MF+WJ) · **Coords:** 40.4347757, -3.6759117
- **Ficha:** `0xd422861549b3b49:0xd358a4c62542e9c8` · `/g/11hb42l077` ·
  reseñas `ChIJSTubVGEoQg0RyOlCJcakWNM`
- **Teléfono:** 912 98 67 26 (`tel:+34912986726`) · **Sin web propia**
- **Valoración:** 4,7/5 con 69 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** de lunes a viernes de 10:00 a 19:00; sábado y domingo cerrado
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  2 verticales + 2 apaisadas + 1 panorámica + 3 cuadradas + 2 vistas,
  sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, sin extractos de reseñas,
sin accesibilidad, sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/carlos-troya
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
