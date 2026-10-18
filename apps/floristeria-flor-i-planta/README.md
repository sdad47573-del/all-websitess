# Floristería Flor i Planta (Flor y Planta) · Travessera de Gràcia · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Flor i Planta (Flor y Planta)** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería Flor i Planta (Flor y Planta) · **Categoría:** Floristería
- **Dirección:** Travessera de Gràcia, 189, Gràcia, 08012 Barcelona
- **Plus code:** C525+XQ Barcelona · **Coords:** 41.4024391, 2.1593793
- **Ficha:** `ChIJr2w7cwCjpBIRtQKiljCGjeo` · `/g/11wmv8nmj5`
- **Teléfono:** 676 15 39 00 (`tel:+34676153900`) · **Sin web propia**
- **Valoración:** 4,8/5 con 26 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** 10:00–21:00 de lunes a sábado salvo el martes, y domingo; mar cerrado
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción del titular:** «Nuestra floristería es una floristería asequible. No solo hay una variedad de flores, sino también una variedad de plantas verdes a la venta y se brindan servicios de entrega puerta a puerta.»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-flor-i-planta
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
