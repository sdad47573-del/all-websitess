# La Factoría Vegana

Web informativa de **La Factoría Vegana Restaurante**, restaurante vegano en la **Calle Fernando III el Santo, 5 · 24007 León**, con teléfono 611 91 09 48.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **17 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | La Factoría Vegana Restaurante               |
| Dirección               | C. Fernando III el Santo, 5 · 24007 León     |
| Teléfono                | +34 611 91 09 48                             |
| Categoría de Google     | Restaurante vegano                           |
| Descripción del titular | «Restaurante Vegano»                         |
| Valoración              | 4,8 sobre 5 con 1002 reseñas                 |
| Horario                 | X–D 13:30–16:30; V–S también 20:30–23:30; L–M cerrado |
| Coordenadas             | 42.6062926, -5.5705512                       |
| Plus code               | JC4H+GQ León                                 |
| Identificador del lugar | `ChIJWS-w_V6bNw0RLIW58NmCUgc`                |
| Identificador de canal  | `/g/11h6n_3088`                              |

El número de reseñas se escribe **«1002 reseñas»** y la valoración con coma decimal («4,8»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. En español los números de cuatro cifras van sin separador de millar, y eso es lo que devuelve la configuración regional es-ES del repositorio.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Fernando III el Santo, 5»). En la web se desarrolla a **Calle Fernando III el Santo, 5**, como en el resto del repositorio; el código postal 24007 y el municipio (León) se publican tal cual.

**Categoría y cocina.** La ficha publica una sola categoría, «Restaurante vegano», que ya nombra la cocina, así que `servesCuisine` lleva `['Vegana']`. No se añade ningún otro tipo de cocina.

**Descripción del titular.** La ficha la rellena con «Restaurante Vegano», que repite el nombre de la categoría. Se cita literal en la portada y no se le atribuye al local ningún otro texto: tampoco publica web propia, perfiles sociales, carta ni precios.

### El horario

Es el horario que publica la ficha:

| Día       | Horario                       |
| --------- | ----------------------------- |
| Lunes     | Cerrado                       |
| Martes    | Cerrado                       |
| Miércoles | 13:30 – 16:30                 |
| Jueves    | 13:30 – 16:30                 |
| Viernes   | 13:30 – 16:30 · 20:30 – 23:30 |
| Sábado    | 13:30 – 16:30 · 20:30 – 23:30 |
| Domingo   | 13:30 – 16:30                 |

Detalles que se trasladan tal cual a la web:

- **Cierra lunes y martes.** El resto de días sirve un único turno de mediodía, de 13:30 a 16:30.
- **Cenas solo viernes y sábado**, de 20:30 a 23:30.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: 7 especificaciones en total (5 comidas y 2 cenas).

### Accesibilidad

La ficha publica **cuatro entradas**: acceso, aseo y asientos adaptados para sillas de ruedas figuran como disponibles; el aparcamiento adaptado para sillas de ruedas, como no disponible. La web enseña las cuatro etiquetas y las repite en `amenityFeature`.

### Las reseñas y los platos

La ficha destaca **dos reseñas**, ambas de 5 sobre 5, y se citan **literales**, sin corregir su redacción ni su puntuación:

1. «Delicioso el arroz, la burger mediterránea y el tiramisú.»
2. «Buen trato, buen ambiente, comida deliciosa y un precio inmejorable.»

La franja «Tres nombres de la reseña» de la portada sale **solo de la primera reseña**: arroz, burger mediterránea y tiramisú. No es una carta ni un menú, y así se advierte en la propia web, porque la ficha no publica ninguno.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs la-factoria-vegana   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 la-factoria-vegana
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas y cinco verticales. El manifiesto **no atribuye autor a ninguna**, así que no llevan pie.
- Tras optimizar a un lado largo máximo de 1600 px, el total bajó de **5,0 MB a 2,5 MB**; los `bytes` y las dimensiones del manifiesto se actualizaron con el tamaño real (el optimizador no los reescribe).
- La portada usa la apaisada 03 como «plato» circular y la vertical 01 como foto superpuesta; la galería va en tres columnas con marco redondeado.
- `public/og.jpg` (1200×630) es un recorte centrado de la apaisada 03, la única con proporción 16:9 junto a la 09.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs la-factoria-vegana
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
3. Confirmar el horario de festivos y, si el titular lo facilita, añadirlo a `hours`.
4. Si el dominio final no es `la-factoria-vegana.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
