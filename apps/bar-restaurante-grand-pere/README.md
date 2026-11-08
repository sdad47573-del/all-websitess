# Bar restaurante Grand Pere

Web informativa del **Bar restaurante Grand Pere**, bar restaurante de cocina mediterránea en el **Cam. Jaúl Bajo, 3, 04007 Almería** (dentro del Club Natación), con teléfono 950 08 82 23.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Nombre                  | Bar restaurante Grand Pere                                                                                         |
| Dirección               | Club Natacion, Cam. Jaúl Bajo, 3 · 04007 Almería                                                                   |
| Teléfono                | +34 950 08 82 23                                                                                                   |
| Categorías de Google    | Bar restaurante · Restaurante mediterráneo                                                                         |
| Valoración              | 4,4 sobre 5 con 796 reseñas                                                                                        |
| Horario                 | Lunes cerrado · martes a jueves 11:30 – 23:30 · viernes 11:30 – 24:00 · sábado 8:00 – 24:00 · domingo 8:00 – 20:00 |
| Coordenadas             | 36.8317033, -2.4315424                                                                                             |
| Plus code               | RHJ9+M9 Almería                                                                                                    |
| Identificador del lugar | `ChIJocTgOHCdeg0RE74cnummbBM`                                                                                      |
| Identificador de canal  | `/g/11fcv7pvh7`                                                                                                    |

El número de reseñas se escribe **«796 reseñas»** (sin separador de millar, como el resto del repositorio) y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, redes y carta.** La ficha no publica web propia —de hecho ofrece el botón «Añadir sitio web»—, ni perfiles de redes sociales, ni carta, ni precios, ni rango de precios, así que no se enlaza, no se afirma y el `Restaurant` de los datos estructurados **no lleva `priceRange`**.

**`servesCuisine`.** Sale de la segunda categoría que publica Google («Restaurante mediterráneo») y se publica como «Cocina mediterránea», que es la forma en la que ya aparece en otras web del repositorio. No se declara ninguna otra cocina.

### La dirección y el nombre del club

Google escribe la dirección como «**Club Natacion, Cam. Jaúl Bajo, 3**, 04007, **Almería**», sin acento en «Natacion»: se publica tal cual en la dirección, porque es lo que devuelve la ficha. En los textos narrativos el club se cita por su nombre correcto, **Club Natación**.

### Horario: los lunes cerrados

La consulta cubre **del martes 6 al lunes 12 de octubre de 2026**, que es la ventana de siete días que devuelve la ficha. Los seis días de entre semana y de fin de semana traen su horario tal cual aparece en la tabla de arriba, y **el lunes 12 aparece cerrado**, marcado como festivo (Fiesta Nacional de España) con el aviso de que «el horario podría ser diferente».

El lunes se publica **cerrado**, que es lo que dice la ficha para el único lunes del periodo consultado. Dos listados de terceros consultados para contrastarlo (Restaurant Guru y una guía local) también dan el local cerrado los lunes, así que no se publica un horario que nadie declara. Conviene confirmarlo con el local antes de poner la web en producción.

### Las reseñas

La ficha destaca **tres reseñas**, las tres favorables, y se citan **literales**:

1. «Estupendo y variado tapeo, buen pescado del día y excelentes los torreznos» (4 sobre 5)
2. «Muy buen sitio para tapear , riquísima cerveza , muy buen ambiente» (5 sobre 5)
3. «Buen lugar para tomar unas tapias, buen servicio buena comida y buena cerveza» (4 sobre 5)

La segunda conserva los **espacios antes de las comas** tal y como los escribió quien la redactó: se prefiere la cita exacta a corregir un texto que no es nuestro.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs bar-restaurante-grand-pere   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 bar-restaurante-grand-pere
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías**, todas con **el propio local como autora** en el manifiesto de la descarga.
- **Ninguna lleva pie ni descripción** publicada por Google, así que se publican sin pie: todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- `public/og.jpg` (1200×630) es un recorte centrado de la única foto apaisada de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs bar-restaurante-grand-pere
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. La auditoría de accesibilidad de la portada y de `/aviso-legal` (axe-core, WCAG 2.0 A y AA) cierra con **0 infracciones**.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el local el horario de los lunes que no son festivo.
4. Si el dominio final no es `bar-restaurante-grand-pere.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
