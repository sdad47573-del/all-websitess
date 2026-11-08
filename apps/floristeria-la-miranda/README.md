# Floristeria La Miranda · Carrer de la Miranda · Cornellà de Llobregat

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria La Miranda (Cornellà de Llobregat)** publica en su ficha de Google Maps
(consultada el 18 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristeria La Miranda (Cornellà de Llobregat) · **Categoría:** Floristería
- **Dirección:** Carrer de la Miranda, 56, 08940 Cornellà de Llobregat (Barcelona)
- **Plus code:** 936G+3P Cornellà de Llobregat · **Coords:** 41.3601385, 2.0767967
- **Ficha:** `0x12a49942d70c306d:0x7c9d18e405ddf633` · `/g/11c1qrd6bw`
- **Teléfono:** 933 76 43 57 (`tel:+34933764357`) · **Sin web propia**
- **Valoración:** 4,9/5 con 310 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:00–13:30 y 17:00–20:30); sáb 9:00–14:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas y aparcamiento adaptado disponibles.
  Además: amigable con la comunidad LGBTQ+
- **Descripción del titular:** la ficha no publica ninguna (el resumen editorial automático
  de Google no es del titular y no se reproduce)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 6 verticales,
  3 apaisadas y 1 vista, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-la-miranda
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
