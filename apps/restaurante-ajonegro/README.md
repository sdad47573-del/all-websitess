# Restaurante AjoNegro

Web informativa de **Restaurante AjoNegro - OPCIONES SIN GLUTEN**, bar restaurante en el **Polígono Los Olivares, Calle Villatorres Parcela 23 · 23009 Jaén**, con teléfono 648 71 97 39.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **8 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                       |
| ----------------------- | ----------------------------------------------------- |
| Nombre                  | Restaurante AjoNegro - OPCIONES SIN GLUTEN            |
| Dirección               | Polígono Los Olivares Calle Villatorres Parcela 23 · 23009 Jaén |
| Teléfono                | +34 648 71 97 39                                      |
| Categorías de Google    | Bar restaurante · Restaurante de desayunos · Restaurante de comida sin gluten · Restaurante mediterráneo |
| Valoración              | 4,4 sobre 5 con 646 reseñas                           |
| Horario                 | Martes a viernes 7:00–17:00 (ver abajo)               |
| Coordenadas             | 37.7992994, -3.7825202                                |
| Plus code               | Q6X8+PX Jaén                                          |
| Identificador del lugar | `ChIJH6EjulfWbQ0RE6UYAaIoVcM`                         |
| Identificador de canal  | `/g/1q2vz4wht`                                        |
| Feature id              | `0xd6dd657ba23a11f:0xc35528a20118a513`               |
| Distintivo de la ficha  | Brunch                                                |

El número de reseñas se escribe **«646 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección tal cual.** La ficha publica **«Polígono Los Olivares Calle Villatorres Parcela 23»**, sin abreviaturas, así que no hay nada que desarrollar y se reproduce igual. El código postal 23009 y el municipio (Jaén) se publican tal cual.

**Categorías y `servesCuisine`.** La ficha publica **cuatro categorías** (bar restaurante, restaurante de desayunos, restaurante de comida sin gluten y restaurante mediterráneo); las cuatro se recogen en `categories` y la primera («Bar restaurante») es `category`. En los datos estructurados se añade `servesCuisine: ['Cocina mediterránea']`, que traduce la categoría «Restaurante mediterráneo» (como en `restaurante-baviera`). El `@type` es `Restaurant` y `acceptsReservations: true` se mantiene como en el resto del repositorio. Sin `priceRange` (el único precio publicado vive dentro de la descripción del titular) y sin `sameAs` (sin web propia ni redes).

### El distintivo «Brunch»

Google muestra la etiqueta **«Brunch»** junto al nombre en la ficha. Se recoge tal cual en `distintivo`, se enseña en la portada y tiene su propia pregunta frecuente, sin ampliarla ni interpretarla.

### La descripción del titular

La ficha publica una **descripción escrita por el propio local**, que se reproduce **literal** en `descripcionLocal`, con sus saltos de línea, su falta de tilde en «MENU» y su espaciado («13,50 €»). La web la muestra como bloque propio respetando los saltos (`white-space: pre-line`). Menciona que garantiza la ausencia total de contaminación cruzada, que el personal tiene formación específica, los desayunos y bocadillos, los platos caseros y tradicionales, el menú diario a 13 € (13,50 € sin gluten) y los eventos y celebraciones. Es el único texto de este tipo que publica la ficha.

### El horario

Es el horario que publica la ficha y se comprobó completo en una respuesta con los siete días:

| Día       | Horario publicado por la ficha |
| --------- | ------------------------------ |
| Lunes     | Cerrado                        |
| Martes    | 7:00 – 17:00                   |
| Miércoles | 7:00 – 17:00                   |
| Jueves    | 7:00 – 17:00                   |
| Viernes   | 7:00 – 17:00                   |
| Sábado    | Cerrado                        |
| Domingo   | Cerrado                        |

- **Abre de martes a viernes, de 7:00 a 17:00** (desayunos y menú del día), y cierra sábado, domingo y lunes.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`, así que los días cerrados no generan ninguna entrada (**4 especificaciones** en total: martes, miércoles, jueves y viernes).
- La respuesta trae el aviso de que el **lunes 12, Fiesta Nacional de España**, el horario podría ser distinto. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de horario y no cambia la tabla.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cinco entradas**: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas están **disponibles**, y el **bucle magnético asistencial** aparece marcado como **no disponible**. Se recogen las cinco, incluida la que no está disponible.

### El teléfono

Es un **móvil** (648 71 97 39), no un fijo, y así se publica: `phoneHref` usa `tel:+34648719739`.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**, sin corregir su redacción ni su puntuación (incluidas la mayúscula inicial en minúscula y la falta de tilde de la tercera). Una es de 4 sobre 5 y dos de 5:

1. «Venimos de Murcia y volveremos a repetir» (5/5)
2. «El servicio regular, hablan a voces, aunque sirven rapido.» (4/5)
3. «Atención exquisita y especial mención a María.(profesional, amable, atenta).» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-ajonegro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-ajonegro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**. El manifiesto de la descarga **no atribuye ninguna a un autor con nombre** (`author` vacío), así que las fotos **no llevan pie**.
- Son formatos mezclados: una panorámica, cinco apaisadas y cuatro verticales. El collage de portada usa la panorámica 01 arriba y las verticales 05 y 06 en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- Tras optimizar, el total bajó de **3,7 MB a 1,9 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto panorámica 01 de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-ajonegro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (la ficha lo limita de martes a viernes de 7:00 a 17:00) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe ni las atribuye.
4. Comprobar el horario de festivos (la ficha ya avisa de que el lunes 12 podría ser diferente).
5. Si el dominio final no es `restaurante-ajonegro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
