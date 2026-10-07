# Restaurante Luisa de Castro

Web informativa del **Restaurante Luisa de Castro**, restaurante en la **C. Rey Alhamar, 7 · 23007 Jaén**, con teléfono 684 07 57 96.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Restaurante Luisa de Castro                |
| Dirección               | C. Rey Alhamar, 7 · 23007 Jaén             |
| Teléfono                | +34 684 07 57 96                           |
| Categoría de Google     | Restaurante                                |
| Valoración              | 4,7 sobre 5 con 41 reseñas                 |
| Horario                 | Miércoles a lunes: 13:00 – 18:00 (viernes y sábado también 20:30 – 1:00); martes cerrado |
| Coordenadas             | 37.7720612, -3.7910824                     |
| Plus code               | Q6C5+RH Jaén                               |
| Identificador del lugar | `ChIJz394fNfXbQ0RMKQLTNXHDfw`              |
| Identificador de canal  | `/g/11v0xbvc3j`                            |

El número de reseñas se escribe **«41 reseñas»** y la valoración con coma decimal («4,7»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Sobre la primera consulta.** La respuesta de Google es intermitente: la primera descarga llegó con la ficha a medias (sin contador de reseñas, sin reseñas destacadas y con un solo día de horario). Se reintentó y la respuesta completa trajo los 41 reseñas, la semana entera y las tres reseñas destacadas. La web usa la respuesta completa.

**`@type`, `servesCuisine` y `acceptsReservations`.** La ficha clasifica el local solo como **«Restaurante»**, sin tipo de cocina ni servicios declarados, así que los datos estructurados usan `@type: Restaurant` (el tipo del resto de webs del repositorio) y **omiten** `servesCuisine`, `priceRange` y `acceptsReservations`. Este último se omite a propósito: el propio local escribe en su ficha que «no se hacen reservas Online», así que declarar que sí las acepta contradiría el dato de origen. Tampoco hay `sameAs`: la ficha no publica web propia ni perfiles sociales.

### La descripción del propio local

La ficha incluye un texto que escribe el negocio, que se reproduce literal en `descripcionLocal` y se cita en la portada:

> «No se hacen reservas Online. Espacio tranquilo dónde disfrutar de la gastronomía de Jaén. Siempre intentando ofrecer un ambiente relajado y respetuoso para nuestros comensales.»

### El horario

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026**:

| Días                     | Horario publicado            |
| ------------------------ | ---------------------------- |
| Miércoles, jueves, domingo y lunes | 13:00 – 18:00       |
| Viernes y sábado         | 13:00 – 18:00 · 20:30 – 1:00 |
| Martes                   | Cerrado                      |

El lunes 12, Fiesta Nacional de España, aparece con «Horario de Fiesta Nacional de España» pero con el mismo tramo (13:00 – 18:00). La cena del viernes y el sábado termina a la 1:00 de la madrugada siguiente (en los datos estructurados se escribe como `closes: '01:00'`).

### Accesibilidad

La ficha publica el grupo «Accesibilidad»: el **acceso y los asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado**, no.

### Las reseñas

La ficha destaca **tres reseñas** (todas de 5 sobre 5) y se citan **literales**, sin corregir su redacción ni su puntuación:

1. «Alcachofas confitadas con jamón y huevo las mejores que hemos probado!»
2. «Buen servicio y buen ambiente buena comida»
3. «Es carete pero ponen calidad y tienen buena cocina.»

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-luisa-de-castro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 restaurante-luisa-de-castro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto quedó **sin autor** (`author` vacío): no se atribuyen a nadie ni se pone pie.
- Las diez son apaisadas o panorámicas, así que el collage de portada recorta el hueco inferior a **4/3** en vez del 4/5 que usan las demás webs del repositorio.
- Tras optimizar, el total bajó de **2,5 MB a 1,8 MB**; los `bytes` del manifiesto se actualizaron a mano con el tamaño real (el optimizador no los reescribe).
- `public/og.jpg` (1200×630) es un recorte centrado de la foto panorámica de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-luisa-de-castro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Confirmar el horario con el titular (turnos, cierre de la cena y el cierre del martes) antes de darlo por definitivo.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `restaurante-luisa-de-castro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
