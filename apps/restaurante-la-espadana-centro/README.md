# Restaurante La Espadaña Centro

Web informativa del **Restaurante La Espadaña Centro**, restaurante en la **C. Francisco Martí Mora, 1 · 23002 Jaén**, con teléfono 953 46 31 89.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | Restaurante La Espadaña Centro               |
| Dirección               | C. Francisco Martí Mora, 1 · 23002 Jaén      |
| Teléfono                | +34 953 46 31 89                             |
| Categoría de Google     | Restaurante                                  |
| Valoración              | 4,2 sobre 5 con 1410 reseñas                 |
| Horario                 | Martes a sábado: 12:00 – 16:00 y 20:00 – 24:00; domingo: 12:00 – 16:00; lunes cerrado |
| Coordenadas             | 37.7656439, -3.7908194                       |
| Plus code               | Q685+7M Jaén                                 |
| Identificador del lugar | `ChIJkU9kuXPXbQ0R2IxbAUjzULU`                |
| Identificador de canal  | `/g/1tjz4qs1`                                |

El número de reseñas se escribe **«1410 reseñas»** y la valoración con coma decimal («4,2»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano. Conviene tenerlo presente: `toLocaleString('es-ES')` **no agrupa los números de cuatro cifras** (`1410` → «1410», `12345` → «12.345»), así que la `description` de la página —que también se usa en Open Graph— se compone interpolando estos mismos valores en vez de escribir la cifra a mano, para que coincida con lo que se ve en el cuerpo.

**`@type`, `servesCuisine` y `acceptsReservations`.** Google clasifica el local **solo como «Restaurante»**, sin tipo de cocina, y la ficha no publica ninguna descripción del propio local, así que **no se declara `servesCuisine`**. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. No hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y el local cierra el **lunes**:

| Días                | Horario publicado             |
| ------------------- | ----------------------------- |
| Martes a sábado     | 12:00 – 16:00 · 20:00 – 24:00 |
| Domingo             | 12:00 – 16:00                 |
| Lunes               | Cerrado                       |

El cierre a las 24:00 es la **medianoche del día siguiente**; en los datos estructurados se escribe como `closes: '00:00'`. El lunes 12, Fiesta Nacional de España, trae el aviso de que «el horario podría ser diferente»; el cierre del lunes se ha comprobado además con fuentes públicas de la ficha y es habitual, no solo del festivo.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con cuatro entradas: el **acceso, el aseo y los asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado** está marcado como no disponible.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de **5 sobre 5**:

1. «Un buen sitio para comer raciones y tapear porque tienen muy buena cocina.»
2. «Totalmente recomendable, buen trato y el flamenquin que pedimos estaba muy rico.»
3. «Cerveza de calidad, Camareros atentos, Buen ambiente!»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-espadana-centro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-espadana-centro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto **atribuye todas al propio local** («Restaurante La Espadaña Centro»), así que cada una lleva su pie (`figcaption`) con esa autoría.
- Las diez son **verticales** (retratos de 3:4 o 9:16): la galería va en tres columnas, que con retratos estrechos se lee mejor que una rejilla de recortes. El collage de portada usa la 05 (la de mayor resolución) arriba y las 01 y 03 en el hueco inferior, con las proporciones por defecto del repositorio (16/9 y 4/5).
- Tras optimizar, el total bajó de **7,7 MB a 2,1 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto vertical 05 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-espadana-centro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (los dos turnos, el cierre a medianoche, el domingo solo mediodía y el cierre del lunes) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-la-espadana-centro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
