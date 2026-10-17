# FlorReal · Calle Real · Carmona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**FlorReal** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** FlorReal · **Categoría:** Floristería
- **Dirección:** Calle Real (sin distrito ni número publicados), 41410 Carmona (Sevilla)
- **Plus code:** F994+9H Carmona (completo 8C9PF994+9H) · **Coords:** 37.4684261, -5.643568
- **Ficha:** `ChIJla4TSYKMEg0RlhtlQswTojs` · `/g/11gx_n0bk7`
- **Teléfono:** 954 14 04 45 (`tel:+34954140445`) · **Sin web propia**
- **Valoración:** 4,5/5 con 11 reseñas; destaca 2 extractos literales (4 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:30–13:30 y 17:30–20:00); sáb 10:00–13:30;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 6 apaisadas,
  1 cuadrada y 3 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/florreal
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
