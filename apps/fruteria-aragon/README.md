# Frutería Aragón

Web Astro para **Frutería Aragón**, frutería en Calle Castilla, 25, Málaga.

- Astro 5 + Tailwind CSS 4 + daisyUI.
- SEO local con metadatos, geotags, sitemap, JSON-LD `GroceryStore`, `ContactPage`, `BreadcrumbList` y `FAQPage`.
- Se usan ilustraciones vectoriales decorativas creadas para el sitio; no se presentan como fotografías del comercio.

## Páginas

- `/`: portada, descripción, reparto y ubicación.
- `/contacto`: dirección, teléfono y mapa.
- `/aviso-legal`: aviso legal y privacidad con campos del titular pendientes.

## Fuentes y validaciones

- Dirección: `Calle Castilla, 25, 29007 Málaga`, alineada con el enlace de Google Maps y fichas cartográficas/directorios.
- Teléfono: `+34 665 24 15 05`, mostrado por Mapy/Maptons para el punto de venta.
- Facebook asociado: `facebook.com/fruteria.aragon`; un resultado público de esa página indica reparto a domicilio a aproximadamente 1 km de Calle Castilla. Confirmar teléfono y radio de servicio con el negocio.
- No se encontró horario verificable ni publicaciones/fotos individuales accesibles de Facebook o de la ficha de Google Maps. Por ello no se publica horario ni se descargan imágenes. El enlace al perfil de Facebook queda como acceso para consultar novedades y fotos actuales.
- No se añaden valoraciones ni inventario específico sin una fuente confirmable.
- Antes de publicar, confirma el pin/dirección, el teléfono, horario, dominio `https://fruteria-aragon-malaga.vercel.app` y completa razón social, NIF/CIF y email en `src/data/site.ts`.

## Comandos

```bash
bun run check
bun run typecheck
bun run build
```
