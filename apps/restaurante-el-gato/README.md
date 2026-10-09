# Restaurante El Gato

Web informativa de **Restaurante El Gato**, restaurante en la **Carr. de Mazarrón, 36 · 30310 Cartagena** (Murcia), con teléfono 637 10 13 34.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                    |
| ----------------------- | ---------------------------------- |
| Nombre                  | Restaurante El Gato                |
| Dirección               | Carr. de Mazarrón, 36 · 30310 Cartagena |
| Teléfono                | +34 637 10 13 34                   |
| Categorías de Google    | Restaurante                        |
| Valoración              | 4,4 sobre 5 con 825 reseñas        |
| Horario                 | Publicado (ver abajo)              |
| Coordenadas             | 37.6200223, -1.0130472             |
| Plus code               | JXCP+2Q Cartagena                  |
| Identificador del lugar | `ChIJ4dnKtGVCYw0RLDXVQwoRCVg`      |
| Identificador de canal  | `/g/11bt_h164_`                    |
| Feature id              | `0xd634265b4cad9e1:0x5809110a43d5352c` |

El número de reseñas se escribe **«825 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección.** Google publica «Carr. de Mazarrón, 36» (con la abreviatura «Carr.»), el código postal 30310 y el municipio, Cartagena. Se reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas de la ficha.

**Categoría y `servesCuisine`.** La ficha publica **una sola categoría**, «Restaurante», así que el `@type` es `Restaurant` y **no se añade `servesCuisine`**: no hay una cocina declarada. Se mantiene `acceptsReservations: true` como en el resto de webs del repositorio. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

### Sin descripción del titular

La ficha **no publica descripción del titular** (`merchantdescription` viene vacío), así que no hay texto que citar y la sección «La casa» se apoya solo en los campos publicados y en las reseñas.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | 5:00 – 16:00                   |
| Martes    | 5:00 – 16:00                   |
| Miércoles | 5:00 – 16:00                   |
| Jueves    | 5:00 – 16:00                   |
| Viernes   | 5:00 – 16:00                   |
| Sábado    | 5:00 – 16:00                   |
| Domingo   | Cerrado                        |

Detalles que se trasladan tal cual a la web:

- **El local abre de lunes a sábado** con **horario continuado de 5:00 a 16:00**, sin turnos partidos.
- **Los domingos cierra**; es el único día de cierre.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que el domingo cerrado no genera ninguna entrada (**6 especificaciones** en total).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cuatro entradas**, y **las cuatro figuran como disponibles**: el **acceso**, el **aparcamiento**, el **aseo** y los **asientos adaptados para sillas de ruedas**.

### El teléfono

Es un **móvil** (637 10 13 34), y así se publica: `phoneHref` usa `tel:+34637101334`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluido el espacio antes de la coma de la primera y el signo de la tercera). Una es de 5 sobre 5 y dos de 4:

1. «Todo muy rico , buen ambiente y los camareros muy atentos.» (5/5)
2. «Pescado, tapas y cerveza fría a buen precio.» (4/5)
3. «Muy buen tapeo y buen desayuno¡ Tostadas súper abundantes.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-el-gato   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-el-gato
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: seis verticales (02, 03, 04, 05, 08 y 10) y cuatro apaisadas (01, 06, 07 y 09).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que las fotos se publican **sin pie y sin atribución**: la ficha no trae una descripción de su contenido y aquí no se inventa ninguna, ni se atribuyen a nadie.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **6,0 MB a 2,1 MB**; los `bytes` se actualizaron con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-el-gato
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da apertura de lunes a sábado de 5:00 a 16:00 y cierre los domingos) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-el-gato.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
