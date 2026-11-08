# A-Gusto El Macizo

Web de una página para **Restaurante A-Gusto El Macizo** (Playa Cruz del Mar · 11550 Chipiona, Cádiz), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la cocina, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio (Playa Cruz del Mar, 11550 Chipiona; teléfono 698 90 16 05; restaurante; horario de 9:00 a 1:00 todos los días; 3,8★ con 292 reseñas; acceso y asientos adaptados) vienen de la ficha pública de Google Maps. La ficha no publica descripción ni carta, así que no se inventan platos ni precios; las reseñas sí se citan (mariscos, cócteles y trato). Las 10 fotos se descargaron de esa misma ficha con `scripts/fetch-maps-photos.mjs`.

## Comandos

```bash
bun install
bunx turbo run build --filter=a-gusto-el-macizo
cd apps/a-gusto-el-macizo && bunx astro preview --port 4340
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Sustituir el dominio provisional `https://a-gusto-el-macizo.vercel.app` si se publica en otro.
