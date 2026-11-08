# Restaurante Casa Laura

Web de una página para **Restaurante Casa Laura** (Av. de San Javier, 22A · 30570 Murcia), construida con Astro, Tailwind CSS y DaisyUI.

## Contenido

- Portada con hero, datos prácticos, la casa, la mesa, galería, opiniones, ubicación con mapa y FAQ.
- `/aviso-legal` con aviso legal y política de privacidad.
- SEO: metadatos, Open Graph, canonical, `sitemap-index.xml`, `robots.txt` y JSON-LD (`Restaurant`, `WebPage`, `BreadcrumbList`, `FAQPage`).
- Crédito en el footer: «Creado por Sur Digital · sur-digital.vercel.app» enlazado a <https://sur-digital.vercel.app/>.

## Datos

Todo el contenido editable vive en `src/data/site.ts`: nombre, dirección, teléfono, horario, valoración, textos, galería y FAQ. `src/data/schema.ts` genera migas de pan y el FAQ del JSON-LD.

Los datos de negocio vienen de la ficha pública de Google Maps (octubre de 2026): Restaurante Casa Laura, Av. de San Javier, 22A, 30570 Murcia; teléfono 868 08 26 55; restaurante de cocina española; de lunes y domingos de 8:00 a 17:00, de martes a viernes de 8:00 a 23:00 y sábados de 8:30 a 23:00; 4,5★ con 560 reseñas; acceso, aseo y asientos adaptados, sin aparcamiento adaptado.

Las especialidades (pulpo roquero, carne a la brasa, arroz con conejo y caracoles, menú del día, tapas y postres caseros) proceden del resumen público de las reseñas del restaurante. No hay carta publicada: no se inventan platos ni importes. Las 10 fotos se descargaron de la ficha de Google con `scripts/fetch-maps-photos.mjs` y se usan en hero, casa, mesa y galería.

## Comandos

```bash
bun install
bunx turbo run build --filter=casa-laura
cd apps/casa-laura && bunx astro preview --port 4420
```

## Pendiente antes de publicar

- Completar razón social, NIF/CIF y correo del titular en `LEGAL` (`src/data/site.ts`).
- Confirmar la carta, el menú del día y los precios con el restaurante.
- Confirmar la dirección: Google lista Av. de San Javier, 22A, 30570 Murcia; algunas guías citan el número 120 y el código 30579 (Torreagüera).
- Sustituir el dominio provisional `https://casa-laura.vercel.app` si se publica en otro.
