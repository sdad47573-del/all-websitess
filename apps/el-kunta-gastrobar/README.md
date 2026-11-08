# El kunta gastrobar

Web informativa de **El kunta gastrobar**, restaurante andaluz en la **Av. Constitución, 4 · 21550 Puebla de Guzmán (Huelva)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **10 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                        |
| ----------------------- | -------------------------------------- |
| Nombre                  | El kunta gastrobar (con la «k» minúscula) |
| Dirección               | Av. Constitución, 4 · 21550 Puebla de Guzmán |
| Categoría de Google     | Restaurante andaluz (es la única que publica) |
| Valoración              | 4,7 sobre 5 con 25 reseñas             |
| Coordenadas             | 37.6115657, -7.2518225                 |
| Plus code               | JP6X+J7 Puebla de Guzmán               |
| Identificador del lugar | `ChIJx3K3c8hREA0RkqltjJhIU_w`          |
| Identificador de canal  | `/g/11x61rgpnr`                        |
| Feature id              | `0xd1051c873b772c7:0xfc5348988c6da992` |

El número de reseñas se escribe **«25 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

## Lo que esta ficha no publica

Es la única ficha de hostelería del repositorio que **no publica ni horario ni teléfono** (la otra ficha sin ambos es `scruz-abogados`, que no es hostelería), así que la web está construida **alrededor de lo que falta**, sin rellenarlo:

| Dato | Qué publica Google |
| --- | --- |
| Horario | **Nada**: la ficha muestra la sugerencia **«Añadir horario»** |
| Teléfono | **Nada**: la ficha muestra la sugerencia **«Añadir teléfono»** |
| Web propia | **Nada**: la ficha muestra la sugerencia **«Añadir sitio web»** |
| Carta y precios | Nada |
| Distintivo | Ninguno |

En los tres primeros casos, la sugerencia de Google es la prueba de que el negocio no ha facilitado el dato, y así se explica en la web (mismo criterio que `restaurante-casa-manolo`): la portada cita las sugerencias de **horario** y **teléfono** y deja constancia de que la ficha tampoco publica **web propia**.

### Sin horario publicado

La ficha **no publica ningún horario**, así que la web **no tiene tabla de horarios**: en su lugar hay una nota que dice que Google no lo publica y por qué, y que recoge lo único que existe sobre el horario, que es una frase del titular. Está en `horarioNota` y se muestra en la sección de horario. El schema **va sin `openingHoursSpecification`**: no hay franjas que declarar ni se inventan.

Esa frase del titular es la del apartado siguiente: «desayunos tapas y comidas desde las 6 de la mañana hasta las 18 de la tarde». Se reproduce **atribuida al titular** y **no se convierte en una tabla**: no es un horario publicado por días y la web no lo trata como si lo fuera.

### Sin teléfono publicado

La ficha **no publica ningún teléfono** y el schema **va sin `telephone`**. Como consecuencia, la web **no tiene ningún botón de llamada**: no hay CTA de teléfono en la cabecera (en su lugar va un botón «Cómo llegar»), no hay barra fija de llamada en móvil y no hay línea de teléfono en la sección de contacto, que apunta a la ficha de Google Maps. Las dos páginas lo explican, incluida `/aviso-legal`, donde el apartado del titular no lista teléfono alguno y se aclara que no se inventa.

- `business` no tiene campo `phone` y no existe `phoneHref`, así que **nada en el proyecto puede pintar un teléfono por descuido**.
- Se elimina el CSS de la barra fija de llamada (`.mobile-call`) y el `.topbar-phone` pasa a llamarse `.topbar-cta`, con el mismo aspecto pero apuntando a las indicaciones de Google Maps, como en `restaurante-casa-manolo`.

### Una sola categoría: `servesCuisine` con la cocina que declara

«Restaurante andaluz» declara una cocina, así que el `restaurantSchema` lleva **`servesCuisine: ['Cocina andaluza']`**, con el mismo criterio y la misma categoría única que `restaurante-las-cordobesas` y `restaurante-los-jardines-de-la-playa`. Sin `priceRange` (la ficha no publica precios), sin `sameAs` (no publica web propia ni redes) y con `acceptsReservations: true`, como el resto de webs del repositorio.

