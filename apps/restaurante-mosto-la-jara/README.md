# Restaurante Mosto La Jara

Web informativa de Restaurante Mosto La Jara, en el Camino de La Victoria, 46 (11540 Sanlúcar de
Barrameda, Cádiz). Está construida con Astro y se compila como sitio estático (dos rutas: `/` y
`/aviso-legal`).

## De dónde salen los datos

Todo el contenido del negocio viene de su ficha pública de Google Maps, consultada el 20 de octubre
de 2026:

- Nombre, categorías, dirección, teléfono, coordenadas y plus code.
- Descripción del titular, citada literalmente en la portada.
- Valoración (4,1 sobre 5) con el número de reseñas (650) de ese día.
- Horario: viernes, sábado y domingo de 13:00 a 23:30; de lunes a jueves, cerrado.
- Las cuatro entradas de accesibilidad que publica la ficha, todas disponibles.
- Las tres reseñas destacadas, copiadas tal cual.

La ficha **no** publica carta, precios, reservas, web propia ni nada sobre perros: la web lo dice
así en las preguntas frecuentes y no rellena esos huecos.

## Fotos

Las diez imágenes de `src/assets/fotos` se descargaron de la galería de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs restaurante-mosto-la-jara
```

El manifiesto `.maps-manifest.json` guarda el id de cada foto para no volver a bajarla. `og.jpg`
(1200×630) se recorta de una de ellas.

## Comandos

```sh
bun install
bun run dev        # servidor local
bun run build      # compila a dist/
bun run typecheck  # tsc --noEmit
```

Desde la raíz del monorepo también se puede comprobar el contenido de la web:

```sh
node scripts/check-site-content.mjs restaurante-mosto-la-jara
```

## Pendiente antes de publicar

- `src/data/site.ts` → `LEGAL`: razón social, NIF y correo del titular. Mientras falten, el aviso
  de `/aviso-legal` seguirá visible.
- El dominio `restaurante-mosto-la-jara.vercel.app` es provisional: si se publica en otro, hay que
  cambiarlo en `site.ts`, `astro.config.mjs` y `public/robots.txt` (o definir `SITE_URL`).
- Las fotos son de Google Maps: si el titular pide retirarlas, se sustituyen por otras propias.
