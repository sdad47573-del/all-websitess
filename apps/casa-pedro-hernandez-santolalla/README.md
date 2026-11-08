# Casa Pedro Hernández Santolalla

Web informativa de **Bar Casa Pedro Hernández Santolalla**, taberna y bar de tapas en la calle Bolsa, 65 (con C. Mar, 28), 11540 Sanlúcar de Barrameda, Cádiz. Hecha con Astro y estilos propios (sin Tailwind), con paleta de taberna y cenefa de azulejo.

## Datos

- Ficha de Google Maps: <https://www.google.com/maps/place/Bar+Casa+Pedro+Hern%C3%A1ndez+Santolalla/@36.7813228,-6.3518884,17z>
- Verificado en la ficha (consultada el 20 de octubre de 2026): nombre, categorías (Taberna, Bar de tapas), dirección (calle Bolsa, 65 · C. Mar, 28), teléfono (+34 956 36 05 71), coordenadas (36.7813228, -6.3518884), plus code (QJJX+G6), valoración (4,4 sobre 5 con 843 reseñas), distintivo («Se admiten perros»), horario semanal, accesibilidad (solo dos entradas) y las tres reseñas destacadas.
- La ficha **no** publica descripción del titular, web propia, carta ni precios: la web no los inventa. La lista «Lo que se nombra» sale de los productos citados en las reseñas.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs casa-pedro-hernandez-santolalla`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos, sin autor atribuido).
- `siteUrl` (`https://casa-pedro-hernandez-santolalla.vercel.app`) es provisional.

## Comandos

```bash
bun install
bunx turbo run build --filter=casa-pedro-hernandez-santolalla
bun run typecheck   # dentro de la app
```

## Pendiente

- Completar razón social, NIF/CIF y correo en `src/data/site.ts` (`LEGAL`) antes de publicar: el aviso amarillo de `/aviso-legal` sigue visible mientras falten.