### Descripción del titular

La ficha **sí publica descripción del titular** (`merchantdescription`). Se reproduce **literal**, con sus espacios sueltos antes de las comas y su punto seguido de minúscula, en la sección «En sus palabras»:

> Situado en la travesía de puebla de Guzmán ,el Kunta gastrobar ,ofrece desayunos tapas y comidas desde las 6 de la mañana hasta las 18 de la tarde .con aparcamientos privados

Lo que se respeta sin tocar: los **dos espacios antes de coma** («Guzmán ,el Kunta», «gastrobar ,ofrece»), la «puebla» en minúscula, el **punto seguido de minúscula** («tarde .con aparcamientos privados») y la **ausencia de punto final** (la última es la descripción de la ficha). Además, en ella el local se presenta con la «K» mayúscula («el Kunta gastrobar») mientras el nombre publicado es «El kunta gastrobar» con «k» minúscula: se deja tal cual en la cita.

De ahí salen las dos únicas afirmaciones del titular que la web recoge **atribuidas y sin ampliar**: los «desayunos tapas y comidas» y los «aparcamientos privados», esta última con su propia pregunta frecuente.

### Accesibilidad: un solo dato

La ficha **sí publica el grupo de accesibilidad**, pero con **una sola entrada**, los asientos adaptados para sillas de ruedas, y figura como disponible. El `restaurantSchema` incluye `amenityFeature` con esa única `LocationFeatureSpecification` (`value: true`). La ficha **no publica el acceso, el aseo ni el aparcamiento adaptados**, y la web no añade nada que la ficha no diga.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **tal cual**, sin corregir su redacción ni su puntuación (incluidas las tildes que faltan en la tercera: «Buenas comida», «no estaría»). Google las guarda entre comillas dobles, pero esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las puntuaciones son 5, 5 y 4:

1. «Buen sitio de comida casera!» (5/5)
2. «Por destacar, el atún con tomate y la ensaladilla.» (5/5)
3. «Buenas comida y buen servicio, no estaría mal algo más de cantidad, volveré.» (4/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs el-kunta-gastrobar   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 el-kunta-gastrobar
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **nueve fotografías** (la ficha devuelve una menos de las diez habituales): **una sola apaisada** (08) y **ocho verticales** (01 a 07 y 09).
- El collage de portada usa la única apaisada, la **08**, arriba, porque es la que encaja en el hueco de 16/9; abajo van dos verticales, la **01** y la **02**.
- El manifiesto **no atribuye autor** a ninguna foto (el campo `author` viene vacío), así que las nueve van **sin pie**. La ficha tampoco describe su contenido y no se inventa ninguna descripción: todos los `alt` avisan solo de dónde salen.
- Tras optimizar, la carpeta queda en **1,5 MB** de JPEG: el optimizador redujo a 1600 px las **siete verticales 01 a 07**, y **08 y 09** ya venían por debajo del objetivo y se quedaron como estaban (la apaisada mide 750 × 563). Los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **08**.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs el-kunta-gastrobar
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Es más importante aquí que en otras webs: **la ficha no publica ningún otro canal de contacto**, así que el correo es la única vía que puede figurar en el aviso legal.
2. **Confirmar el horario y el teléfono con el titular** y, si los publica en su ficha de Google, volver a ejecutar el script de datos: hoy la web no los tiene porque la ficha no los publica. Si aparecen, hay que añadir la tabla de horarios, `openingHoursSpecification` y los botones de llamada (además de devolver `phoneHref` y el CSS de la barra fija).
3. Confirmar si la grafía correcta del nombre es «El kunta gastrobar» (como el nombre de la ficha) o «el Kunta gastrobar» (como la descripción).
4. Preguntar por la carta y los precios: la ficha no publica ninguno y la web no los inventa.
5. Revisar las nueve fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
6. Si el dominio final no es `el-kunta-gastrobar.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
