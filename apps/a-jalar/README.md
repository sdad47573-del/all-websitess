# A JALAR

Web de **A JALAR**, kebab artesanal en la Av. de Lope de Vega 23 (Teatinos-Universidad, Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `ajalar` definido en `src/styles/index.css`).
- Todos los datos del negocio, textos, carta y fotos viven en `src/data/site.ts`.
- Fotos reales del local en `packages/@assets/A-JALAR/`, consumidas vía el alias `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa como URL.
- La galería abre un **lightbox** (`<dialog>` nativo, sin dependencias): teclas `←`/`→` y `Esc`, botones de anterior/siguiente, cierre al pulsar fuera y bloqueo del scroll de fondo. Sin JavaScript, cada foto enlaza a su versión grande.
- SEO local: metadatos por página, Open Graph `restaurant.restaurant`, Twitter Card y JSON-LD `Restaurant` (dirección, geo, valoración, horarios, tipo de servicio) en todo el sitio, más `Menu` en `/carta`, `FAQPage` en portada y carta, `ContactPage` en `/contacto` y `BreadcrumbList` en las páginas internas.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo (http://localhost:4321)
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| `/`            | Portada: hero, banda de pilares, «cómo lo hacemos», resumen de carta, galería, opiniones, contacto y FAQ |
| `/carta`       | Carta completa por secciones, con precios, fotos y CTA de reparto                                        |
| `/contacto`    | Hero de contacto, dirección, teléfono, horario, redes y mapa de Google                                   |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                                           |

## De dónde salen los datos

Todo es información pública del propio local, sin inventar nada:

| Dato                                                                                 | Fuente                                                           |
| ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| Nombre, dirección (Av. de Lope de Vega 23), coords (36.7308448, -4.4690332)          | Ficha de Google Business Profile                                 |
| Teléfono 951 66 03 29                                                                | Google Business Profile, Facebook e Yandex Maps                  |
| Valoración 4,1 / 5 con 238 reseñas                                                   | Google Business Profile                                          |
| Horario: mar–jue y dom 19:00–24:00, vie–sáb 19:00–01:00, lunes cerrado               | Ficha de Google + publications del local en Instagram y TikTok   |
| Carta con precios (rollos, media lunas, camperos, bandejas, baguettes, complementos) | Ficha de reparto del local en Uber Eats                          |
| Reparto a domicilio con Glovo, precio 10–15 €/persona                                | Publicaciones del propio local en Instagram, Facebook y TikTok   |
| Fotos de producto de la carta                                                        | Imágenes que el local sube a su ficha de Uber Eats               |
| Fotos de fachada y de las redes (`*-facebook-*.jpg`, `a-jalar-portada.jpg`)          | Página de Facebook del local y cabecera de su ficha de Uber Eats |
| Rango de precio, tipo de cocina, «Natural Food / Donde comer bien es natural»        | Perfil público del local en Instagram y Facebook                 |

**No se publica** (no hay fuente verificable): CIF, razón social, correo de contacto, reseñas literales de Google y horario del lunes (no aparece como día de apertura, por eso se indica «cerrado»).

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL` de `src/data/site.ts`. Mientras falte alguno, `/aviso-legal` muestra un aviso y los campos salen como «[pendiente de completar]»; al rellenarlos, el aviso desaparece solo y el correo pasa a ser un enlace `mailto:`.
> 2. Confirma el dominio. Ahora mismo la URL canónica es `https://a-jalar.vercel.app` (un nombre provisional): está en `BUSINESS.siteUrl` (`src/data/site.ts`), en `astro.config.mjs` → `site` y en `public/robots.txt`. Si el dominio final es otro, cambia los tres sitios y vuelve a hacer `bun run build`.
> 3. **Textos alternativos de las fotos.** Son descriptivos pero genéricos a propósito (`LOCAL_GALLERY` y `PLATO_IMAGES` en `src/data/site.ts`). Las tres fotos de Facebook son muy oscuras y no se ha podido verificar qué depictan exactamente: revísalas y descríbelas con precisión. El SEO local mejora mucho con `alt` exactos («Rollo de ternera recién salido de la plancha») y con descripciones próprias en los campos `description` de `MENU_SECTIONS`.
> 4. **Precios.** Son los que el local publica en su canal de reparto y pueden no coincidir con los de sala. Hay una nota al pie de la carta y un aviso en `/aviso-legal`; si consigues la carta de sala, actualiza `MENU_SECTIONS` y la web se actualiza sola. La hamburguesa de ternera aparece como «a consultar» porque el canal no publica su precio.
> 5. **Resolución de las fotos.** Las de producto son de 550 px (las que sube el local a Uber Eats) y las de Facebook, de 1170–1600 px. Si consigues originales de mayor calidad desde `@ajalarnaturalfood`, sustituye los archivos en `packages/@assets/A-JALAR/` manteniendo los nombres y no hay que tocar nada más.
> 6. **Derechos de imagen.** Estas fotos son del propio local y se usan para su web, pero conviene que confirméis por escrito el uso de su imagen de marca y de sus fotos en redes, y que el aviso legal nombre también al diseñador web.
