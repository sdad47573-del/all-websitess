# Mimosa Blossom Floristería · Calle Huéscar, 14 · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Mimosa Blossom Floristería** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Mimosa Blossom Floristería · **Categoría:** Floristería
- **Dirección:** Calle Huéscar, 14, Distrito Centro, 29007 Málaga
- **Plus code:** PH98+CQ Málaga · **Coords:** 36.718552, -4.4331227
- **Ficha:** `ChIJzT2khtH3cg0R3AEI0m-_HyQ` · `/g/11y3_f68rx`
- **Teléfono:** 640 05 44 89 (`tel:+34640054489`) · **Sin web propia**
- **Valoración:** 4,9/5 con 32 reseñas (sin extractos literales en el endpoint)
- **Horario:** lun–vie 10:00–18:00, sáb y dom cerrado (confirmar por teléfono)
- **Accesibilidad:** acceso para sillas de ruedas disponible; aseo y asientos
  adaptados no disponibles
- **Descripción literal:** «Producción floral para eventos. Servicio personalizado
  para bodas. Decoración floral para hoteles y empresas.»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin
  autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/mimosa-blossom-floristeria
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs mimosa-blossom-floristeria
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/mimosa-blossom-floristeria`).
