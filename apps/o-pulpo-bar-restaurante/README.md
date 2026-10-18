# O'Pulpo Bar Restaurante · Gavà · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**O'Pulpo Bar Restaurante** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** O'Pulpo Bar Restaurante · **Categorías:** mediterráneo, taberna
- **Dirección:** Carrer de Montflorit, 71, 08850 Gavà, Barcelona
- **Plus code:** 8232+54 Gavà (completo 8FH38232+54) · **Coords:** 41.3028836, 2.0003747
- **Ficha:** `ChIJv3ZHdiedpBIRhPcuY5s-gno` · `/g/1v6gb8jh`
- **Teléfono:** 936 62 32 01 (`tel:+34936623201`) · **Sin web propia**
- **Valoración:** 4,5/5 con 846 reseñas; 3 extractos literales (5, 5 y 5/5), sin firma
- **Horario:** miércoles cerrado; dom, lun, mar y jue 13:00–17:00; vie y sáb 13:00–17:00 y 20:30–23:30
- **Accesibilidad:** acceso y aparcamiento adaptados no disponibles
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/o-pulpo-bar-restaurante
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
