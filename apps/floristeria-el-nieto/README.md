# Floristería el nieto · Camino de San Rafael, 2 · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería el nieto** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería el nieto · **Categoría:** Floristería
- **Dirección:** Camino de San Rafael, 2, Carretera de Cádiz, 29006 Málaga
- **Plus code:** PH65+PC Málaga · **Coords:** 36.7118649, -4.4414763
- **Ficha:** `ChIJB8vl5aX3cg0Ro6Lz8RwS_bM` · `/g/11rfbn8xzp`
- **Teléfono:** 744 60 27 04 (`tel:+34744602704`) · **Sin web propia**
- **Valoración:** 4,2/5 con 20 reseñas (sin extractos literales en el endpoint)
- **Horario:** mar–vie 8:30–20:00; sáb, dom y lun 8:30–14:00 (confirmar por teléfono:
  el titular avisa de imprevistos ocasionales)
- **Accesibilidad:** acceso para sillas de ruedas disponible; aseo y asientos
  adaptados no disponibles
- **Descripción literal:** arte floral, centros, ramos, coronas, ramos de novia, adornos
  para eventos e iglesias, plantas de interior y exterior, envío a domicilio
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor →
  sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-el-nieto
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs floristeria-el-nieto
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/floristeria-el-nieto`).
