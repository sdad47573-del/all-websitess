# Mariló Díaz Salón de Estética

Web de **Mariló Díaz Salón de Estética**, centro de estética en la calle Magistrado Salvador
Barbera, Bloque 3, Local 8 (Bailén-Miraflores, 29010 Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `marilo` definido en `src/styles/index.css`, con
 verde salvia, terracota y crema).
- Datos del negocio, servicios, reseñas y fotos en `src/data/site.ts`.
- Fotos obtenidas de Google Maps en `src/assets/fotos/`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La portada usa la fachada como fondo del hero y la manicura como imagen destacada;
 `Galeria.astro` muestra las tres fotos de la ficha. Las imágenes se sirven con `srcset`/`sizes`
 para no enviar más píxeles de los necesarios.

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
| -------------- | ---------------------------------------------------------------------------------------------- |
| `/` | Portada: presentación, el salón, servicios y ventajas, opiniones, galería, contacto/mapa y FAQ |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies |

## SEO

- **Metadatos**: `title` y `description` propios (con intención local: «salón de estética en
 Bailén-Miraflores, Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large`
 y `max-snippet:-1`.
- **Open Graph y Twitter**: imagen 1200×1600 con `width`/`height`/`alt`, teléfono, dirección,
 código postal y coordenadas.
- **Datos estructurados** (JSON-LD):
 - `BeautySalon` (en todas las páginas): dirección, geo, horario completo con las dos franjas
 de lunes a jueves, `areaServed`, `amenityFeature` y **`aggregateRating`** (5,0 con 65
 reseñas, que sí publica la ficha).
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
`8079665554829750715`, Plus Code `PHF4+9J Málaga`).

- Dirección: **Magistrado Salvador Barbera, Bloque 3, Local 8, Bailén-Miraflores, 29010
 Málaga**. Google indica además que el acceso es por la **calle Francisco Vigil Escalera, 1**,
 y así aparece en la web para que se llegue sin perder tiempo.
- Teléfono: **952 30 15 36**. El salón **no tiene web propia ni redes sociales publicadas**
 (Google ofrece la opción de «añadir sitio web»), así que el teléfono es el único contacto.
- Valoración en Google: **5,0 con 65 reseñas**. Las tres citas que se muestran son reseñas reales
 de la ficha (traducidas y resumidas); los temas recurrentes se presentan como resumen, no como
 citas. Entre ellas hay una clienta que cuenta llevar **más de veinte años** en el salón.
- Horario: **lunes a jueves de 9:30 a 13:30 y de 16:00 a 20:00** (dos franjas), **viernes de
 9:30 a 17:30**, **sábado de 10:00 a 14:00** y **domingo cerrado**. Google lo marca con
 asterisco, lo que suele indicar horario especial.
- **51 fotos** en la ficha de Google. La galería completa se carga por JavaScript, así que solo se
 han podido recuperar **2 fotos** (1200×1600 y 1067×1600) más una vista de Street View de la
 calle (1024×576).

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL`
> (`src/data/site.ts`). Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo.
> 2. **La lista de servicios es genérica a propósito.** Como la ficha no publica el catálogo,
> `SERVICIOS` describe las áreas del salón y la sección avisa de que hay que confirmar por
> teléfono. Si el negocio te pasa su carta real, sustituye ese array.
> 3. Revisa el **horario**, sobre todo la franja de la tarde de lunes a jueves, y confírmalo con
> el salón. Si cambia, ajusta el array `hours` **y** el `openingHoursSpecification` del schema.
> 4. Revisa las imágenes y su texto alternativo. Los `alt` describen la fachada, una manicura y la
> calle; ajústalos si el contenido real es otro. Puedes sumar fotos copiándolas a
> `src/assets/fotos/` y añadiéndolas a `GALLERY`/`IMAGES`.
> 5. La web no publica precios porque el salón no difunde una tarifa; mantén esa decisión o
> actualízala si empiezan a publicarla.
> 6. Si el salón tiene redes sociales, añádelas a `BUSINESS` y a `sameAs` en `SCHEMA`, que ahora
> no lleva ninguno por ese motivo.
> 7. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
> (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site` y `public/robots.txt`; si el
> dominio cambia, hay que actualizar los tres.
