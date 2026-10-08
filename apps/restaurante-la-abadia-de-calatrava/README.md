# Restaurante La Abadia de calatrava

Web informativa de **Restaurante La Abadia de calatrava**, restaurante de cocina manchega y parrilla en la **Calle de Calatrava, 39 · 13003 Ciudad Real**, con teléfono 683 54 42 44.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, descripción del titular, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Restaurante La Abadia de calatrava         |
| Dirección               | C. de Calatrava, 39 · 13003 Ciudad Real    |
| Teléfono                | +34 683 54 42 44                           |
| Categorías de Google    | Restaurante, Parrilla, Restaurante de carnes asadas, Restaurante de platos de carne, Restaurante de cocina española |
| Valoración              | 4,6 sobre 5 con 569 reseñas                |
| Horario                 | Publicado (ver abajo)                      |
| Coordenadas             | 38.9899357, -3.9247905                     |
| Plus code               | X3QG+X3 Ciudad Real                        |
| Identificador del lugar | `ChIJe7_dMNDDaw0RPbWgAfxrJnM`              |
| Identificador de canal  | `/g/11vyrgt6y5`                            |
| Feature id              | `0xd6bc3d030ddbf7b:0x73266bfc01a0b53d`     |

El número de reseñas se escribe **«569 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**El nombre de la ficha.** Google lo publica como **«Restaurante La Abadia de calatrava»**, con «Abadia» sin tilde y «calatrava» en minúscula. Se reproduce tal cual en `business.name` (como en el resto de webs del repositorio). El propio local lo escribe con tilde y mayúscula —«La Abadía de Calatrava»— en su descripción del titular, y esa es la forma que usa `shortName` en la etiqueta del mapa.

**Dirección desarrollada.** Google publica la dirección abreviada («C. de Calatrava, 39»). En la web se desarrolla a **Calle de Calatrava, 39**, como en el resto del repositorio; el código postal 13003 y el municipio (Ciudad Real) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **cinco categorías** en su orden: «Restaurante» (la principal), «Parrilla», «Restaurante de carnes asadas», «Restaurante de platos de carne» y «Restaurante de cocina española». `category` y `categories` las recogen todas. `servesCuisine` traduce las cuatro que nombran una comida —`['Parrilla', 'Carnes asadas', 'Platos de carne', 'Cocina española']`— y no declara «Restaurante», que es un tipo de establecimiento. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin distintivo.** Google no muestra ninguna etiqueta junto al nombre en esta ficha, así que no hay `distintivo` ni una pregunta frecuente sobre él.

### Descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la sección «La casa». Menciona la cocina manchega tradicional, la carta junto al menú del día, las carnes de la zona a la parrilla, los platos de cuchara, el menú ejecutivo entre semana, el menú especial de fin de semana y los salones para empresas, celebraciones y grupos.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha    |
| --------- | --------------------------------- |
| Lunes     | 12:30 – 17:00 (Fiesta Nacional)   |
| Martes    | Cerrado                           |
| Miércoles | 12:30 – 16:30 · 20:00 – 24:00     |
| Jueves    | 12:30 – 16:30 · 20:00 – 24:00     |
| Viernes   | 12:30 – 16:30 · 20:00 – 24:00     |
| Sábado    | 12:30 – 16:30 · 20:00 – 24:00     |
| Domingo   | 12:30 – 16:30                     |

Detalles que se trasladan tal cual a la web:

- **Dos turnos de miércoles a sábado**: mediodía de **12:30 a 16:30** y noche de **20:00 a 24:00**.
- **El domingo abre solo al mediodía**, de 12:30 a 16:30.
- **El martes cierra**.
- **El lunes la ficha publica el horario de la Fiesta Nacional de España** (12:30 – 17:00), no el de un lunes cualquiera: la respuesta lo marca con el aviso «Horario de Fiesta Nacional de España». Se recoge ese tramo y se explica en la sección de horario.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días de dos turnos generan dos entradas y el martes cerrado ninguna (**10 especificaciones** en total).
- El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**, y **las tres figuran como disponibles**: el **acceso**, el **aseo** y los **asientos adaptados para sillas de ruedas**. No publica ninguna otra.

### El teléfono

Es un **móvil** (683 54 42 44), y así se publica: `phoneHref` usa `tel:+34683544244`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5:

1. «Pedimos salmorejo, croquetas muy muy buenas, unas migas manchegas y fritura.» (5/5)
2. «Pude tomar una ensalada deliciosa de frutos rojos y un arroz riquísimo.» (5/5)
3. «Hemos pasado muy buen rato cenando, el camarero Gabriel nos ha tratado de diez.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-la-abadia-de-calatrava   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-la-abadia-de-calatrava
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: ocho apaisadas (01, 03, 04, 05, 06, 07, 08 y 09) y dos verticales (02 y 10).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que se publican **sin pie y sin atribución**: no hay nada que citar (como en `adrizale`, `la-talega` o `casa-loan`).
- El collage de portada usa la apaisada **01** arriba y las dos verticales, **02** y **10**, en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **3,2 MB a 1,6 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-la-abadia-de-calatrava
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario**, sobre todo el del **lunes**, que la ficha da como horario de la Fiesta Nacional de España (12:30–17:00) y no como horario habitual.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-la-abadia-de-calatrava.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
