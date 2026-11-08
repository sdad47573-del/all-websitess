# Mesón Los Naranjos · Astro

Sitio bilingüe (español e inglés) para el mesón de La Cala de Mijas.

## Desarrollo

```bash
bun run --filter meson-los-naranjos dev
bun run --filter meson-los-naranjos check
bun run --filter meson-los-naranjos typecheck
bun run --filter meson-los-naranjos build
```

## Datos y SEO

- Español en `/` e inglés en `/en/`, canonical, `hreflang`, metadatos sociales, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Jardines de La Butiplaya, local 12, C/ Sedella, La Cala de Mijas, Málaga. Teléfonos publicados: +34 669 428 994 y +34 669 428 995. Coordenadas y ficha Google Maps tomadas de la URL proporcionada.
- La especialidad en carnes y pescado, el cierre de los miércoles, dirección y teléfonos aparecen en el portal oficial de Turismo de Mijas: https://turismo.mijas.es/es/gastronomia/donde-comer/la-cala-m-es/especialidad-en-pescado-y-carne-la-cala/meson-los-naranjos
- El perfil de Instagram del negocio describe carnes a la brasa, ternera, buey gallego, tapas, vinos y menú económico: https://www.instagram.com/mesonlosnaranjos/
- Dominio provisional: `https://meson-los-naranjos.vercel.app`. Cambiar `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` al configurar dominio propio.

## Fotografías

La lectura de la ficha de Google Maps no proporcionó enlaces directos verificables a los archivos de foto. Los botones abren la ficha y su galería; las ilustraciones originales de la web no se presentan como fotografías del establecimiento.
