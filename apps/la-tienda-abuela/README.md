# La Tienda de la Abuela

Web Astro para **La Tienda de la Abuela**, comercio de alimentación en Avenida Pepita Durán 17, Puerto de la Torre, Málaga.

- Astro 5 + Tailwind CSS 4 + daisyUI; configuración compartida del monorepo.
- Datos, contenidos y metadatos locales centralizados en `src/data/site.ts`.
- La fotografía usada procede de la ficha pública de Google Maps y está en `src/assets/fotos/`.
- SEO local: canonical, Open Graph, metadatos de geolocalización, sitemap, `GroceryStore`, `ContactPage`, `BreadcrumbList` y FAQ estructurada que coincide con el texto visible.

## Páginas

- `/`: portada con presentación, productos y servicios, temas mencionados en opiniones públicas, mapa y FAQ.
- `/contacto`: dirección, teléfono, mapa y horario consultado.
- `/aviso-legal`: aviso y privacidad, con recordatorio visible para completar los datos legales del titular.

## Antes de publicar

1. Confirma el dominio provisional `https://la-tienda-de-la-abuela.vercel.app` en `src/data/site.ts`, `astro.config.mjs` y `public/robots.txt`.
2. Los directorios consultados no coinciden en el horario. Se muestra como referencia el horario de Cylex/EncuentreAbierto (L–V 06:30–21:00; sáb–dom 09:00–14:00), con aviso para llamar y confirmar. Se omite `openingHoursSpecification` del JSON-LD para no publicar un horario incierto.
3. No se incluye puntuación ni `aggregateRating`: las valoraciones públicas encontradas no coinciden entre fuentes. La sección de opiniones resume temas de EsOpiniones y enlaza la fuente; no atribuye esos comentarios a Google.
4. Completa razón social, NIF/CIF y correo en `LEGAL` dentro de `src/data/site.ts`. Permanecen como pendientes porque no se encontraron datos verificables.
5. Solo se encontró una imagen real utilizable, de la ficha pública de Google Maps (540 × 960). Confirma visualmente que corresponde al local y que se cuenta con autorización de uso antes de publicar; no se han empleado fotos de otros negocios del monorepo.
6. Confirma la disponibilidad actual de productos y servicios (fruta, charcutería, bocadillos, café para llevar, tablas y lotes) con el establecimiento.

## Comandos

Desde la raíz del monorepo o desde esta carpeta:

```bash
bun run check
bun run typecheck
bun run build
```
