# Mesón de Pepe

Web de una página para **Mesón de Pepe** (C. las Norias, 14 · 30009 Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (C. las Norias, 14, 30009 Murcia, barrio de San Antón; teléfono 968 51 58 53; bar restaurante; de lunes a viernes de 7:00 a 23:30, sábado de 8:00 a 17:00 y domingo cerrado; 4,6★ con 1.356 reseñas; acceso, aseo y asientos adaptados) vienen de la ficha pública de Google Maps, incluida la descripción del propio establecimiento (negocio familiar desde los años 80, guisos murcianos y bocadillo de la casa con jamón, tocino ibérico, tomate y aceite virgen extra en pan de leña). La carta y los precios no están publicados, así que no se inventan importes; las reseñas sí se citan. Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`; se descartó la que mostraba clientes identificables.

## Comandos

```bash
bun install
bunx turbo run build --filter=meson-de-pepe
cd apps/meson-de-pepe && bunx astro preview --port 4360
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://meson-de-pepe.vercel.app` si se publica en otro.
