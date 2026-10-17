# FLORES TENORIO · Huerta de la Fontanilla · Sevilla

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**FLORES TENORIO** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** FLORES TENORIO · **Categoría:** Floristería
- **Dirección:** Calle Huerta de la Fontanilla, Distrito Norte, 41009 Sevilla
- **Plus code:** C289+63 Sevilla (completo 8C9PC289+63) · **Coords:** 37.4155472, -5.9823607
- **Ficha:** `ChIJN41IYlhpEg0RK4Dg50iSj9U` · `/g/11f3qxgvy7`
- **Teléfono:** 605 45 89 85 (`tel:+34605458985`) · **Sin web propia**
- **Valoración:** 4,6/5 con 5 reseñas; destaca 2 extractos literales (5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** todos los días 8:00–15:00, incluidos sábado y domingo
- **Accesibilidad:** la ficha no publica datos de accesibilidad
- **Descripción:** la ficha no publica descripción del titular.
- **Fotos:** 2 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 vertical
  y 1 apaisada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flores-tenorio
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
