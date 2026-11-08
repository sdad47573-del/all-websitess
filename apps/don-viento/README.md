# Don Viento

Web informativa de **Don Viento**, bar y cafetería en la calle Director Julián Cerdán, 4 (11540 Sanlúcar de Barrameda, Cádiz). Hecha con Astro, igual que el resto de webs del monorepo, con estilos propios (sin Tailwind) y paleta de puesta de sol.

## Datos

- Ficha de Google Maps: <https://www.google.com/maps/place/Don+Viento/@36.7855268,-6.3582938,17z>
- Verificado en la ficha (consultada el 20 de octubre de 2026): nombre, categorías (Bar, Cafetería), dirección, teléfono (+34 956 38 04 40), coordenadas (36.7855268, -6.3582938), plus code (QJPR+6M), valoración (4,2 sobre 5 con 512 reseñas), distintivo («Se admiten perros»), horario semanal, accesibilidad y las tres reseñas destacadas.
- La ficha **no** publica descripción del titular, web propia, carta ni precios: la web no los inventa.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs don-viento`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos, sin autor atribuido en el manifiesto).
- `siteUrl` (`https://don-viento.vercel.app`) es provisional.

## Comandos

```bash
bun install
bunx turbo run build --filter=don-viento
bun run typecheck   # dentro de apps/don-viento
```

## Pendiente

- Completar razón social, NIF/CIF y correo en `src/data/site.ts` (`LEGAL`) antes de publicar: el aviso amarillo de `/aviso-legal` sigue visible mientras falten.
