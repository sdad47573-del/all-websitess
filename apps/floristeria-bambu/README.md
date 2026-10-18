# Floristeria Bambú · Carrer de Berlín · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Bambú** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Bambú · **Categoría:** Floristería
- **Dirección:** Carrer de Berlín, 35, Les Corts, 08014 Barcelona
- **Plus code:** 94MQ+45 Barcelona · **Coords:** 41.3828412, 2.1379178
- **Ficha:** `0x12a4993f94e03555:0xeb3145c90042acb6` · `/g/11l8g5nfkn`
- **Teléfono:** 634 17 78 28 (`tel:+34634177828`) · **Sin web propia**
- **Valoración:** 4,6/5 con 113 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** mar–vie 10:00–19:30; lun 11:30–19:30; sáb 10:00–14:00; dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible; no hay aparcamiento
  adaptado
- **Distintivos:** se identifica como de propietarias mujeres; amigable con la
  comunidad LGBTQ+
- **Descripción del titular:** «Floristería Bambú es un estudio floral distintivo
  dedicado a llevar la belleza de la naturaleza […]», literal y por párrafos
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  4 apaisadas, 1 panorámica, 3 verticales, 1 vista y 1 cuadrada, sin autor →
  sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-bambu
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
