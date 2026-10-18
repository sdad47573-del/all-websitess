# FLORISTERIA THE LOTUS FLOWER · Indústria · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**FLORISTERIA THE LOTUS FLOWER** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** FLORISTERIA THE LOTUS FLOWER · **Categoría:** Floristería
- **Dirección:** Carrer de la Indústria, 171, Eixample, 08025 Barcelona
- **Plus code:** C56G+65 Barcelona · **Coords:** 41.4105704, 2.1754399
- **Ficha:** `ChIJ2bRNodqipBIRwUFIvm4jCIQ` · `/g/1s049wphc`
- **Teléfono:** 644 81 64 49 (`tel:+34644816449`) · **Sin web propia**
- **Valoración:** 4,6/5 con 47 reseñas; destaca 3 extractos literales (5, 5 y 3/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (10:00–14:00 y 17:00–20:00); sáb de 10:00 a 14:00;
  dom cerrado
- **Accesibilidad:** sin aparcamiento adaptado (única entrada que publica la ficha)
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-the-lotus-flower
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
