# La Antigua Maestranza

Landing page estática en Astro para La Antigua Maestranza, restaurante mediterráneo y de cocina
española de Cartagena (Murcia), en la calle Real, 50 (30201).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
bun run --filter la-antigua-maestranza dev
bun run --filter la-antigua-maestranza check
bun run --filter la-antigua-maestranza typecheck
bun run --filter la-antigua-maestranza build
bun run --filter la-antigua-maestranza preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://la-antigua-maestranza.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en
`site.siteUrl` de `src/data/site.ts` y en el canonical de `src/pages/aviso-legal.astro` cuando haya
dominio definitivo.**

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, cocinas, horario, servicios de
  accesibilidad y valoración) y `FAQPage`.
- Datos de `src/data/site.ts`, contrastados con la ficha pública de Google Maps del restaurante,
  consultada el 9 de octubre de 2026: 968 50 02 35, C. Real, 50 (30201 Cartagena), 4,4 sobre 5 con
  1.055 reseñas, plus code J235+8X Cartagena y coordenadas 37.6032548, -0.9900209.
- Categorías de la ficha: restaurante, cafetería, restaurante mediterráneo y restaurante de cocina
  española. Distintivo: brunch.
- Horario publicado: cerrado los lunes; de martes a jueves de 8:30 a 16:00, viernes de 8:30 a 16:00
  y de 20:00 a 23:00, sábados de 9:00 a 16:00 y de 20:00 a 23:00, y domingos de 9:30 a 16:00.
- La descripción de la sección «La casa» es la que publica el titular en la ficha, citada literal.
- No se publican precios ni carta: la ficha no los trae, así que no se inventan.

## Fotografías

Las imágenes de `src/assets/fotos/` se descargaron del perfil de Google Maps del propio restaurante
con `node scripts/fetch-maps-photos.mjs la-antigua-maestranza`. Son las diez que devuelve la portada
de la galería de la ficha (cinco apaisadas y cinco verticales) y el manifiesto de la descarga
(`.maps-manifest.json`) quedó sin autor, así que se publican sin pie y sin atribución.

Antes de publicar conviene:

1. Revisar que cada foto corresponde al local y ajustar los textos `alt` según lo que se vea en
   cada imagen (ahora son genéricos).
2. Confirmar que el titular autoriza el uso de esas fotografías en la web.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional en `astro.config.mjs`, `public/robots.txt`, `site.siteUrl`
      de `src/data/site.ts` y el canonical de `aviso-legal.astro`.
- [ ] Completar los datos legales en `LEGAL` (`src/data/site.ts`): razón social, NIF/CIF y correo
      de contacto. El teléfono y el domicilio ya están puestos.
- [ ] Confirmar con el restaurante el horario vigente, en especial el de los festivos.
