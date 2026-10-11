# Restaurante Zerurena

Web informativa de **Restaurante Zerurena**, restaurante en **Errementeri, 22 · 48150 Sondika (Bizkaia)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, accesibilidad, descripción del titular, reseñas destacadas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Restaurante Zerurena                                 |
| Dirección               | Errementeri, 22 · 48150 Basozabal, Biscay            |
| Categoría de Google     | Restaurante (una sola)                               |
| Valoración              | 4,8 sobre 5 con 276 reseñas                          |
| Teléfono                | +34 685 73 73 64 (móvil)                             |
| Horario                 | No publica ninguno (abre por reserva, ver abajo)     |
| Plus code               | `8CMV73XH+M3` (`73XH+M3 Basozabal` en corto)         |
| Coordenadas             | 43.2991615, -2.9222949                               |
| Identificador del lugar | `ChIJwerre1xFTg0Rtlx3WSr0Wbo`                        |
| Identificador de canal  | `/g/11b75j19gh`                                      |
| Feature id              | `0xd4e455c7bebeac1:0xba59f42a59775cb6`               |
| Zona horaria            | Europe/Madrid                                        |

**Dirección con barrio.** Google publica «Errementeri, 22, 48150 Basozabal»: Basozabal es el barrio y el código postal 48150 corresponde a **Sondika**, así que la localidad es Sondika y `src/data/site.ts` guarda el barrio en `neighborhood: 'Basozabal'`. La provincia se publica como «Biscay»/«Bizkaia»: aquí se escribe **Bizkaia**.

**Teléfono.** La ficha publica un solo número, **685 73 73 64**, y por su prefijo es un **móvil**: se publica como **+34 685 73 73 64** y el enlace de llamada es `tel:+34685737364`. Es imprescindible: el local abre por reserva.

**Sin horario.** La respuesta de la ficha no trae ningún día de la semana, así que `src/data/site.ts` **no tiene `hours`** y la web **no muestra tabla de horario ni `openingHoursSpecification`**: lo dice abiertamente y remite al teléfono, porque la propia descripción del titular avisa de que abren por reserva.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, el genérico «Restaurante», que no es una cocina: por eso el JSON-LD **no declara `servesCuisine`** (con un comentario que lo explica) en vez de inventar una. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual (aquí con más motivo: el local abre por reserva), y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### La descripción del titular

La ficha **sí publica descripción del titular**, en euskera y en español, y se reproduce **tal cual** en la sección «La casa», como cita con su atribución: es la voz del local, no de esta web. Es además la única pista de horario que da la ficha: «¡¡Recordad que abrimos por reserva!!».

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y las dos figuran como disponibles: el **acceso** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### Las reseñas

La respuesta de la ficha **destaca dos reseñas con texto**, las dos de 5 sobre 5, y las dos se citan en la sección «La casa»:

1. «Plato estrella: la ensaladilla, los platos de cuchara y los postres caseros» (5/5)
2. «Un pescado buenísimo, todo para repetir.» (5/5)

La respuesta no trae los nombres de quienes las firman (solo sus avatares), así que se citan **sin autor**, con su puntuación y el enlace al listado completo.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-zerurena   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** (las únicas que devuelve la portada de la ficha): cinco apaisadas (03, 04, 06, 09, 10), cuatro verticales (02, 05, 07, 08) y una cuadrada (01).
- El manifiesto de la descarga **no atribuye autor** a ninguna, así que **ninguna foto lleva pie**.
- El collage de portada usa la apaisada **03** arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **03** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-zerurena
```

`astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Pedir al titular un horario orientativo** para completar la web: la ficha no publica ninguno y solo dice que abren por reserva.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-zerurena.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
