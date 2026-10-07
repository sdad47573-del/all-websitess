# Restaurante Yuma's

Web informativa del **Restaurante Yuma's**, restaurante y cocina mediterránea en la **Av. de Andalucía, 74 · 23006 Jaén**, con teléfono 953 22 82 73.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Restaurante Yuma's                         |
| Dirección               | Av. de Andalucía, 74 · 23006 Jaén          |
| Teléfono                | +34 953 22 82 73                           |
| Categorías de Google    | Restaurante · Restaurante mediterráneo     |
| Valoración              | 4,6 sobre 5 con 247 reseñas                |
| Horario                 | **No publicado en la ficha**               |
| Coordenadas             | 37.7786114, -3.8049623                     |
| Plus code               | Q5HW+C2 Jaén                               |
| Identificador del lugar | `ChIJ7azM-0_XbQ0Rzj2ocq4oWlk`              |
| Identificador de canal  | `/g/11fhz1_v5v`                            |

El número de reseñas se escribe **«247 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type`, `servesCuisine` y `acceptsReservations`.** La ficha clasifica el local como **«Restaurante»** y **«Restaurante mediterráneo»**, así que los datos estructurados usan `@type: Restaurant` (el tipo del resto de webs del repositorio) y `servesCuisine: ['Mediterránea']`. No se declara ninguna otra cocina. `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### El horario: la ficha no lo publica

**Este es el punto singular de esta ficha.** En la respuesta de Google, el campo del horario semanal (`info[203]`) viene a `null`: **Google Maps no publica ningún horario para este restaurante**. Se reintentó la descarga ocho veces y ninguna respuesta lo trajo.

Por eso:

- La portada **no muestra ninguna tabla de horarios**; en su lugar hay un aviso que explica que la ficha no lo publica y remite al teléfono del local.
- Los datos estructurados **no incluyen `openingHoursSpecification`** (la lista `hours` de `site.ts` está vacía a propósito y el campo se añade solo si hubiera turnos).
- `hoursSummary` avisa de lo mismo en la cabecera y la franja de datos.

No se ha inventado ningún horario. Si más adelante la ficha lo publica, basta con rellenar `hours` en `src/data/site.ts`: la tabla y el `openingHoursSpecification` aparecerán solos.

### Accesibilidad

La ficha publica el grupo «Accesibilidad»: el **acceso, el aseo y los asientos adaptados** para sillas de ruedas están disponibles. No publica ningún dato de aparcamiento adaptado, así que no se declara ninguno.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación:

1. «Ambiente familiar, buen servicio, buena comida y buen trato» (5 sobre 5)
2. «La comida es buenísima y los camareros muy atentos.» (5 sobre 5)
3. «Bocadillos estupendos y muy bien de precio al igual que los platos combinados.» (4 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-yumas   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-yumas
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto quedó **sin autor** (`author` vacío): no se atribuyen a nadie ni se pone pie.
- Hay mezcla de apaisadas y verticales, así que el collage de portada conserva las proporciones por defecto (16/9 arriba y 4/5 abajo) como el resto de webs del repositorio.
- Tras optimizar, el total bajó de **4,0 MB a 1,9 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-yumas
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Conseguir el horario real** y añadirlo a `hours` en `src/data/site.ts`: la ficha de Google no lo publica y sin él la web solo puede remitir al teléfono.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-yumas.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
