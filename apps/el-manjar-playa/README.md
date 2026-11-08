# Restaurante El Manjar Playa · Astro

Sitio estático de presentación local para El Manjar Playa, restaurante mediterráneo en La Carihuela, Torremolinos.

## Desarrollo

```bash
bun run --filter el-manjar-playa dev
bun run --filter el-manjar-playa check
bun run --filter el-manjar-playa typecheck
bun run --filter el-manjar-playa build
```

## SEO y contenido

- Español en `/` e inglés en `/en/`, con canonical, `hreflang`, metadatos locales, Open Graph y schema `Restaurant` + `FAQPage`.
- Incluye sitemap, `robots.txt`, mapa, teléfono, indicaciones, Instagram y llamadas a reservar.
- Datos consultados en ficha de Google Maps, Waze, Instagram y fuentes gastronómicas públicas. Horario y menú cambian: verificar con el restaurante antes de fijar anuncios permanentes o precios.
- Dominio provisional: `https://el-manjar-playa.vercel.app`. Actualiza `astro.config.mjs`, `public/robots.txt` y `src/lib/business.ts` cuando se defina el dominio final.

## Imágenes

La galería muestra ocho fotos JPEG descargadas del perfil público de Instagram `@el_manjar_playa`, cuya bio indica Avenida Salvador Allende, 40, Torremolinos. Están en `public/fotos/` y enlazan al perfil para consultar las publicaciones originales. El arte del hero y la tarjeta social son gráficos originales, no fotografías.
