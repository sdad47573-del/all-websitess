# Bar Koke La Niña del Koke

Web informativa de Bar Koke La Niña del Koke, en la calle Mar, 17 (11540 Sanlúcar de Barrameda,
Cádiz). Construida con Astro y compilada como sitio estático (dos rutas: `/` y `/aviso-legal`).

## De dónde salen los datos

Todo el contenido del negocio viene de su ficha pública de Google Maps, consultada el 20 de octubre
de 2026:

- Nombre, categorías (bar restaurante y bar de tapas), dirección, teléfono, coordenadas y plus code.
- Descripción del titular, transcrita literalmente en la portada.
- Valoración (4,2 sobre 5) con el número de reseñas (998) de ese día.
- Horario: de lunes a sábado de 9:00 a 24:00 y el domingo de 11:00 a 24:00.
- Las cuatro entradas de accesibilidad que publica la ficha (tres disponibles y el aparcamiento
  adaptado no).
- Las tres reseñas destacadas, copiadas tal cual.

La ficha **no** publica carta, precios, reservas, web propia ni nada sobre perros. La web lo dice
así y no rellena esos huecos.

## Fotos

Las diez imágenes de `src/assets/fotos` se descargaron de la galería de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs bar-koke-la-nina-del-koke
```

El manifiesto `.maps-manifest.json` guarda el id de cada foto para no volver a bajarla. `og.jpg`
(1200×630) se recorta de una de ellas.

## Crédito

El pie incluye el crédito del estudio, igual que el resto de webs del repositorio:

```html
Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a>
```

## Comandos

```sh
bun install
bun run dev        # servidor local
bun run build      # compila a dist/
bun run typecheck  # tsc --noEmit
```

Desde la raíz del monorepo también se puede comprobar el contenido de la web:

```sh
node scripts/check-site-content.mjs bar-koke-la-nina-del-koke
```

## Pendiente antes de publicar

- `src/data/site.ts` → `LEGAL`: razón social, NIF y correo del titular. Mientras falten, el aviso
  de `/aviso-legal` seguirá visible.
- El dominio `bar-koke-la-nina-del-koke.vercel.app` es provisional: si se publica en otro, hay que
  cambiarlo en `site.ts`, `astro.config.mjs` y `public/robots.txt` (o definir `SITE_URL`).
- Las fotos son de Google Maps: si el titular pide retirarlas, se sustituyen por otras propias.
