# Malavida Bulevar

Web informativa de **Malavida Bulevar**, bar restaurante en la **Calle Miguel Castillejo, 1 · 23009 Jaén**, con teléfono 652 08 25 39.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado            |
| ----------------------- | -------------------------- |
| Nombre                  | Malavida Bulevar           |
| Dirección               | C. Miguel Castillejo, 1 · 23009 Jaén |
| Teléfono                | +34 652 08 25 39           |
| Categorías de Google    | Bar, Bar restaurante, Restaurante |
| Valoración              | 4,4 sobre 5 con 1873 reseñas |
| Horario                 | Publicado (ver abajo)      |
| Coordenadas             | 37.7795883, -3.788067      |
| Plus code               | Q6H6+RQ Jaén               |
| Identificador del lugar | `ChIJY8CJoQjXbQ0Rwq3tAZmDUiE` |
| Identificador de canal  | `/g/11cmg173zh`            |
| Feature id              | `0xd6dd708a189c063:0x2152839901edadc2` |
| Distintivo de la ficha  | Ninguno                    |

El número de reseñas se escribe **«1873 reseñas»** y la valoración con coma decimal; ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección desarrollada.** Google publica la dirección abreviada («C. Miguel Castillejo, 1»). En la web se desarrolla a **Calle Miguel Castillejo, 1**, como en el resto del repositorio; el código postal 23009 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **tres categorías** —«Bar» (la primera, que hace de categoría principal), «Bar restaurante» y «Restaurante»— y **no se añade `servesCuisine`**: son tipos de establecimiento y no una cocina declarada. El `@type` es `Restaurant`, el del resto de webs del repositorio, y `acceptsReservations: true` se mantiene igual. Sin `priceRange` (la ficha no publica precios) y sin `sameAs` (sin web propia ni redes).

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no hay `distintivo` y la portada no lo menciona.

### La descripción del titular

La ficha publica una **descripción del titular**, que se reproduce **literal** en `descripcionLocal` y en la portada con el rótulo «Descripción de la ficha»:

> Reserva también por wasap al mismo número de contacto!

Se copia tal cual, sin corregir la grafía («wasap»). Es el propio local quien invita a reservar por mensajería a ese número; esta web no permite reservar.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha  |
| --------- | ------------------------------- |
| Lunes     | 8:00 – 17:00 · 20:00 – 24:00    |
| Martes    | 8:00 – 24:00                    |
| Miércoles | 8:00 – 17:00 · 20:00 – 24:00    |
| Jueves    | 8:00 – 17:00 · 20:00 – 24:00    |
| Viernes   | 8:00 – 17:00 · 20:00 – 24:00    |
| Sábado    | 8:00 – 17:00 · 20:00 – 24:00    |
| Domingo   | 8:00 – 17:00 · 20:00 – 24:00    |

Detalles que se trasladan tal cual a la web:

- **Todos los días abre en dos turnos, de 8:00 a 17:00 y de 20:00 a 24:00**, salvo el **martes**, que la ficha da como **un solo turno de 8:00 a 24:00** (sin cortar).
- Por eso `openingHoursSpecification` tiene **13 especificaciones** (dos por cada uno de los seis días con dos turnos y una del martes), construidas con un `flatMap` sobre `item.shifts`.
- El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados.
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **tres entradas**: marca como **disponibles** el **acceso** y el **aseo adaptados para sillas de ruedas**, y señala que **no hay aparcamiento adaptado**. La web lista las tres y marca la última con el estilo de «no disponible». No publica ninguna otra.

### El teléfono

Es un **móvil** (652 08 25 39), y así se publica: `phoneHref` usa `tel:+34652082539`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación. Una es de 4 sobre 5, otra de 5 sobre 5 y una negativa de 1 sobre 5 que se reproduce igual:

1. «Es un buen sitio para tapear, con buena comida y cerveza bien fresquita.» (4/5)
2. «Solomillo a la pimienta buenísimo, buen trato de los camareros.» (5/5)
3. «Nos pedimos mitad de queso y mitad de jamón y escaso.» (1/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs malavida-bulevar   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 malavida-bulevar
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 02, 04 y 05), una cuadrada (03) y cinco verticales (06, 07, 08, 09 y 10).
- El manifiesto de la descarga quedó **sin autor** (`author` vacío), así que las fotos se publican **sin pie** y sin atribución: no hay nada que citar.
- El collage de portada usa la apaisada **01** arriba y las verticales **06** y **08** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el manifiesto baja de **4,1 MB a 2,3 MB**; los `bytes` se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200 × 630) es un recorte centrado de la foto apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs malavida-bulevar
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha da dos turnos de 8:00 a 17:00 y de 20:00 a 24:00, con el martes de 8:00 a 24:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `malavida-bulevar.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
