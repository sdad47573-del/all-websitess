# Floristería Virgen de la Estrella · Primero de Mayo · Coria del Río

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Virgen de la Estrella** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Virgen de la Estrella · **Categoría:** Floristería
- **Dirección:** Avenida Primero de Mayo, 1 (sin distrito publicado),
  41100 Coria del Río (Sevilla)
- **Plus code:** 7WPX+76 Coria del Río (completo 8C2M7WPX+76) · **Coords:** 37.2857074, -6.0519859
- **Ficha:** `ChIJVYNP9cNyEg0RY2T5LZiN8e8` · `/g/11b6xr9pyw`
- **Teléfono:** 954 77 13 64 (`tel:+34954771364`) · **Sin web propia**
- **Valoración:** 4,5/5 con 53 reseñas; incluye un único extracto literal (1/5),
  reproducido tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 17:30–20:30); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** la ficha no publica datos de accesibilidad
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** 9 de la portada de la galería de la ficha (`fetch-maps-photos`), 8 verticales
  y 1 panorámica, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/virgen-estrella
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
