# Floristeria Myriam · Calle Magistrado Salvador Barbera · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristeria Myriam** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristeria Myriam (así, sin tilde, como lo publica la ficha) ·
  **Categoría:** Floristería
- **Dirección:** Calle Magistrado Salvador Barbera (sin número de portal),
  Bailén-Miraflores, 29010 Málaga
- **Plus code:** PHF4+PG Málaga · **Coords:** 36.7243477, -4.443716
- **Ficha:** `ChIJszwIigv3cg0RCap_vJo90ug` · `/g/11bxddrl75`
- **Teléfono:** 659 87 91 02 (`tel:+34659879102`) · **Sin web propia**
- **Valoración:** 4,5/5 con 47 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos mar–vie (10:00–14:00 y 17:30–20:00); sáb 10:00–14:00;
  dom y lun cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible
- **Descripción literal:** aviso de apertura por el Día de la Madre con encargos al
  659879102
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), todas
  verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-myriam
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs floristeria-myriam
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/floristeria-myriam`).
