# FLORS MONTSERRAT · Av. de Sant Ramon Nonat · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**FLORS MONTSERRAT** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** FLORS MONTSERRAT · **Categoría:** Floristería
- **Dirección:** Av. de Sant Ramon Nonat, 24, Les Corts, 08028 Barcelona
- **Plus code:** 94G8+QQ Barcelona (completo 8FH494G8+QQ) · **Coords:** 41.376913, 2.1169879
- **Ficha:** `0x12a498f735410401:0x996f7335f9169bea` · `/g/1twzyvz8`
- **Teléfono:** 611 63 92 07 (`tel:+34611639207`) · **Sin web propia**
- **Valoración:** 4,9/5 con 117 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos mar–vie (10:00–14:00 y 17:00–20:00); sáb 10:00–14:00;
  dom 11:00–14:00; lun cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible; no hay aparcamiento
  adaptado
- **Distintivo:** amigable con la comunidad LGBTQ+ (único que publica la ficha)
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  2 apaisadas, 5 verticales y 3 cuadradas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flors-montserrat
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
