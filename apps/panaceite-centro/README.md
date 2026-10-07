# Panaceite Centro

Web informativa de **Panaceite Centro**, taberna y restaurante de cocina española en la **C. Bernabé Soriano, 1 · 23001 Jaén**, con teléfono 953 24 06 30.

- Astro 7 (`@astro-config`) y una hoja de estilos propia en `src/styles/global.css`. Sin Tailwind ni dependencias de UI.
- Tipografías **Fraunces** (títulos) y **DM Sans** (texto), ambas ya usadas en el repositorio.
- Los datos del negocio están en `src/data/site.ts`: ficha, horario, accesibilidad, reseñas, preguntas frecuentes y datos estructurados.
- Dos páginas: `/` (portada) y `/aviso-legal`.

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **7 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                            |
| ----------------------- | ------------------------------------------ |
| Nombre                  | Panaceite Centro                           |
| Dirección               | C. Bernabé Soriano, 1 · 23001 Jaén         |
| Teléfono                | +34 953 24 06 30                           |
| Categorías de Google    | Taberna · Restaurante de cocina española   |
| Valoración              | 4,4 sobre 5 con 5.589 reseñas              |
| Horario                 | Todos los días: 6:00 – 2:00 (8:00 – 2:00 el sábado y el domingo) |
| Coordenadas             | 37.7662513, -3.7887956                     |
| Plus code               | Q686+GF Jaén                               |
| Identificador del lugar | `ChIJrftwe3TXbQ0RrppHfQfUaFo`              |
| Identificador de canal  | `/g/1q6cfdwl9`                             |

El número de reseñas se escribe **«5.589 reseñas»** y la valoración con coma decimal («4,4»): ambos salen de `toLocaleString('es-ES')` en el código, sin escribirlos a mano.

**`@type` y `servesCuisine`.** La ficha clasifica el local como **«Taberna»** y **«Restaurante de cocina española»**. En los datos estructurados se publica con `@type: Restaurant` (el tipo que usan el resto de webs del repositorio) y `servesCuisine: ['Española']`. No se declara ninguna otra cocina.

**Carta y precios.** La ficha no publica carta ni precios, así que no se reproduce ninguno y el `Restaurant` **no lleva `priceRange`**. Sí están publicados la web oficial del grupo y sus perfiles sociales, que se enlazan tal cual y se declaran en `sameAs`.

### El horario (y su discrepancia con la web oficial)

La consulta cubre **del miércoles 7 al martes 13 de octubre de 2026** y publica un tramo que cruza la medianoche todos los días:

| Días                  | Horario publicado |
| --------------------- | ----------------- |
| Lunes a viernes       | 6:00 – 2:00       |
| Sábado y domingo      | 8:00 – 2:00       |

El cierre de las 2:00 es de la **madrugada siguiente** (en los datos estructurados se escribe como `closes: '02:00'`, que es la forma estándar de expresar un horario nocturno). El lunes 12, Fiesta Nacional de España, mantiene su horario con el aviso de que «el horario podría ser diferente».

**Discrepancia documentada:** la web oficial del grupo (`panaceite.com`) publica otro rango, **07:00 a 01:00 con cocina ininterrumpida desde las 10:00**. La web mantiene el horario de la ficha como fuente principal, lo compara con el de la web oficial y recomienda confirmar por teléfono. Es un caso claro de dato que conviene revisar con el titular antes de publicar.

### Accesibilidad

La ficha solo publica el grupo «Accesibilidad»: **acceso, aseo y asientos adaptados** para sillas de ruedas están disponibles, y el **aparcamiento adaptado**, no.

### Las reseñas

La ficha destaca **tres reseñas** y se citan **literales**:

1. «Buen sitio para comer y tapear, cerveza fresquita y muy buena atención.» (5 sobre 5)
2. «Chupitos de caldito como el de la abuela, las medias raciones son generosas.» (5 sobre 5)
3. «Pedimos jamón de reserva con pan de pueblo, queso frito y lingote de cochinillo.» (5 sobre 5)

## Fotografías

Las fotos de la ficha se descargan con:

```bash
node scripts/fetch-maps-photos.mjs panaceite-centro   # desde la raíz del monorepo
node scripts/optimize-source-images.mjs --max=1600 panaceite-centro
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`).

- La galería trae **diez fotografías** y el manifiesto quedó **sin autora** (`author` vacío): no se atribuyen a nadie ni se pone pie.
- Todos los `alt` avisan solo de dónde salen las fotos y no hay `figcaption`.
- `public/og.jpg` (1200×630) es un recorte centrado de la foto apaisada de la galería.

## Comprobaciones

```bash
bun run build      # genera dist/
bun run typecheck  # tsc --noEmit
node ../../scripts/check-site-content.mjs panaceite-centro
```

`check-site-content` sale con **0 errores**; el único aviso esperado es `legal-pending`, porque los datos del titular siguen sin rellenar.

## Pendiente antes de publicar

1. Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF/CIF y correo). Mientras falten, `/aviso-legal` enseña el aviso amarillo y la comprobación avisa.
2. **Aclarar el horario** con el titular: la ficha dice 6:00 – 2:00 y la web oficial, 7:00 – 1:00. Actualizar el que confirme.
3. Revisar las diez fotos publicadas (contenido y si sale alguna persona identificable) y concretar su `alt`: la ficha no las describe.
4. Si el dominio final no es `panaceite-centro.vercel.app`, actualizarlo en `src/data/site.ts` (`siteUrl`), `astro.config.mjs`, `public/robots.txt` y el `canonical`/Open Graph de las dos páginas: `check-site-content` compara los tres primeros y falla si no coinciden.
