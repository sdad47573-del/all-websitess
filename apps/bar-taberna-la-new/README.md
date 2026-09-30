# Taberna La New

Web de **Taberna La New**, taberna de cocina casera malagueña en Teatinos-Universidad (Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `lanew` definido en `src/styles/index.css`).
- Datos del negocio, textos, servicios y fotos en `src/data/site.ts`.
- Fotos reales del local en `packages/@assets/TABERNA-LA-NEW/` (las publica el negocio en su web de reservas), consumidas vía el alias `@assets`. Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
- La galería abre un **lightbox** (`<dialog>` nativo, sin dependencias): teclas `←`/`→` y `Esc`, botones de anterior/siguiente, cierre al pulsar fuera y bloqueo del scroll de fondo. Sin JavaScript, cada foto enlaza a su versión grande.
- SEO local: metadatos, Open Graph, Twitter Card y JSON-LD `Restaurant` (dirección, geo, dos servicios de horario, servicios) más `FAQPage` en la portada y `BreadcrumbList` en las páginas internas.

## Scripts

```bash
bun install
bun run dev      # servidor de desarrollo (http://localhost:4321)
bun run build    # build estático
bun run check    # astro check
bun run typecheck
```

## Páginas

| Ruta           | Contenido                                                                                           |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `/`            | Portada: hero, esencia, pilares, galería (con lightbox), opiniones, contacto y preguntas frecuentes |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies                                                      |

## De dónde salen los datos

Todo es información pública del propio local, sin inventar nada:

| Dato                                                                          | Fuente                                                                 |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Nombre, lema, textos de «Nuestra esencia»                                     | Web de reservas: `restaurante.covermanager.com/taberna-la-new-malaga/` |
| Dirección (Av. de Gregorio Prieto 19, local 2)                                | Web de reservas y ficha de Google Maps                                 |
| Teléfonos (951 43 20 89 · 611 67 21 97 · 624 04 50 09)                        | Web de reservas e Instagram                                            |
| Horario (12:00–16:00 y 20:00–00:00, todos los días)                           | Web de reservas                                                        |
| Instagram (@tabernalanew), fotos, ambiente                                    | Instagram y web de reservas                                            |
| Reseñas de «Nuestras Sugerencias»                                             | Web de reservas (con autor)                                            |
| Mención de prensa                                                             | Diario Sur, 24/10/2025                                                 |
| Mesas al aire libre, para llevar, accesibilidad, tarjetas, aire acondicionado | Ficha del local en Tripadvisor                                         |

**No se publica** (no hay fuente verificable): valoración en Google, número de reseñas, carta con precios ni menú del día. Cuando el local lo facilite, se añade.

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL` de
>    `src/data/site.ts`. Mientras falte alguno, `/aviso-legal` muestra un aviso y los campos salen
>    como «[pendiente de completar]»; al rellenarlos, el aviso desaparece solo y el correo se
>    convierte en un enlace `mailto:`.
> 2. Confirma el dominio. Ahora mismo la URL canónica es `https://taberna-lanew.vercel.app`
>    (un nombre provisional): está en `BUSINESS.siteUrl` (`src/data/site.ts`), en
>    `astro.config.mjs` → `site` y en `public/robots.txt`. Si el dominio final es otro, cambia los
>    tres sitios y vuelve a hacer `bun run build`.
> 3. Fotos de mayor resolución. Las del local son de 540 px de ancho (las que usa su web de
>    reservas), por eso el hero está en columna y no a pantalla completa y el lightbox no reescala
>    la imagen. Con fotos de 1500–2000 px se puede subir a un hero a sangre y agrandar el lightbox.
> 4. Textos alternativos de las fotos: son genéricos a propósito (`GALLERY` en
>    `src/data/site.ts`). Con descripciones reales de cada plato o ambiente, el SEO local mejora.
