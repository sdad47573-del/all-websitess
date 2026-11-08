# Floret Flowers · Muntaner · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floret Flowers** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floret Flowers · **Categoría:** Floristería
- **Dirección:** Carrer de Muntaner, 94, Eixample, 08036 Barcelona
- **Plus code:** 95Q4+CV Barcelona · **Coords:** 41.3885375, 2.1571659
- **Ficha:** `ChIJpRl0a72jpBIRi4y5E-ywHlg` · `/g/11x2gv2kg6`
- **Teléfono:** 930 06 88 52 (`tel:+34930068852`) · **Sin web propia**
- **Valoración:** 4,8/5 con 44 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos todos los días salvo el martes (mañana hasta las 15:00,
  tarde de 16:00 a 20:00); martes cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción del titular:** arreglos elegantes y personalizables, calidad-precio y plantas verdes (literal en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floret-flowers
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
