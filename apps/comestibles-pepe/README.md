# Comestibles Pepe

Web de **Comestibles Pepe**, charcutería y tienda de alimentación en la Plaza Pío XII 5 (Cruz de Humilladero, Málaga).

- Astro 5 + Tailwind CSS 4 + daisyUI (tema `pepe` definido en `src/styles/index.css`).
- Todos los datos del negocio y los textos viven en `src/data/site.ts`.
- La fotografía del local está en `src/assets/fotos/`. - SEO local: metadatos por página, Open Graph, Twitter Card, etiquetas de geolocalización y JSON-LD `GroceryStore` (dirección, geo, tres tramos de horario, tipo de servicio) en todo el sitio, más `FAQPage` en la portada, `ContactPage` en `/contacto` y `BreadcrumbList` en las páginas internas.

## Scripts

```bash
bun install
bun run dev # servidor de desarrollo (http://localhost:4321)
bun run build # build estático
bun run check # astro check
bun run typecheck
```

## Páginas

| Ruta | Contenido |
| -------------- | ------------------------------------------------------------------------ |
| `/` | Portada: hero, rasgos del negocio, la tienda, productos, visítanos y FAQ |
| `/contacto` | Hero de contacto, horario completo, dirección, teléfono y mapa de Google |
| `/aviso-legal` | Aviso legal + política de privacidad y cookies |

## De dónde salen los datos

Todo es información pública del negocio, sin inventar nada. Este comercio tiene una presencia digital mínima: **no tiene web propia ni redes sociales públicas localizables**.

| Dato | Fuente |
| ------------------------------------------------------------------------- | -------------------------------------------------- |
| Nombre, categoría (charcutería / tienda de alimentación) | Ficha de Google Maps y directorios que la replican |
| Dirección: Plaza Pío XII, 5 (29007), Cruz de Humilladero | Google Maps, cylex, Mi Charcutería, Bittersugar |
| Coordenadas 36.7179249, -4.4433512 | Enlace de Google Maps que facilitó el cliente |
| Teléfono 697 65 50 93 | cylex, Mi Charcutería y ficha de Google |
| Horario: L–V 6:30–14:30 y 17:30–20:30; sábado 8:00–14:30; domingo cerrado | Ficha de Google replicada por Mi Charcutería |
| Mención de «embutidos de calidad» y categoría «lotes y cestas» | Mi Charcutería |
| Fotografía del local | Ficha de Google Maps (2000 × 1500) |

> qdq sitúa el negocio en el **nº 4** de la Plaza Pío XII; Google Maps, cylex y Mi Charcutería lo sitúan en el **nº 5**. Se ha ido con el 5 por ser mayoría. Si el número correcto es otro, cámbialo en `BUSINESS.street` (`src/data/site.ts`) y en `googleMapsEmbed`.

**No se publica** (no hay fuente verificable): valoración y número de reseñas, NIF, razón social, correo de contacto, redes sociales y web propia. Por eso el JSON-LD **no lleva `aggregateRating`**: publicar una nota inventada sería penalizado por Google y, además, falso.

> ⚠️ **Antes de publicar**:
>
> 1. Completa el NIF/CIF, la razón social y el correo de contacto en el objeto `LEGAL` de `src/data/site.ts`. Mientras falte alguno, `/aviso-legal` muestra un aviso y los campos salen como «[pendiente de completar]»; al rellenarlos, el aviso desaparece solo y el correo pasa a ser un enlace `mailto:`.
> 2. Confirma el dominio. Ahora mismo la URL canónica es `https://comestibles-pepe.vercel.app` (un nombre provisional): está en `BUSINESS.siteUrl` (`src/data/site.ts`), en `astro.config.mjs` → `site` y en `public/robots.txt`. Si el dominio final es otro, cambia los tres sitios y vuelve a hacer `bun run build`.
> 3. **Las fotos.** El negocio solo tiene una imagen pública: la foto de cabecera de su ficha de Google Maps, que se usa en el hero y en la sección «La tienda». No se ha añadido ninguna imagen de otros negocios del monorepo aunque las hubiera: la mayoría de las que hay en `src/assets/fotos` son fotos reales de otros clientes (una cerrajería, un bar de tapas, una tienda de vapers) y ponerlas aquí enseñaría otra tienda. Cuando el negocio te pase fotos suyas del local, del mostrador o de los productos, déjalas en `src/assets/fotos/` y añádelas a `IMAGES` y a `PRODUCTOS` en `src/data/site.ts`.
> 4. **Los productos.** `PRODUCTOS` en `src/data/site.ts` recoge las familias genéricas de una charcutería (embutidos, jamón, quesos, conservas, lotes y cestas, platos combinados) a partir de las categorías que declara el negocio. No es un inventario real: ajústalo a lo que hay en el mostrador. Ahí es donde más ganarás en SEO, con descripciones propias de cada producto.
> 5. **Textos alternativos.** Son descriptivos pero no he podido verificar qué depicts exactamente la foto de Google Maps (`alt` en `Hero.astro` y `Tienda.astro`). Revísalos antes de publicar.
> 6. **Descripción del negocio.** El texto de `BUSINESS.summary` se apoya en las categorías de los directorios, no en un catálogo propio. Vale la pena que lo reescribas con el tono real del negocio.
