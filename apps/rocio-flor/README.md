# Floristería y Complementos Rocío Flor · San Pío X · Pilas

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería y Complementos Rocío Flor** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería y Complementos Rocío Flor · **Categorías:** Floristería,
  Tienda de accesorios de moda
- **Dirección:** Calle San Pío X, 88 (sin distrito publicado), 41840 Pilas (Sevilla)
- **Plus code:** 8P42+24 Pilas (completo 8C2X8P42+24) · **Coords:** 37.3050678, -6.2997197
- **Ficha:** `ChIJJaH8wzUbEg0RCN6q_CNzNgM` · `/g/11bw2_dw9_`
- **Teléfono:** 616 25 65 08 (`tel:+3461625508`) · **Sin web propia**
- **Valoración:** 4,5/5 con 41 reseñas; destaca 2 extractos literales (5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:30–14:00 y 17:30–20:00); sáb y dom cerrado
- **Accesibilidad:** la ficha no publica datos de accesibilidad
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** 5 de la portada de la galería de la ficha (`fetch-maps-photos`), 3 apaisadas
  y 2 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/rocio-flor
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
