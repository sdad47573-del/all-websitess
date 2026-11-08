# Alsara express Los Tilos

Web informativa de **Alsara express Los Tilos**, tienda de alimentación en el **Paseo de los Tilos, 22 · 29006 Málaga** (Distrito Centro).

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                          |
| ----------------------- | ---------------------------------------- |
| Nombre                  | Alsara express Los Tilos                 |
| Dirección               | P.º de los Tilos, 22 · 29006 Málaga      |
| Distrito                | Distrito Centro                          |
| Teléfono                | No publica ninguno («Añadir teléfono»)   |
| Categorías de Google    | Tienda de alimentación (única)           |
| Valoración              | 3,7 sobre 5 con 3 reseñas                |
| Horario                 | Todos los días 9:30 – 24:00              |
| Coordenadas             | 36.7136423, -4.4336503                   |
| Plus code               | PH78+FG Málaga (completo 8C8QPH78+FG)    |
| Identificador del lugar | `ChIJvSObUAD3cg0RQcu6WmBhJqg`            |
| Identificador de canal  | `/g/11ytp83fz_`                          |
| Feature id              | `0xd72f700509b23bd:0xa82661605abacb41`   |

**Dirección desarrollada.** Google publica la dirección abreviada («P.º de los Tilos, 22»). En la web se desarrolla a **Paseo de los Tilos, 22**, como en el resto del repositorio.

**Sin teléfono.** La ficha no publica ningún número (muestra «Añadir teléfono»), así que `src/data/site.ts` no tiene `phone` ni `phoneHref`, el JSON-LD no declara `telephone`, el Open Graph no lleva `og:phone_number` y **la web no tiene ningún botón de llamada**: la llamada a la acción es «Cómo llegar» (indicaciones) y «Ver la ficha en Maps». La barra fija de móvil abre las indicaciones en vez de llamar.

**Categoría y `@type`.** La ficha publica **una única categoría**: «Tienda de alimentación». El `@type` de los datos estructurados es `ConvenienceStore`. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin descripción del titular.** La ficha **no publica descripción**, así que la web no inventa ninguna.

### El horario

Todos los días de **9:30 a 24:00**, según la semana del 17 al 23 de octubre de 2026 publicada por la ficha. `openingHoursSpecification` tiene 7 especificaciones (una por día).

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **una única entrada**, disponible: el **acceso para sillas de ruedas**. No publica ninguna otra.

### Las reseñas

La ficha tiene **3 reseñas** (3,7 sobre 5), pero **Google no cita ningún extracto** en la portada, así que `reviews` queda **vacío** y la web **no reproduce ningún texto de reseñas**. La tarjeta de valoración enlaza al listado público.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs alsara-express-los-tilos   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La ficha publica **una única fotografía**: `alsara-express-los-tilos-vertical-01.jpg` (1440 × 1920, vertical).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publica **sin pie y sin atribución**: no hay nada que citar.
- `public/og.jpg` (1200 × 630) es un recorte centrado de esa misma fotografía.

## Comprobaciones

```bash
bunx turbo run build --filter=alsara-express-los-tilos
node scripts/check-site-content.mjs alsara-express-los-tilos
./node_modules/.bin/tsc -p apps/alsara-express-los-tilos/tsconfig.json --noEmit
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (9:30–24:00 todos los días) y los datos de la ficha antes de publicar. La ficha no publica teléfono, así que el contacto es presencial o vía Maps.
3. Revisar la foto publicada (contenido y si sale alguna persona identificable).
4. Si el dominio final no es `alsara-express-los-tilos.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
