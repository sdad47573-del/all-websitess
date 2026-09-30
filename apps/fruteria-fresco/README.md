# Frutería Fresco

Web Astro para la tienda de Frutería Fresco en **Calle Juan de Robles, 61, Teatinos, Málaga**.

- Astro 5 + Tailwind CSS 4 + daisyUI, con config compartida del monorepo.
- SEO local con metadatos por página, Open Graph, geolocalización, sitemap, JSON-LD `GroceryStore`, `ContactPage`, `BreadcrumbList` y `FAQPage`.
- El hero y la tarjeta social usan ilustraciones SVG originales, no fotografían ni representan el local.

## Páginas

- `/`: presentación, catálogo público, publicaciones oficiales, horario, mapa y FAQ.
- `/contacto`: teléfono, dirección, horario y mapa.
- `/aviso-legal`: información legal y de privacidad; faltan los datos registrales del titular.

## Fuentes y validación previa a publicación

- Nombre, dirección de Calle Juan de Robles 61, teléfono `640 67 03 95`, categorías y descripción de productos: ficha pública de Cylex/Páginas Amarillas y el Instagram oficial `@fruteriafresco`.
- La ficha de Google Maps enviada por el usuario tiene coordenadas de pin ligeramente distintas a la dirección publicada. Se utiliza la dirección `C. Juan de Robles, 61`, coincidente en los directorios y en las publicaciones oficiales; el mapa embebido usa coordenadas aproximadas de esa dirección y el enlace abre la ficha del usuario. Confirmar pin y NAP con el titular.
- Horario mostrado como orientativo de Cylex/Yably (actualización 3/7/2026): L–V 09:00–15:00 y 17:30–21:00; sáb–dom 10:00–15:00. Páginas Amarillas difiere, así que llamar antes de venir. Validar también `openingHoursSpecification` en el JSON-LD con el negocio.
- El perfil oficial de Instagram publica fotos/reels de productos y enlaza pedidos por WhatsApp a través de Linktree. Se embeben dos publicaciones de la cuenta en Instagram; las imágenes las sirve Instagram y permanecen atribuidas al perfil. No se copiaron imágenes de terceros ni se pudo descargar una foto directamente desde Google Maps.
- El catálogo se apoya en información del negocio: fruta y verdura fresca, productos latinoamericanos, frutas exóticas, comida preparada, arepas/empanadas congeladas y frutos secos. Confirma disponibilidad y opciones sin gluten con la tienda.
- No se presenta rating ni aggregateRating. Las cifras agregadas de los directorios difieren.
- Confirma el dominio provisional `https://fruteria-fresco-malaga.vercel.app` en `src/data/site.ts`, `astro.config.mjs` y `public/robots.txt`.
- Completa razón social, NIF/CIF y email en `LEGAL` (`src/data/site.ts`) antes de producción.

## Comandos

```bash
bun run check
bun run typecheck
bun run build
```
