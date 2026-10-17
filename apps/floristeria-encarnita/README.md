# Floristería Encarnita · Avenida de Libia · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Encarnita** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería Encarnita · **Categoría:** Floristería
- **Dirección:** Avenida de Libia (sin número de portal), Levante, 14010 Córdoba
- **Plus code:** V6PP+XM Córdoba · **Coords:** 37.8874207, -4.7632866
- **Ficha:** `ChIJD5tIHYTfbA0RYUX8Te5vTRI` · `/g/1wf2367m`
- **Teléfono:** 957 25 22 52 (`tel:+34957252252`) · **Sin web propia**
- **Valoración:** 4,4/5 con 47 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos lun–vie (9:00–13:30 y 16:30–20:00); sáb 9:00–13:30;
  dom 9:00–13:00
- **Accesibilidad:** acceso para sillas de ruedas disponible
- **Descripción literal:** «Situada frente a Cementerio San Rafael»
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 9 verticales
  y 1 vista, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-encarnita
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs floristeria-encarnita
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/floristeria-encarnita`).
