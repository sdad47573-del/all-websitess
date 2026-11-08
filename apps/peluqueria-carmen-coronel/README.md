# Peluquería Carmen Coronel

Landing estática Astro para Peluquería Carmen Coronel, en avenida de Carlos Haya, Málaga.

## Desarrollo

Desde la raíz del monorepo:

```bash
bun install
cd apps/peluqueria-carmen-coronel
bun run dev
bun run test
bun run check
bun run typecheck
bun run build
```

## SEO local y datos

- Nombre, avenida y foto principal proceden del enlace de la ficha de Google Maps aportado.
- Dirección ampliada (bloque 1, local 2), código postal y teléfono proceden de un directorio local y del perfil asociado de Instagram.
- JSON-LD `HairSalon` con nombre, dirección, teléfono, coordenadas, imagen y enlace a la ficha. No se añaden horarios, ratings ni servicios específicos.
- Dominio provisional: `https://peluqueria-carmen-coronel.vercel.app`. Actualizar `astro.config.mjs`, `src/lib/business.ts` y `public/robots.txt` al definir el dominio real.

## Foto de Google Maps

La portada carga la imagen `gps-cs-s` enlazada en la solicitud desde `lh3.googleusercontent.com`. Google puede cambiar o retirar la URL; comprobar que siga disponible y confirmar permiso de reutilización con la titular antes de publicar. El botón abre la ficha y galería completa.
