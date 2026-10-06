# Restaurante Mac Gowen Brothers

Web informativa del **Restaurante Mac Gowen Brothers**, restaurante especializado en tapas en la **Plaza Batel, 6, 04711 Almerimar (Almería)**, con teléfono 950 56 33 03.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **6 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                                                   |
| ----------------------- | --------------------------------------------------------------------------------- |
| Nombre                  | Restaurante Mac Gowen Brothers                                                    |
| Dirección               | Plaza Batel, 6 · 04711 Almerimar (Almería)                                        |
| Teléfono                | +34 950 56 33 03                                                                  |
| Categoría de Google     | Restaurante especializado en tapas                                                |
| Valoración              | 4,6 sobre 5 con 18 reseñas                                                        |
| Horario                 | 12:00 – 16:30 y 18:00 – 23:00 de lunes a viernes · 12:00 – 23:00 sábado y domingo |
| Coordenadas             | 36.697515, -2.788107                                                              |
| Plus code               | M6X6+2Q Almerimar                                                                 |
| Identificador del lugar | `ChIJ4eo7J4VdcA0R7i4oQbeK0FU`                                                     |
| Identificador de canal  | `/g/11b6dh6lpg`                                                                   |

El número de reseñas se escribe **«18 reseñas»** y la valoración con coma decimal («4,6»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**Web, redes y carta.** La ficha no publica web propia —ofrece el botón «Añadir sitio web»—, ni perfiles de redes sociales, ni carta, ni precios, ni rango de precios, así que no se enlaza, no se afirma y el `Restaurant` de los datos estructurados **no lleva `priceRange`**. Tampoco ofrece reserva en línea.

**`servesCuisine`.** Sale de la única categoría que publica Google («Restaurante especializado en tapas») y se publica como **«Tapas»**, que es la forma en la que ya aparece en otra web del repositorio. No se declara ninguna otra cocina.

### La dirección

Google escribe la dirección como «**Plaza Batel, 6**, 04711, **Almerimar**, **Almería**»: se publica tal cual, con el código postal 04711 de Almerimar y sin añadir el municipio al que pertenece la urbanización, que la ficha no declara.

### Horario: sin ningún día de cierre

La consulta cubre **del martes 6 al lunes 12 de octubre de 2026**, que es la ventana de siete días que devuelve la ficha, y **los siete días traen su horario marcado como habitual** (`flag` 1 en la respuesta, es decir, horario normal y no especial):

| Días             | Horario publicado             |
| ---------------- | ----------------------------- |
| Lunes a viernes  | 12:00 – 16:30 y 18:00 – 23:00 |
| Sábado y domingo | 12:00 – 23:00                 |

El lunes 12 de octubre, Fiesta Nacional de España, mantiene los dos turnos con el aviso de que «el horario podría ser diferente». Es la primera ficha de esta serie que **no marca ningún día de cierre** en su ventana de consulta.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**:

1. «Buena comida con mucha variedad de platos internacionales» (5 sobre 5)
2. «Sirven tapas variadas a mediodia, aunque creo que no por la noche.» (4 sobre 5)
3. «Buen sitio para comer o picar algo.» (5 sobre 5)

La segunda conserva su **«mediodia» sin tilde** y su matiz sobre la cena tal y como los escribió quien la redactó: se prefiere la cita exacta a corregir un texto que no es nuestro.

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs restaurante-mac-gowen-brothers   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1500 restaurante-mac-gowen-brothers
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto quedó **sin autora** (`autor=sin autor`): no se atribuyen a nadie ni se pone pie.
- Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada que abre la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs restaurante-mac-gowen-brothers
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar. La auditoría de accesibilidad de la portada y de `/aviso-legal` (axe-core, WCAG 2.0 A y AA) cierra con **0 infracciones**.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y escribir su `alt`: ninguna trae pie de Google.
3. Confirmar con el restaurante si los turnos de la ficha coinciden con los de temporada y si el fin de semana sigue siendo servicio continuado.
4. Si el dominio final no es `restaurante-mac-gowen-brothers.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
