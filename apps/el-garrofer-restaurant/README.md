# El Garrofer Restaurant · Pallejà · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**El Garrofer Restaurant** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** El Garrofer Restaurant · **Categorías:** mediterráneo, restaurante
- **Dirección:** Av. Prat de la Riba, 125, 08780 Pallejà, Barcelona
- **Plus code:** CX9X+C9 Pallejà (completo 8FH3CX9X+C9) · **Coords:** 41.4185998, 1.9984197
- **Ficha:** `ChIJR8ADlaiapBIRNzuRew9Y3B4` · `/g/11b6b6klk1`
- **Teléfono:** 930 15 13 84 (`tel:+34930151384`) · **Sin web propia**
- **Valoración:** 4,4/5 con 1253 reseñas; 3 extractos literales (5, 5 y 5/5), sin firma
- **Horario:** dom 13:00–17:00; lun–jue 13:00–16:30; vie 13:00–16:30 y 20:30–23:30; sáb 13:00–17:00 y 20:30–24:00
- **Accesibilidad:** aseo y asientos adaptados disponibles
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/el-garrofer-restaurant
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
