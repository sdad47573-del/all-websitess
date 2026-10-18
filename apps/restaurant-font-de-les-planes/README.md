# Restaurant Font de Les Planes · Barcelona · Sarrià-Sant Gervasi

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Font de Les Planes** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Font de Les Planes · **Categoría:** Restaurante
- **Dirección:** BV-1462, Carrer Vallvidrera a Sant Cugat, Km. 6.5, 08017 Barcelona (Sarrià-Sant Gervasi)
- **Plus code:** C3HQ+75 Barcelona (completo 8FH2C3HQ+75) · **Coords:** 41.4281844, 2.0879982
- **Ficha:** `ChIJwXiTIWeXpBIRQ48Nakkv6xc` · `/g/11bwkdz_d7`
- **Teléfono:** 625 96 52 52 (`tel:+34625965252`) · **Sin web propia**
- **Valoración:** 4,2/5 con 3926 reseñas; 3 extractos literales (5, 5 y 5/5), sin firma
- **Horario:** martes cerrado; resto 9:00–19:00
- **Accesibilidad:** aparcamiento y aseo adaptados disponibles
- **Descripción:** cocina catalana tipo chalet, paellas, terraza y bosque (literal)
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-font-de-les-planes
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
