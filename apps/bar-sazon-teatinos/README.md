# Sazón Teatinos

Web de **Sazón Teatinos**, taberna de tapas, raciones y parrilla en Teatinos-Universidad (Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `sazon` definido en `src/styles/index.css`).
- Datos del negocio, selección de la carta, servicios y fotos en `src/data/site.ts`.
- Carta completa (15 secciones y 69 platos, con precios reales) en `src/data/carta.ts`, generada a partir del menú digital público del establecimiento (NordQR).
- Fotos reales del local en `packages/@assets/SAZON/`, consumidas vía el alias `@assets`. Los nombres de archivo son descriptivos (`sazon-teatinos-barra-tapas-malaga.jpg`…) porque Google Imágenes los indexa.
  `logo-sazon.jpg` es el logotipo (texto blanco sobre fondo negro) y **no** se usa como fotografía de galería.
- La portada (`/`) usa la foto de la barra como fondo del hero, otras dos en «La taberna» y las cuatro en la galería. Las fotos se sirven con `srcset`/`sizes` (640–1500 px) para no enviar más píxeles de los necesarios.
- La galería abre un **lightbox** (`<dialog>` nativo, sin dependencias): teclas `←`/`→` y `Esc`, botones de anterior/siguiente, cierre al pulsar fuera y bloqueo del scroll de fondo. Las versiones grandes (1600 px) se generan en el build con `getImage()`. Sin JavaScript, cada foto enlaza a su versión a tamaño completo.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `/`            | Portada: presentación, cocina casera, especialidades, galería (con lightbox), reseñas, contacto y preguntas frecuentes |
| `/carta`       | Carta completa por secciones, con precios y tramos (tapa, media y ración)                                              |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                                                         |

## SEO

- **Metadatos**: `title` y `description` propios por página (con intención local: «tapas en Teatinos,
  Málaga»), `keywords`, `canonical`, `robots` con `max-image-preview:large` y `max-snippet:-1`.
- **Open Graph y Twitter**: tipo `restaurant.restaurant`, imagen 1500×844 con `width`/`height`/`alt`,
  teléfono, dirección, código postal y coordenadas (útiles para las tarjetas de Facebook y WhatsApp).
- **Datos estructurados** (JSON-LD, un bloque por entidad):
  - `Restaurant` (en todas las páginas): dirección, geo, horario, valoración, `sameAs`, `hasMenu`,
    `currenciesAccepted`, `areaServed` y `amenityFeature` con los servicios reales del local.
  - `Menu` y `BreadcrumbList` en `/carta` (secciones y precios que se ven en pantalla).
  - `BreadcrumbList` en `/aviso-legal`.
  - `FAQPage` en la portada, generado a partir de las mismas preguntas que se muestran.
- **Imágenes**: nombres de archivo descriptivos, `alt` con localidad y `srcset`/`sizes` para el LCP.
- Para modificar el SEO global (título por defecto, descripción, palabras clave, Open Graph) está
  todo en `src/layouts/Layout.astro`; los datos del negocio se leen de `src/data/site.ts`.

### Comprobar el SEO en el build

```bash
bun run build
grep -o 'application/ld+json' dist/carta/index.html | wc -l   # bloques de datos estructurados
grep -o 'srcset' dist/index.html | wc -l                      # versiones responsive de las fotos
cat dist/sitemap-0.xml                                        # URLs indexables
```

## Contenido

La información (dirección, teléfono, horarios, valoración, servicios y carta) se ha recopilado
de la ficha pública del local y de su menú digital. Conviene confirmar horarios y precios con
el establecimiento antes de publicar, ya que pueden cambiar según temporada.

**Carta:** contrastada plato a plato con el `data.json` del menú digital oficial
(`https://go.nordqr.com/ghb85b/data.json`). La web publica las secciones visibles del menú
(`GILDAS` y `FUERA DE CARTA`) más el menú de texto más reciente (`Carta digital`, 13 secciones);
en total 15 secciones y 69 platos, con los precios y los tramos exactos del local (Tapa, Media,
Ración, Media/Entera, 200/400 gr). Los platos del borrador antiguo (`Nuevo menú prueba`) que no
aparecen en el menú actual no se publican. En el QR, la carta y las bebidas se muestran sobre
todo como fotos: si el local cambia un precio, hay que actualizar `src/data/carta.ts` a mano
(no hay campos inventados: los alérgenos y etiquetas por plato no se publican porque el menú
no los indica).

**Menú del día:** comprobado el menú digital oficial del local (NordQR, el que enlaza la ficha
de Google) y sus redes, **Sazón no publica un menú del día**: la carta digital solo tiene la
carta general (gildas, tapas y raciones, brasa, postres…), sin menú de mediodía, sin precio y
sin días de servicio. Por eso no hay ninguna sección de «menú del día»: en su lugar, la portada
muestra el bloque «Cocina casera» (`COCINA_CASERA` en `src/data/site.ts`), limitado a lo
verificable. Si el establecimiento confirma un menú del día, hay que añadir sus datos (días,
precio, platos) a `src/data/site.ts` y ampliar `src/components/CocinaCasera.astro`.

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL` de
>    `src/data/site.ts`. Mientras falte alguno, `/aviso-legal` muestra un aviso amarillo y los
>    campos salen como «[pendiente de completar]»; al rellenarlos, el aviso desaparece solo y el
>    correo se convierte en un enlace `mailto:`.
> 2. Confirma los precios de la carta y el horario: los precios salen del menú digital público y el
>    horario (12:30–00:00) de la ficha de Google.
> 3. Despliega y comprueba el dominio final. La URL canónica está en `BUSINESS.siteUrl`
>    (`src/data/site.ts`) y repetida en `astro.config.mjs` → `site`, `public/robots.txt` y
>    `public/og.jpg`; si el dominio cambia, hay que actualizar los cuatro. Después, revisa en
>    Search Console que las URLs del sitemap (`/carta/`, con barra final) y los `canonical` (sin
>    barra) resuelven sin redirección; si el hosting redirige, unifica ambos formatos.
