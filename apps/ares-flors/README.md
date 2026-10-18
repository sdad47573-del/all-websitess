# Ares Flors · Carrer de Sepúlveda · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Ares Flors** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Ares Flors · **Categoría:** Floristería
- **Dirección:** Carrer de Sepúlveda, 55, Eixample, 08015 Barcelona
- **Plus code:** 95H4+42 Barcelona · **Coords:** 41.3777997, 2.1550022
- **Ficha:** `0x12a4a2633256ecbf:0x190ce3d934bfe5dc` · `/g/1thh4l77`
- **Teléfono:** 933 25 99 75 (`tel:+34933259975`) · **Sin web propia**
- **Valoración:** 4,7/5 con 65 reseñas; destaca 3 extractos literales (5, 5 y 4/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–vie 9:00–20:00; sáb 9:00–14:00; dom 9:00–14:00
- **Accesibilidad:** acceso para sillas de ruedas disponible; sin aparcamiento adaptado.
  Además la marca como amigable con la comunidad LGBTQ+
- **Descripción del titular (literal):** «Flors i plantes. Fem rams i centres florals.
  enviament a domicili..»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 9 verticales
  y 1 cuadrada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/ares-flors
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
