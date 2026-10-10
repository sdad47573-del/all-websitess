# Restaurante La Purísima

Web informativa de **Restaurante La Purísima**, restaurante andaluz, brasería y arrocería en la **Pl. San Francisco, 1 · 21410 Isla Cristina (Huelva)**, con teléfono 619 64 74 68.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, distintivo, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                              |
| ----------------------- | -------------------------------------------- |
| Nombre                  | Restaurante La Purísima                      |
| Dirección               | Pl. San Francisco, 1 · 21410 Isla Cristina   |
| Teléfono                | +34 619 64 74 68 (móvil)                     |
| Categorías de Google    | Restaurante, Restaurante andaluz, Brasería, Arrocería |
| Distintivo              | Brunch                                       |
| Valoración              | 4,5 sobre 5 con 515 reseñas                  |
| Horario                 | Publicado (ver abajo)                        |
| Coordenadas             | 37.2037157, -7.3272477                       |
| Plus code               | 6M3F+F4 Isla Cristina                        |
| Identificador del lugar | `ChIJUxJTffQkEA0R1qZ6WnXFogM`                |
| Identificador de canal  | `/g/11f120ymy7`                              |
| Feature id              | `0xd1024f47d531253:0x3a2c5755a7aa6d6`       |

El número de reseñas se escribe **«515 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

### La dirección publicada

Google publica el bloque de dirección con **dos líneas**: primero «A UN MINUTO DE LA LONJA .local climatizado» y después la dirección postal «Pl. San Francisco, 1».

- `streetAddress` recoge **solo la dirección postal**: `Pl. San Francisco, 1`. Es la que va al marcado, al `PostalAddress` de los datos estructurados y al pie.
- La línea del titular («A UN MINUTO DE LA LONJA .local climatizado», con el espacio suelto antes de «.local» tal como la publica) se guarda aparte en `notaLocal` y se muestra como **nota del bloque de dirección**, atribuida a la ficha. No se cuela como calle ni en el `streetAddress`, porque **no es una dirección**.

### El distintivo

Google muestra junto al nombre un **distintivo**, aquí «**Brunch**». Se recoge tal cual en `distintivo` y se menciona en el texto de la portada y en una pregunta frecuente; la ficha **no explica** a qué se refiere, así que la web no lo interpreta.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, en un único párrafo, en la sección «En sus palabras»:

> Restaurante La Purísima, el auténtico paraíso gastronómico de Isla Cristina. […] Nuestro personal amable y atento te hará sentir como en casa. ¡Te esperamos!

Son palabras del titular sobre sí mismo (platos caseros, carnes a la brasa, guisos marineros, personal atento); la web las atribuye a la ficha.

### Categorías y `servesCuisine`

La ficha publica **cuatro categorías**: «Restaurante» (la primera, que hace de categoría principal), «Restaurante andaluz», «Brasería» y «Arrocería». El `@type` es `Restaurant`, el del resto de webs del repositorio, y **`servesCuisine` traduce las tres que declaran cocina**: `['Cocina andaluza', 'Brasería', 'Arrocería']`. `acceptsReservations: true` se mantiene igual. Sin `sameAs` (la ficha no publica web propia ni redes) y sin `priceRange` (no publica precios y no se inventa uno).

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | Cerrado                        |
| Miércoles | Cerrado                        |
| Jueves    | 12:00 – 16:00 · 21:00 – 24:00  |
| Viernes   | 12:00 – 16:00 · 21:00 – 24:00  |
| Sábado    | 12:00 – 16:00 · 21:00 – 24:00  |
| Domingo   | 12:00 – 16:00                  |

Detalles que se trasladan tal cual a la web:

- **Cierra de lunes a miércoles** (tres días seguidos, inusual en el repositorio).
- **De jueves a sábado sirve mediodía y cena**; el **domingo solo mediodía**.
- El turno de noche cierra a las 24:00, que en los datos estructurados se escribe como `closes: '00:00'`.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los tres días cerrados no generan entrada (**7 especificaciones** en total: tres días con dos turnos y uno con uno).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cinco entradas** (dos más que las otras fichas del repositorio), y **solo tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. El **aparcamiento adaptado** y el **bucle magnético asistencial** aparecen expresamente como **no disponibles**, y así se muestran (con la marca de no disponible) y se explican en una nota y en las preguntas frecuentes.

### El teléfono

Es un **móvil** (619 64 74 68), y así se publica: `phoneHref` usa `tel:+34619647468`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluido el espacio suelto antes de la coma de la segunda). La ficha las presenta entrecomilladas, pero esas comillas son de Google y no forman parte del texto, así que no se reproducen. Las puntuaciones son 5, 3 y 5:

1. «Pedimos unas gambas tigre al ajillo, bacalao, morrillo de atún y calamares.» (5/5)
2. «Buen sitio con tapas muy ricas , no tienen cerveza sin gluten» (3/5)
3. «Los camareros encantadores y rápidos está en medio de una plaza muy bonita.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-purisima   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-purisima
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cinco apaisadas (01, 02, 03, 06 y 07) y cinco verticales (04, 05, 08, 09 y 10).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que no hay a quién atribuir las fotos y se publican **sin pie de foto**.
- El collage de portada usa la apaisada **01** arriba y las verticales **04** y **05** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,9 MB a 2,1 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-purisima
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha cierra de lunes a miércoles y abre de jueves a domingo) y ajustar `hours` si procede.
3. **Preguntar al titular a qué se refiere el distintivo «Brunch»** y si quiere explicarlo en la web; ahora solo se reproduce textualmente.
4. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
5. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
6. Si el dominio final no es `restaurante-la-purisima.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
