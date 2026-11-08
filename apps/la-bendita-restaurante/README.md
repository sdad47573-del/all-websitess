# La Bendita Restaurante

Web informativa de **La Bendita Restaurante**, restaurante y cafetería de **Cam. los Mártires · 13005 Ciudad Real**, con teléfono 683 30 73 81.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Cormorant Garamond** (títulos) y **Manrope** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **9 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | La Bendita Restaurante                 |
| Dirección               | Cam. los Mártires · 13005 Ciudad Real  |
| Teléfono                | +34 683 30 73 81                       |
| Categorías de Google    | Restaurante de cocina española · Cafetería |
| Valoración              | 4,1 sobre 5 con 492 reseñas            |
| Horario                 | Publicado (ver abajo)                  |
| Coordenadas             | 38.9939814, -3.9218351                 |
| Plus code               | X3VH+H7 Ciudad Real                    |
| Identificador del lugar | `ChIJ4aWMO8LDaw0Rod0sfNe7hHA`          |
| Identificador de canal  | `/g/11y1w7lpgc`                        |
| Feature id              | `0xd6bc3c23b8ca5e1:0x7084bbd77c2cdda1` |

El número de reseñas se escribe **«492 reseñas»** y la valoración con coma decimal («4,1»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**La dirección.** Google publica **«Cam. los Mártires»** con la abreviatura «Cam.» (Camino) y **sin número de portal**. Se reproduce tal cual (`streetAddress`) y la web lo advierte en las preguntas frecuentes: no se añade ningún número que la ficha no publique. El código postal 13005 y el municipio (Ciudad Real) se publican tal cual, aunque la ficha los guarde juntos en un solo campo («13005 Ciudad Real»).

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**, en este orden: «Restaurante de cocina española» y «Cafetería». Se recogen las dos en `business.categories` y la portada las menciona. Alimentan `servesCuisine: ['Española']`, traduciendo la primera como en el resto del repositorio. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Descripción del titular.** La ficha publica una descripción escrita por el propio negocio, de 248 caracteres, que empieza «Un restaurante que va más allá de lo convencional…» y termina «…de una manera rompedora». Se reproduce **literal** (`descripcionLocal`), sin recortarla ni corregirla.

**Sin distintivo.** A diferencia de otras fichas del repositorio, Google **no muestra ninguna etiqueta junto al nombre** de este negocio, así que no existe la constante `distintivo` y la web no menciona ninguna. Es el caso mayoritario del repositorio (78 de las 107 webs con `site.ts` no la tienen).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha        |
| --------- | ------------------------------------- |
| Lunes     | 12:30 – 17:00                         |
| Martes    | Cerrado                               |
| Miércoles | 12:30 – 17:00 · 20:00 – 1:30          |
| Jueves    | 12:30 – 17:00 · 20:00 – 1:30          |
| Viernes   | 13:00 – 2:30                          |
| Sábado    | 13:00 – 2:30                          |
| Domingo   | 13:00 – 17:00                         |

Detalles que se trasladan tal cual a la web:

- **Mediodía de 12:30 a 17:00**, y viernes, sábado y domingo **empieza a las 13:00**.
- **Miércoles y jueves añaden un segundo turno de 20:00 a 1:30.**
- **Viernes y sábado mantienen un tramo continuo de 13:00 a 2:30**, que en la ficha aparece como una sola entrada.
- **El martes cierra** todo el día.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que miércoles y jueves generan dos entradas cada uno y el martes ninguna (**7 especificaciones** en total).
- **Cierre de madrugada:** el texto visible conserva la forma en que lo publica Google (`2:30`, `1:30`) y los datos estructurados lo escriben con dos dígitos (`02:30`, `01:30`), como en `makao-street-food` y `restaurante-quinto-toro`.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos** adaptados para sillas de ruedas. No publica ninguna otra.

### El teléfono

Es un **móvil** (683 30 73 81), y así se publica: `phoneHref` usa `tel:+34683307381`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4 sobre 5:

1. «Muy buena comida, trato excelente muy contentos, volveremos a venir.» (5/5)
2. «Muy rico todo y los camareros muy majos y muy atentos» (5/5)
3. «Fui con mi pareja y pedimos el tartar de atún, el torrezno meloso y la torrija.» (4/5)

**Comillas quitadas.** Google guarda cada extracto **entre comillas dobles** literales. Se han quitado, porque la web ya presenta cada reseña entre « » y no forman parte del texto que escribió la persona.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs la-bendita-restaurante   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (02, 04, 06, 09 y la **panorámica** 10, de 4080 × 1840), cuatro verticales (01, 03, 07 y 08) y una casi cuadrada (`vista-5-05`, de 2555 × 2699).
- El manifiesto de la descarga **no atribuye autor** a ninguna (`author` = «»), así que **ninguna foto lleva pie** ni atribución, como en `restaurante-podenco`, `taberna-la-raquelita` o `casa-loan`.
- El collage de portada usa la **panorámica 10** arriba (16/9) y las verticales **07** y **01** en los dos huecos inferiores (4/5). La galería va en tres columnas.
- Los `bytes` del manifiesto se actualizaron con el tamaño real con `scripts/tmp-bendita-post.mjs`.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la panorámica **10** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs la-bendita-restaurante
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular la dirección exacta**: la ficha publica «Cam. los Mártires» sin número, con la abreviatura «Cam.». Hay que decidir si se deja así o se completa («Camino de los Mártires» más el portal que indique el local).
3. **Confirmar el horario** (mediodía de 12:30 a 17:00, noche miércoles y jueves de 20:00 a 1:30, viernes y sábado de 13:00 a 2:30, martes cerrado) y ajustar `hours` si procede.
4. **Revisar la descripción del titular** (arte y entretenimiento) y decidir si se mantiene literal o se ajusta.
5. **Revisar las diez fotos publicadas** (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe, así que hoy el `alt` solo dice de dónde salen.
6. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
7. Si el dominio final no es `la-bendita-restaurante.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
