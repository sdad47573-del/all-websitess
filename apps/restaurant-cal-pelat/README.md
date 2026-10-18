# Restaurant Cal Pelat · Sant Jaume dels Domenys · Tarragona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Restaurant Cal Pelat** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Restaurant Cal Pelat · **Categoría:** Restaurante
- **Dirección:** Carrer Tarragona, 2, 43713 Sant Jaume dels Domenys, Tarragona
- **Plus code:** 7HP6+C9 Sant Jaume dels Domenys (completo 8FH37HP6+C9) · **Coords:** 41.2860237, 1.5609728
- **Ficha:** `ChIJc3A0QrZ1pBIR3tOI4dXv2lY` · `/g/11md1qn2zv`
- **Teléfono:** 977 15 21 15 (`tel:+34977152115`) · **Sin web propia**
- **Valoración:** 4,7/5 con 139 reseñas; 3 extractos literales (5, 4 y 4/5), sin firma
- **Horario:** lunes cerrado; mar–vie 7:00–16:00; sáb–dom 8:00–16:00
- **Accesibilidad:** asientos, aseo y aparcamiento adaptados disponibles
- **Descripción:** restaurante con brasa, desayunos de tenedor, menús y tapas (literal)
- **Fotos:** 10 de la portada de la galería (`fetch-maps-photos`), sin autor → sin atribución

Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/restaurant-cal-pelat
bun install
bun run dev
bun run build
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
