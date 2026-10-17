# Floristería y Decoración Aurora · Gregorio Marañón · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería y Decoración Aurora** publica en su ficha de Google Maps (consultada el 17 de
octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería y Decoración Aurora · **Categoría:** Floristería
- **Dirección:** Calle Dr. Gregorio Marañón, 3, Centro, 14004 Córdoba
- **Plus code:** V6H8+6J Córdoba · **Coords:** 37.8781096, -4.78343
- **Ficha:** `ChIJcWKPOZwgbQ0Rglx_K7grYzQ` · `/g/11xngtt1l`
- **Teléfono:** 957 20 33 41 (`tel:+34957203341`) · **Sin web propia**
- **Valoración:** 4,2/5 con 41 reseñas; destaca 2 extractos literales (ambos de 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:30–14:00 y 17:30–20:30); sáb 10:00–14:00;
  dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 2 apaisadas,
  1 cuadrada y 7 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-aurora
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
