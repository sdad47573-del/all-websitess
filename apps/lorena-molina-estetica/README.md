# Lorena Molina Estética Avanzada

Web de **Lorena Molina Estética Avanzada y Micropigmentación**, centro de estética en la
Avenida de Carlos Haya, 204, Local 1 (Bailén-Miraflores, 29010 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `lorena` definido en `src/styles/index.css`).
- Datos del negocio, tratamientos, reseñas y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `src/assets/fotos/`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa la cabina de tratamientos como fondo del hero, el resultado de un tratamiento
 facial como imagen destacada y la vista de la Avenida de Carlos Haya en `GALLERY`. Las imágenes
 se sirven con `srcset`/`sizes` para no enviar más píxeles de los necesarios.

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo
bun run build # build estático
bun run check # astro check
bun run typecheck
```

## Páginas

| Ruta | Contenido |
| -------------- | ----------------------------------------------------------------------------------------- |
| `/` | Portada: presentación, el centro, tratamientos y ventajas, opiniones, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «micropigmentación y
 estética avanzada en Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large`
 y `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1086×1448 con `width`/`height`/`alt`, teléfono, dirección,
 código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
 - `BeautySalon` (en todas las páginas): dirección, geo, horario, `sameAs` con Instagram y
 Facebook, `areaServed`, `amenityFeature` y **`aggregateRating`** (4,3 con 118 reseñas).
 - `BreadcrumbList` en la portada y en `/aviso-legal`.
 - `FAQPage` en la portada, generado a partir de las mismas preguntas que se muestran.
- **SEO local**: `geo.region`, `geo.placename`, `geo.position` e `ICBM` con las coordenadas.
- **Imágenes**: nombres de archivo descriptivos, `alt` con localidad y `srcset`/`sizes` para el LCP.

### Comprobar el SEO en el build

```bash
bun run build
grep -o 'application/ld+json' dist/index.html | wc -l # bloques de datos estructurados
grep -o 'srcset' dist/index.html | wc -l # versiones responsive de las fotos
cat dist/sitemap-0.xml # URLs indexables
```

## Contenido y fuentes

La información procede de la **ficha pública del local en Google Maps** (CID
`635415562846833163`, Plus Code `PGGR+5W Málaga`) y de sus perfiles públicos de **Instagram**
([@lorena_molinaesteticavanzada](https://www.instagram.com/lorena_molinaesteticavanzada/)) y
**Facebook** ([Lorena Molina Estética Avanzada](https://www.facebook.com/p/Lorena-Molina-Est%C3%A9tica-Avanzada-61555647510836/)),
que publican el mismo teléfono, la misma dirección y que la atención es **con cita previa**.

- Dirección: **Avenida de Carlos Haya, 204, Local 1, Bailén-Miraflores, 29010 Málaga**.
- Teléfono: **642 02 13 59** (también WhatsApp).
- Valoración en Google: **4,3 con 118 reseñas**. Las citas que se muestran son reseñas reales de
 la ficha (traducidas y resumidas); los temas recurrentes se presentan como resumen, no como
 citas.
- Tratamientos publicados: micropigmentación de cejas, labios y ojos, microblading, HIFU 22D
 facial y corporal, exosomas, aumento e hidratación de labios, eliminación de párpados caídos
 sin cirugía, tratamiento de manchas, remodelación corporal y formación.
- Horario según Google: **«abierto 24 horas» de lunes a viernes y cerrado el fin de semana**.
 Lo habitual es que esa etiqueta aparezca cuando se trabaja con cita previa; en la web se
 explica así y se invita a confirmar por WhatsApp.
- **56 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
 han podido recuperar **2 fotos** (1086×1448 y 1280×1600) más una vista de Street View de la
 Avenida de Carlos Haya (1024×576).

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
> (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. Revisa el **horario**. La ficha de Google marca «abierto 24 horas» de lunes a viernes, que
> no es un horario real de atención: confírmalo con el centro y ajusta el array `hours` y
> `openingHoursSpecification` (que ahora refleja ese «24 h» porque es lo que publica Google).
> 3. Revisa las imágenes y su texto alternativo. Los `alt` describen la cabina, un tratamiento
> facial y la avenida; ajústalos si el contenido real es otro. Puedes sumar fotos copiándolas a
> `src/assets/fotos/` y añadiéndolas a `GALLERY`/`IMAGES`.
> 4. La web no publica precios porque el centro no difunde una tarifa propia; mantén esa decisión
> o actualízala si empiezan a publicarla.
> 5. Comprueba que el número de WhatsApp de `BUSINESS.whatsapp` es el correcto antes de publicar.
> 6. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
> (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
> dominio cambia, hay que actualizar los tres.
