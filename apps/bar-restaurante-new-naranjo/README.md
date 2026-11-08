# Bar - Restaurante New Naranjo

Web informativa de **Bar - Restaurante New Naranjo**, restaurante y bar en la **Av. de Andalucía · 03502 Benidorm** (Alicante), con teléfono 611 57 58 97.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | Bar - Restaurante New Naranjo          |
| Dirección               | Av. de Andalucía · 03502 Benidorm      |
| Teléfono                | +34 611 57 58 97                       |
| Categorías de Google    | Restaurante                            |
| Valoración              | 4,2 sobre 5 con 104 reseñas            |
| Horario                 | 11:00 – 01:00, todos los días          |
| Coordenadas             | 38.5429977, -0.1251938                 |
| Plus code               | GVVF+5W Benidorm                       |
| Identificador del lugar | `ChIJO92WmwUFYg0RZ5EohU0iLoY`          |
| Identificador de canal  | `/g/11kn1l1gyg`                        |
| Feature id              | `0xd6205059b96dd3b:0x862e224d85289167` |
| Distintivo de la ficha  | Ninguno                                |

El número de reseñas se escribe **«104 reseñas»** y la valoración con coma decimal («4,2»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Respuesta incompleta en el primer intento.** La primera descarga llegó con la ficha a medias (16 KB, sin horario). La tercera respuesta, de unos 28 KB, trajo la descripción del titular, el horario con los siete días y las tres reseñas que se citan abajo. La web usa la respuesta completa.

**Dirección sin número de portal.** Google publica solo la avenida —«Av. de Andalucía», con la abreviatura «Av.»— sin número, y el código postal 03502 con el municipio, Benidorm. Se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas y los datos de la ficha: no se inventa un número ni se completa la dirección.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», así que el `@type` es `Restaurant` y **no se añade `servesCuisine`**: no hay una cocina declarada. Se mantiene `acceptsReservations: true` como en el resto de webs del repositorio. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en un párrafo destacado de la sección «La casa», sin corregirla: mantiene el espacio antes de la coma, la falta de espacio tras «niños,» y la ortografía del original («footbolin», «consumicion»).

> Dispone Desayunos, Almuerzo comida y cena , tenemos un parque para los niños,Billar footbolin y podéis traer la comida y hacer la Barbacoa y paga la consumicion en el establecimiento

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días: **el mismo tramo todos los días**, de 11:00 a 1:00.

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 11:00 – 01:00                  |
| Martes    | 11:00 – 01:00                  |
| Miércoles | 11:00 – 01:00                  |
| Jueves    | 11:00 – 01:00                  |
| Viernes   | 11:00 – 01:00                  |
| Sábado    | 11:00 – 01:00                  |
| Domingo   | 11:00 – 01:00                  |

Detalles que se trasladan tal cual a la web:

- **Horario continuado que cruza la medianoche**: la 1:00 del cierre corresponde ya a la madrugada del día siguiente. La ficha lo publica como «11:00–1:00» y la web lo escribe «11:00 – 01:00».
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los siete días abiertos generan **siete especificaciones**.
- El cierre a la 1:00 se escribe como `01:00` en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto.
- La ficha **no publica ningún día cerrado**, así que no se inventa un día de descanso.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **dos entradas**, y **las dos figuran como disponibles**: el **acceso** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (611 57 58 97), y así se publica: `phoneHref` usa `tel:+34611575897`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (la primera mantiene la ortografía del original, «llendo»). Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Buen menú para llevar, yo fui por una amiga y me gustó y sigo llendo» (5/5)
2. «Un kebab con una gran terraza y una parte con juguetes para niños.» (4/5)
3. «Kebabs ricos y baratos, muy agradable» (5/5)

De ahí sale la única información publicada sobre terraza y zona de niños: la ficha **no tiene un atributo de terraza**, así que la web habla de ella citando las reseñas y la descripción del titular, y lo dice así en su propia pregunta frecuente.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-new-naranjo   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 bar-restaurante-new-naranjo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: **seis verticales** (01, 02, 04, 06, 07 y 10) y **cuatro apaisadas** (03, 05, 08 y 09). Ninguna llega a panorámica.
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `restaurante-el-gato` o `adrizale`).
- El collage de portada usa la apaisada **05** (1920 × 1080, la más ancha) arriba y las verticales **01** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total de las diez fotos baja de **4,4 MB a 2,2 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe, así que el manifiesto conserva las dimensiones originales).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **05** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-new-naranjo
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha publica el mismo tramo de 11:00 a 1:00 los siete días, sin día de cierre) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `bar-restaurante-new-naranjo.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
