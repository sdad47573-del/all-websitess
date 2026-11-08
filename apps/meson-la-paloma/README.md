# Mesón La Paloma

Landing page estática en Astro para el Mesón La Paloma, restaurante de barrio de Cartagena (Murcia)
en la calle Postigos, 58 (30300).

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
bun run --filter meson-la-paloma dev
bun run --filter meson-la-paloma check
bun run --filter meson-la-paloma typecheck
bun run --filter meson-la-paloma build
bun run --filter meson-la-paloma preview
```

`astro.config.mjs` usa `createAstroConfig` del paquete `@astro-config`, que añade el sitemap y el
plugin de Tailwind para Vite. El dominio provisional del `site` es
`https://meson-la-paloma.vercel.app`: **cámbialo aquí, en `public/robots.txt`, en `site.siteUrl` de
`src/data/site.ts` y en el canonical de `src/pages/aviso-legal.astro` cuando haya dominio
definitivo.**

## SEO y contenido

- Metadatos locales, canonical provisional, Open Graph/Twitter con foto real, sitemap y `robots.txt`.
- JSON-LD `Restaurant` (dirección, teléfono, coordenadas, horario, servicio de accesibilidad y
  valoración) y `FAQPage`.
- Datos de `src/data/site.ts`, contrastados con la ficha pública de Google Maps del restaurante,
  consultada el 9 de octubre de 2026: 968 08 72 48, C. Postigos, 58 (30300 Cartagena), 4,6 sobre 5
  con 108 reseñas, plus code J2F7+5Q Cartagena y coordenadas 37.6228797, -0.9856045.
- Horario publicado: todos los días, sin día de cierre, de 6:00 a 22:00 de lunes a sábado y de
  6:00 a 14:00 los domingos.
- No se publican precios ni carta: la ficha no los trae, así que no se inventan.

## Fotografías

Las imágenes de `src/assets/fotos/` se descargaron del perfil de Google Maps del propio restaurante
con `node scripts/fetch-maps-photos.mjs meson-la-paloma`. Son las cuatro que devuelve la portada de
la galería de la ficha y todas son verticales; el manifiesto de la descarga (`.maps-manifest.json`)
quedó sin autor, así que se publican sin pie y sin atribución.

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
