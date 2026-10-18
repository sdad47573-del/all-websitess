# Floristeria Mari Carmen. Flors i Plantes · Consell de Cent · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Mari Carmen. Flors i Plantes** publica en su ficha de Google Maps (consultada el 18 de
octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Mari Carmen. Flors i Plantes · **Categoría:** Floristería
- **Dirección:** Carrer del Consell de Cent, 468, Eixample, 08013 Barcelona
- **Plus code:** 95XG+MP Barcelona · **Coords:** 41.3992465, 2.1768537
- **Ficha:** `ChIJWTDqoOeipBIRR4xqZ3okZCE` · `/g/1tdkzqd3`
- **Teléfono:** 932 65 59 25 (`tel:+34932655925`) · **Sin web propia**
- **Valoración:** 4,8/5 con 112 reseñas; esta ficha solo destaca 2 extractos literales (5 y 4/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:30–14:00 y 16:00–20:00); sáb de 10:30 a 14:00;
  dom cerrado
- **Accesibilidad:** sin aparcamiento adaptado (única entrada que publica la ficha)
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-mari-carmen
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
