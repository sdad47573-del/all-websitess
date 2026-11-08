# Flors Carmen · Trav. de Dalt · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Flors Carmen** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Flors Carmen · **Categoría:** Floristería
- **Dirección:** Trav. de Dalt, 98, Gràcia, 08024 Barcelona
- **Plus code:** C565+92 Barcelona · **Coords:** 41.4109702, 2.1575575
- **Ficha:** `0x12a4a2ba7f337e73:0x77b7be73b13774f3` · `/g/11d_d51jw_`
- **Teléfono:** 696 60 22 84 (`tel:+34696602284`) · **Sin web propia**
- **Valoración:** 4,3/5 con 23 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–mié y vie (11:00–13:30 y 17:30–20:30, jue desde las 11:30);
  sáb y dom 11:00–13:30
- **Accesibilidad:** acceso para sillas de ruedas disponible; sin aparcamiento adaptado
- **Descripción del titular (literal):** «Flores y plantas»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 5 apaisadas,
  2 panorámicas y 3 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flors-carmen
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
