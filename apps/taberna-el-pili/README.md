# Taberna El Pili

Web informativa de Taberna El Pili, en el Callejón de Guía, 16 (11540 Sanlúcar de Barrameda,
Cádiz). Construida con Astro y compilada como sitio estático (dos rutas: `/` y `/aviso-legal`).

## De dónde salen los datos

Todo el contenido del negocio viene de su ficha pública de Google Maps, consultada el 20 de octubre
de 2026:

- Nombre, categoría (restaurante), dirección, teléfono, coordenadas y plus code.
- Valoración (4,2 sobre 5) con el número de reseñas (57) de ese día.
- Horario: «Abierto 24 horas» los siete días de la semana.
- Las dos entradas de accesibilidad que publica la ficha: acceso adaptado disponible y
  aparcamiento adaptado no disponible.
- Las tres reseñas destacadas, copiadas tal cual.

La ficha **no** publica descripción del titular, carta, precios, horario de cocina, reservas, web
propia ni nada sobre perros. La web lo dice así y no rellena esos huecos.

## Fotos

Las diez imágenes de `src/assets/fotos` se descargaron de la galería de la ficha con:

```sh
node scripts/fetch-maps-photos.mjs taberna-el-pili
```

El manifiesto `.maps-manifest.json` guarda el id de cada foto para no volver a bajarla. `og.jpg`
(1200×630) se recorta de una de ellas.

## Crédito

El pie incluye el crédito del estudio, tal como se hace en el resto de webs del repositorio:

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
node scripts/check-site-content.mjs taberna-el-pili
```

## Pendiente antes de publicar

- `src/data/site.ts` → `LEGAL`: razón social, NIF y correo del titular. Mientras falten, el aviso
  de `/aviso-legal` seguirá visible.
- El dominio `taberna-el-pili.vercel.app` es provisional: si se publica en otro, hay que cambiarlo
  en `site.ts`, `astro.config.mjs` y `public/robots.txt` (o definir `SITE_URL`).
- Las fotos son de Google Maps: si el titular pide retirarlas, se sustituyen por otras propias.
