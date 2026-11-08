# Floristería Granada · Avenida Granada · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Granada** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería Granada · **Categoría:** Floristería
- **Dirección:** Avenida Granada, 18, Sur, 14009 Córdoba
- **Plus code:** V69F+3W Córdoba · **Coords:** 37.8677474, -4.7752371
- **Ficha:** `ChIJcywRAY8gbQ0RLr691etEBpw` · `/g/1tht2t1m`
- **Teléfono:** 957 29 33 05 (`tel:+34957293305`) · **Sin web propia**
- **Valoración:** 4,5/5 con 52 reseñas; destaca 3 extractos literales (4, 4 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:00–13:30 y 17:00–19:00); sáb 9:00–13:30;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 panorámica,
  1 apaisada y 8 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-granada
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
