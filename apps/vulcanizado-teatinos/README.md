# Vulcanizado Teatinos

Landing estática Astro para Vulcanizado Teatinos, en la avenida de Carlos Haya, Málaga.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/vulcanizado-teatinos
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## Datos y SEO local

- Nombre, dirección (Av. de Carlos Haya, 169), teléfono (+34 646 65 48 37) y coordenadas se usan para los enlaces y datos estructurados.
- JSON-LD `AutoRepair` sin horarios, valoraciones, precio ni servicios específicos no confirmados.
- `robots.txt` y sitemap usan `https://vulcanizado-teatinos.vercel.app` como dominio provisional. Actualiza ese dominio en `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` antes de publicar.
- No se ha incluido código postal al no haberlo podido confirmar en una fuente fiable.

## Foto de Google Maps

La imagen de portada usa la URL `lh3.googleusercontent.com` de la foto enlazada en la solicitud. Google puede cambiar o retirar esta URL; revisa que siga disponible antes de publicar. Se enlaza a la ficha para acceder a la galería completa. No se han copiado otras imágenes de usuarios.

Antes de publicar, confirma con el titular que se puede reutilizar la fotografía y verifica los horarios y servicios si se desean añadir a la web.
