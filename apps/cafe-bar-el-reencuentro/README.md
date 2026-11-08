# Café Bar El Reencuentro

Web informativa de **Café Bar El Reencuentro**, bar de barrio en la calle Pozo Amarguillo, 53 (11540 Sanlúcar de Barrameda, Cádiz). Hecha con Astro y estilos propios (sin Tailwind), con paleta de crema, verde y mantequilla.

## Datos

- Ficha de Google Maps: <https://www.google.com/maps/place/Caf%C3%A9+Bar+El+Reencuentro/@36.7730235,-6.3538311,17z>
- Verificado en la ficha (consultada el 20 de octubre de 2026): nombre, categorías (Bar restaurante, Bar), dirección, teléfono (+34 627 76 21 79), coordenadas (36.7730235, -6.3538311), plus code (QJFW+6F), valoración (4,5 sobre 5 con 150 reseñas), horario (martes a domingo, 9:00–17:00; lunes cerrado), accesibilidad (dos entradas) y las tres reseñas destacadas.
- La descripción del titular se resume en la web para no arrastrar la errata del original («cocino»); el texto original está anotado en `src/data/site.ts`.
- La ficha **no** publica web propia, carta ni precios: la web no los inventa. La lista de platos sale de las reseñas destacadas.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs cafe-bar-el-reencuentro`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos, sin autor atribuido).
- `siteUrl` (`https://cafe-bar-el-reencuentro.vercel.app`) es provisional.

## Comandos

```bash
bun install
bunx turbo run build --filter=cafe-bar-el-reencuentro
bun run typecheck   # dentro de la app
```

## Pendiente

- Completar razón social, NIF/CIF y correo en `src/data/site.ts` (`LEGAL`) antes de publicar: el aviso amarillo de `/aviso-legal` sigue visible mientras falten.
