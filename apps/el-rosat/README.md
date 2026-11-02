# Restaurante Snack Bar El Rosat · Astro

Sitio informativo para el snack bar y restaurante del Carrer Sant Jordi, 1, en Pas de la Casa (parroquia de Encamp, Andorra).

## Desarrollo

```bash
bun run --filter el-rosat dev
bun run --filter el-rosat typecheck
bun run --filter el-rosat build
```

## Datos y SEO

- Español, con canonical, Open Graph, Twitter Cards, sitemap y JSON-LD `Restaurant`/`FAQPage`.
- Dirección: Carrer Sant Jordi, 1, AD200 Pas de la Casa, Encamp, Andorra. Teléfono: +376 855 464. Coordenadas y ficha proceden del Google Maps proporcionado.
- Nota de Google: 4,4 sobre 5 con 440 reseñas. Horario: todos los días de 8:00 a 19:00, con servicio non-stop según la carta. La ficha marca «se admiten perros».
- La ficha no enlaza web propia. La carta (platos combinados, bocadillos, americanos, burgers, kebabs, paninis, galettes y crêpes) sale de la carta expuesta en la puerta del local, en francés, con precios e IGI incluido.
- Dominio provisional: `https://el-rosat.vercel.app`. Al elegir dominio definitivo, actualizar `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`.

## Fotografías

Descargadas del perfil de Google Maps con `node scripts/fetch-maps-photos.mjs el-rosat`, en `src/assets/fotos/` con su `.maps-manifest.json`. Son diez fotos: fachada nevada, entrada, terraza en verano, comedor, barra y platos. El pie de página acredita a Sur Digital → https://sur-digital.vercel.app/.
