# Floristería · Norte-Sierra · Córdoba

Web informativa de una sola página (Astro, estática) con los datos que **Floristería**
publica en su ficha de Google Maps (consultada el 17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería (genérico, es lo único que publica) · **Categoría:** Floristería
- **Dirección:** distrito Norte-Sierra (sin calle publicada), 14006 Córdoba
- **Plus code:** V6XC+43 Córdoba · **Coords:** 37.8977607, -4.779845
- **Ficha:** `ChIJQ23fTwDfbA0RTX9bM7bs4Ks` · `/g/11vs3c95yw`
- **Teléfono:** sin publicar · **Horario:** sin publicar · **Sin web propia**
- **Valoración:** 5/5 con 1 reseña (sin extractos literales en el endpoint)
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** la ficha no publica ninguna (30 peticiones al endpoint de la galería sin
  bloque de fotos; la ficha en vivo solo enseña Street View). La web no tiene galería
  y lo declara en la sección de fotos. La imagen de compartir (`public/og.png`,
  generada desde `public/og.svg`) es una ilustración vectorial propia, no una foto.

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-norte-sierra
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
