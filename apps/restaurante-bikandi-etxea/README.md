# Restaurante Bikandi Etxea

Web informativa de **Restaurante Bikandi Etxea**, restaurante vasco en **Campo de Volantín Pasealekua, 4 · 48007 Bilbao (Bizkaia)**.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`, copiada de la de `restaurante-alentejo` con la paleta cambiada a verde sidrería y dorado txakoli. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, descripción del titular, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **11 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato | Valor publicado |
| ---- | --------------- |
| Nombre | Restaurante Bikandi Etxea |
| Dirección | Campo de Volantín Pasealekua, 4 · 48007 Bilbao |
| Categorías de Google | Restaurante vasco, Restaurante |
| Valoración | 4,6 sobre 5 con 850 reseñas |
| Teléfono | 690 13 50 54 (móvil) |
| Horario | Publicado (ver abajo) |
| Coordenadas | 43.264595, -2.924488 |
| Plus code | 8CMV737G+R6 |
| Identificador de canal | `/g/1tdmrcg9` |
| Feature id | `0xd4e4fc5a3abf4db:0x83ab217b02c0ee6e` |

El número de reseñas se escribe **«850 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Dirección en euskera.** Google publica la dirección como «Campo de Volantín Pasealekua, 4» («pasealekua» es «paseo»): aquí se reproduce tal cual, sin traducir la voz del titular. La provincia se publica como «Biscay»/«Bizkaia»: aquí se escribe **Bizkaia**.

**Categorías y `servesCuisine`.** La ficha publica **dos categorías**, en este orden: «Restaurante vasco» y «Restaurante». La primera nombra un tipo de cocina concreto, así que `servesCuisine` es `["Vasca"]`. El `@type` es `Restaurant`, `acceptsReservations: true` se mantiene igual, y no hay `priceRange` (la ficha no publica precios) ni `sameAs` (sin web propia ni redes).

**Teléfono.** La ficha publica un solo número, **690 13 50 54**, y por su prefijo es un **móvil**: se publica como **+34 690 13 50 54** y el enlace de llamada es `tel:+34690135054`.

**Sin distintivo.** La ficha no muestra ninguna etiqueta junto al nombre, así que no se recoge ninguna.

**Con descripción del titular.** A diferencia de otras fichas, esta sí publica la descripción del local (gastronomía vasca en un ambiente acogedor y familiar, producto de cercanía, pescados del día, cocina de temporada y bodega seleccionada). Se reproduce tal cual en `descripcionLocal` y la portada la muestra en el bloque de cita, marcada como voz del titular.

### El horario

Es el horario que publica la ficha. El local **cierra los domingos y los lunes** y abre de martes a sábado:

| Día | Horario publicado por la ficha |
| --- | ------------------------------ |
| Lunes | Cerrado |
| Martes | 9:00 – 15:30 |
| Miércoles | 9:00 – 15:30 |
| Jueves | 9:00 – 15:30 |
| Viernes | 9:00 – 15:30 · 20:00 – 22:00 |
| Sábado | 13:00 – 16:00 · 20:00 – 22:00 |
| Domingo | Cerrado |

Detalles que se trasladan tal cual a la web:

- De martes a jueves abre **solo por la mañana**; viernes y sábado abren **en dos turnos**, mañana y noche.
- `openingHoursSpecification` se construye con un `flatMap` sobre `item.shifts`: los días cerrados no generan entrada (**7 especificaciones** en total: 3 + 2 + 2).
- La respuesta trae el aviso de **horario de Fiesta Nacional de España el lunes 12**. Se recoge en el texto de la sección de horario y en la respuesta de las preguntas frecuentes.

### Accesibilidad

La ficha publica el grupo «Accesibilidad» con **cinco entradas, y las cinco figuran como no disponibles**: ni acceso, ni aparcamiento, ni aseo, ni asientos adaptados para sillas de ruedas, ni bucle magnético asistencial. Es la primera ficha del repositorio con toda la accesibilidad en negativo, y la web lo muestra tal cual, sin suavizarlo: cada entrada sale marcada como no disponible y la pregunta frecuente recomienda llamar antes de ir.

### Las reseñas

La ficha destaca **tres reseñas con texto**, las tres de 5 sobre 5, y se citan **literales**, sin corregir su redacción (la segunda escribe «comodo» sin tilde). La respuesta no trae los nombres de quienes las firman, así que se citan sin autor:

1. «Pinchos y menús de comida casera de buena calidad» (5/5)
2. «Son muy buena gente y hacen la mejor tortilla de bonito que he comodo jamás.» (5/5)
3. «Los dueños son encantadores, ya hemos estado un par de veces y repetiremos.» (5/5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-bikandi-etxea   # desde la raíz del monorepo
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**: cuatro apaisadas (01, 03, 05 y 09), cinco verticales (02, 04, 07, 08 y 10) y una casi cuadrada (vista-6-06).
- El manifiesto de la descarga **no atribuye autor** a ninguna, así que **ninguna foto lleva pie**.
- El collage de portada usa la apaisada **01** arriba y las verticales **02** y **04** en los dos huecos inferiores, con las proporciones por defecto del repositorio (16/9 y 4/5). La galería va en tres columnas.
- `public/og.jpg` (1200 × 630) es un recorte centrado de la apaisada **01** de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-bikandi-etxea
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. `astro check` no se usa: no admite TypeScript 7, el que emplea el repositorio.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Confirmar con el titular el horario** (cierre de domingo y lunes, mañanas de martes a jueves, dos turnos viernes y sábado) y ajustar `hours` si procede.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Comprobar el horario de festivos (la ficha ya avisa del lunes 12).
5. Si el dominio final no es `restaurante-bikandi-etxea.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
