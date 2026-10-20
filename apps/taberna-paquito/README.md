# Taberna Paquito

Web informativa de **Taberna "Paquito"**, taberna de brasa en la calle Torre de Arena, 11540 Sanlúcar de Barrameda (Cádiz). Hecha con Astro y estilos propios (sin Tailwind), con paleta de carbón y brasa.

## Datos

- Ficha de Google Maps: <https://www.google.com/maps/place/Taberna+%22Paquito%22/@36.7850306,-6.3548123,17z>
- Verificado en la ficha (consultada el 20 de octubre de 2026): nombre, categoría (Taberna), dirección (C. Torre de Arena, sin número), teléfono (+34 671 75 97 74), coordenadas (36.7850306, -6.3548123), plus code (QJPW+23), valoración (4,1 sobre 5 con 222 reseñas), horario semanal (11:00–16:00 y 19:00–24:00 todos los días), accesibilidad (cuatro entradas) y las tres reseñas destacadas.
- La descripción de la casa es la que publica el propio titular en Google Maps y se cita literal.
- La ficha **no** publica web propia, carta ni precios: la web no los inventa. La sección «Lo que se cita» sale de la descripción del titular y de las reseñas.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs taberna-paquito`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json` (10 fotos, sin autor atribuido).
- `siteUrl` (`https://taberna-paquito.vercel.app`) es provisional.

## Comandos

```bash
bun install
bunx turbo run build --filter=taberna-paquito
bun run typecheck   # dentro de la app
```

## Pendiente

- Completar razón social, NIF/CIF y correo en `src/data/site.ts` (`LEGAL`) antes de publicar: el aviso amarillo de `/aviso-legal` sigue visible mientras falten.
