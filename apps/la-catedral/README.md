# La Catedral (Granja Diva) · Astro

Sitio informativo para el bar-cafetería La Catedral (Granja Diva) de la Av. Dr. Mitjavila 20, local 2, en Andorra la Vella.

## Desarrollo

```bash
bun run --filter la-catedral dev
bun run --filter la-catedral typecheck
bun run --filter la-catedral build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant` con `Menu` + `FAQPage`.
- Dirección: Av. Dr. Mitjavila, 20, local 2, AD500 Andorra la Vella. Teléfono: +376 866 070. Coordenadas y ficha del Google Maps proporcionado. Web oficial: https://sites.google.com/view/la-catedral-andorra/inici.
- Nota de Google: 4,5 sobre 5 con 101 reseñas. Horario: de lunes a sábado de 7:00 a 23:00; domingo cerrado. Se admiten perros. Acceso y asientos adaptados, sin aparcamiento adaptado.
- La carta se transcribe de la fotografía de la carta expuesta en la entrada: tapas, torrades, entrepans freds i calents, pizzes, hamburgueses, plats combinats, amanides y espàrrecs, con precios.
- Dominio provisional: `https://la-catedral.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs la-catedral`, en `src/assets/fotos/` con su `.maps-manifest.json`. Son diez fotos: terraza con montañas, carta, pizza, hamburguesa, bravas, bocadillos, carne, cervezas y desayuno. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
