# Esens Restaurante & Arrocería

Web informativa de **Esens Restaurante & Arrocería**, arrocería de cocina valenciana en **Av. de Oscar Esplà, N° 4 · 03581 L'Albir (Alicante)**, con teléfono 966 58 06 01.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Bitter** (títulos) y **Outfit** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Esens Restaurante & Arrocería              |
| Dirección               | Av. de Oscar Esplà, N° 4 · 03581 L'Albir   |
| Teléfono                | +34 966 58 06 01                           |
| Categorías de Google    | Cocina valenciana · Arrocería · Tapas      |
| Valoración              | 4,7 sobre 5 con 1.054 reseñas              |
| Horario                 | Publicado (ver abajo)                      |
| Coordenadas             | 38.57333, -0.0652977                       |
| Plus code               | HWFM+8V El Albir                           |
| Identificador del lugar | `ChIJS0a5no8BYg0ROnRzbG9VWNk`              |
| Identificador de canal  | `/g/11h07_nl0m`                            |
| Feature id              | `0xd62018f9eb9464b:0xd958556f6c73743a`     |

El número de reseñas se escribe **«1.054 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Cuarta web del grupo de Alicante fuera de Benidorm** (tras `mamma-p` y `las-coronas`): el local está en **L'Albir**, el núcleo de L'Alfàs del Pi, con el mismo código postal 03581 que `mamma-p`. La provincia sigue siendo Alicante y la comunidad la Comunidad Valenciana, así que `geo.region` mantiene el código **`ES-A`**.

**Es la ficha del grupo con más categorías: tres, y las tres declaran comida.** `servesCuisine` las traduce todas, sin añadir ninguna otra, como en `restaurante-la-abadia-de-calatrava`:

- «Restaurante de cocina valenciana» → **`Valenciana`** (el mismo término que usa `restaurante-22` para esa categoría).
- «Arrocería» → **`Arrocería`**.
- «Restaurante especializado en tapas» → **`Tapas`** (como en `restaurante-mac-gowen-brothers`).

El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica carta ni precios) y sin `sameAs` (sin web propia ni redes).

**La descripción del titular es la más larga de este grupo.** Se reproduce **literal**:

```
Restaurante & Arrocería, en pleno corazón de El Albir. Una propuesta de cocina mediterránea con especial atención a los arroces, con diferentes elaboraciones, cada una con su personalidad y sus propios matices. Producto, sabor y un servicio cuidado en un ambiente agradable y acogedor.
```

**Sin distintivo.** Google **no muestra ninguna etiqueta junto al nombre**, así que no existe la constante `distintivo` y la web no menciona ninguna.

**El «N°» de la dirección se reproduce tal cual**, con el símbolo de grado y el espacio que publica la ficha. Además, la ficha llama **«L'Albir»** al municipio en la dirección y **«El Albir»** en el plus code: se recogen las dos grafías tal cual, cada una en su sitio.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 12:00 – 17:30                  |
| Martes    | 12:00 – 17:30                  |
| Miércoles | Cerrado                        |
| Jueves    | 12:00 – 17:30                  |
| Viernes   | 12:00 – 17:30                  |
| Sábado    | 12:00 – 17:30                  |
| Domingo   | 12:00 – 17:30                  |

Detalles que se trasladan tal cual a la web:

- **Un solo turno de mediodía, de 12:00 a 17:30**, todos los días menos el **miércoles**, que cierra. Solo abre comidas: no publica cenas.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que cada día que abre genera una entrada y el miércoles ninguna (**6 especificaciones** en total).
- **Dos marcas de festivo, ambas de aviso.** El **viernes 9** la ficha lo marca como **«Día de la Comunidad Valenciana: el horario podría ser diferente»** y el **lunes 12** como **«Fiesta Nacional de España: el horario podría ser diferente»**. Las dos son avisos de que el horario podría cambiar, así que se recogen igual, atribuidas a su día.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas.

### El teléfono

Es un **fijo** (966 58 06 01), y así se publica: `phoneHref` usa `tel:+34966580601`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Buena calidad-precio, buena cocina, buena materia prima y excelente servicio.» (5/5)
2. «Pedimos pulpo, croquetas y arroz.» (5/5)
3. «Recomiendo la pata de pulpo y la tarta de queso muy rica también.» (5/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs esens-arroceria   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 esens-arroceria
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **nueve verticales** (01, 02, 03, 04, 05, 06, 07, 08 y 10) y **una sola apaisada** (09, de 3264 × 2448). **Ninguna es panorámica ni cuadrada.** Es la galería del grupo con más verticales (nueve de diez).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en las webs `restaurante-podenco`, `gastro-bar-bo`, `daivel`, `pandokum-braseria`, `las-coronas`, `taberna-la-raquelita`, `restaurante-la-casuca` y `casa-loan`.
- El collage de portada usa la **única apaisada (09)** arriba (16/9) y las verticales **02** y **05** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **8,8 MB a 2,0 MB**; los `bytes` se actualizaron con el tamaño real con `scripts/tmp-esens-post.mjs` (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **09** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs esens-arroceria
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar la dirección exacta**: Google publica «Av. de Oscar Esplà, N° 4», con el «N°» literal, y la grafía del municipio cambia entre la dirección («L'Albir») y el plus code («El Albir»).
3. **Confirmar el horario** (12:00 a 17:30, miércoles cerrado) y el tratamiento de los dos festivos del 9 y el 12 de octubre. La ficha no publica turno de cena: si el local las sirve, hay que ampliar `hours`.
4. **Revisar la descripción del titular**, que menciona cocina mediterránea además de las tres categorías de Google.
5. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
6. Si el dominio final no es `esens-arroceria.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
