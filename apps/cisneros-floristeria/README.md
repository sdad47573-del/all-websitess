# Cisneros Floristería · Calle Charles Dickens, 16 · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Cisneros Floristería** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Cisneros Floristería · **Categorías:** Floristería, Tienda de flores secas,
  Servicio de plantas para interior
- **Dirección:** Calle Charles Dickens, 16, Teatinos-Universidad, 29010 Málaga
- **Plus code:** PGFM+9W Málaga · **Coords:** 36.7234891, -4.4652276
- **Ficha:** `ChIJqx-7jQX3cg0RBMaCm_SVKVY` · `/g/11n86cqxqs`
- **Teléfono:** 638 43 71 91 (`tel:+34638437191`)
- **Web propia:** https://cisnerosfloresyeventos.wordpress.com/ (con `sameAs` y enlaces)
- **Valoración:** 4,9/5 con 127 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos mar–vie (9:30–13:00 y 17:00–20:00); lun, sáb y dom cerrado
- **Accesibilidad:** acceso para sillas de ruedas disponible
- **Descripción literal:** «¡Hemos venido a ponerle color a tu día a día! Flores frescas y
  preservadas… Hacemos entregas a domicilio en Málaga provincia.»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor →
  sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/cisneros-floristeria
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs cisneros-floristeria
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/cisneros-floristeria`).
