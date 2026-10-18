# Restaurant Gabiretxe · Sant Quintí de Mediona · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Gabiretxe** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Gabiretxe · **Categoría:** Restaurante
- **Dirección:** Avinguda de Montserrat, 5, 08777 Sant Quintí de Mediona, Barcelona
- **Plus code:** FM68+PR Sant Quintí de Mediona (completo 8FH3FM68+PR) · **Coords:** 41.4617628, 1.6670736
- **Ficha:** `ChIJd3_o2IRvpBIRkibfnNxud7U` · `/g/1th45mnj`
- **Teléfono:** 938 99 97 73 (`tel:+34938999773`) · **Sin web propia**
- **Valoración:** 4,2/5 con 453 reseñas; 3 extractos literales (5, 4 y 5/5), sin firma
- **Horario:** lunes cerrado; mar–vie 8:00–24:00; sáb–dom 9:00–24:00
- **Accesibilidad:** aseo y asientos adaptados disponibles
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-gabiretxe
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
