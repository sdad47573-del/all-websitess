# Namaste Ibiza Restaurante · web (Astro)

Web de una sola página para **Namaste Ibiza Restaurante**, restaurante indio y nepalí en Passatge de
Castaví, 1, en el centro de Eivissa.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante indio Ibiza», «comer curry en Eivissa»,
«restaurante nepalí Ibiza centro» o «Namaste Ibiza», y galería con las fotografías de la ficha de
Google Maps.

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter namaste-ibiza-restaurante dev      # http://localhost:4321
bun run --filter namaste-ibiza-restaurante typecheck
bun run --filter namaste-ibiza-restaurante build
bun run --filter namaste-ibiza-restaurante preview
```

El dominio provisional del `site` es `https://namaste-ibiza-restaurante.vercel.app`: **cámbialo
aquí, en `public/robots.txt`, en `BUSINESS.siteUrl` de `src/data/site.ts` y en el `canonical` de
`src/pages/aviso-legal.astro` cuando haya dominio definitivo.**

## Estructura

- `src/data/site.ts`: datos del negocio (dirección, teléfono, horario), enlaces de Google Maps,
  carta resumida y preguntas frecuentes.
- `src/pages/index.astro`: composición con los componentes compartidos de `@astro-components`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies (faltan NIF/CIF, razón social y
  correo del titular).
- `src/assets/fotos/`: fotos del perfil de Google Maps, con su manifiesto en `.maps-manifest.json`.
- `public/og.jpg`: imagen para las vistas previas al compartir el enlace, recortada del surtido de
  entrantes y tandoor.

## Datos de partida

Ficha de Google Maps: `Namaste Ibiza Restaurante`, 38.9098759,1.4285094, feature
`0x1299472704073dfd:0x52bbd63f0eb927c8`. De ahí salen la dirección, el teléfono (871 51 85 02), la
nota (4,9 con 666 reseñas), las categorías (restaurante indio y restaurante nepalí), el horario
(comidas 13:00–15:45 y cenas 19:00–23:00, de domingo a martes y de jueves a sábado; miércoles
cerrado), las reseñas, la accesibilidad y la descripción del propio negocio.

Esa descripción es la fuente de la propuesta: cocina casera nepalí/hindi, «la más sana, natural y
auténtica», con platos de la fusión con la gastronomía de Tíbet, India, Tailandia y China.

**La ficha no publica carta ni precios**: la sección «La carta» resume lo que se ve en las fotos del
perfil (samosas, bolitas con yogur y tamarindo, poppadoms, pollo tandoori, chicken tikka, curries de
pollo, carne y verduras, raita, arroz basmati con azafrán y naan) y lo que citan las reseñas.

## Fotos

```bash
node scripts/fetch-maps-photos.mjs namaste-ibiza-restaurante   # desde la raíz del monorepo
```

El script lee el feature id del propio código, descarga la galería del perfil y no vuelve a bajar
las fotos que ya están en el manifiesto. Se usan las diez fotos del perfil en la galería.
