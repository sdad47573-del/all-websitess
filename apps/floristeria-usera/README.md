# Floristería · Usera · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería** (Calle de Marcelo Usera, 141) publica en su ficha de Google Maps
(consultada el 17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería (así, sin más, como en la ficha) · **Categoría:** Floristería
- **Dirección:** Calle de Marcelo Usera, 141, 28026 Madrid (distrito de Usera)
- **Plus code:** 97PQ+29 Madrid (completo 8CG797PQ+29) · **Coords:** 40.3850703, -3.7115178
- **Ficha:** `0xd422742f3156ce5:0xf37dac350d69083b` · `/g/11swm711cm` ·
  reseñas `ChIJ5WwV80InQg0ROwhpDTWsffM`
- **Teléfono:** 632 33 73 11 (`tel:+34632337311`) · **Sin web propia**
- **Valoración:** 4,4/5 con 15 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** todos los días de 9:30 a 21:30, de lunes a domingo
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción:** la ficha no publica ninguna
- **Fotos:** 5 de la portada de la galería de la ficha (`fetch-maps-photos`),
  2 verticales + 2 apaisadas + 1 panorámica, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, sin extractos de reseñas,
sin accesibilidad, sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-usera
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
