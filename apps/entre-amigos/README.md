# Entre Amigos Bar Restaurante

Web informativa de **Entre Amigos Bar Restaurante**, bar de polígono con menú del día en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Peri 15, núm. 8 · Pol. Ind. Autopista Sur · 12006 Castellón), teléfono (619 60 75 91), coordenadas (39.9758999, -0.064094), categoría (bar restaurante), nota (4,4 con 233 reseñas) y horario.
- Horario de la ficha: **lunes a viernes 7:00–18:00**, **sábado 8:00–16:00** y **domingo cerrado**. Es horario corrido, sin cierre a mediodía.
- **Menú del día real**: una de las fotos de la ficha es la carta impresa del menú. De ahí salen los platos, el orden (pan con tomate y ali oli, entrante, segundo a elegir, postre o café, primera bebida) y el precio de **18,50 € IVA incluido**, con los suplementos de +4 € (cordero) y +6 € (entrecot). Se reproduce en «El menú» y también como `hasMenu` en el JSON-LD. La web avisa de que precio y platos cambian a diario.
- La ficha **no** tiene carta de barra con precios ni web propia. Lo que se ve en la galería es lo fotografiado: comedor, parrillada, bocadillo de panceta, arroz, postre y el exterior.
- Accesibilidad tal como la marca la ficha: entrada, aseo y asientos adaptados para sillas de ruedas. No marca plaza de aparcamiento adaptada.
- De las diez fotos se descartaron tres: la foto de la carta del menú (su texto ya está como contenido, y en miniatura no se leería), una ensalada con manos en el borde y la fachada con matrículas de coche legibles. Se usaron siete: terraza (hero), comedor, tres platos, postre y exterior.
- Reseña citada: «Llegamos y vimos que cambiaron de dueños, una pareja joven muy simpáticos». La otra reseña del payload era de 1 estrella y no se usa.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas con `node scripts/fetch-maps-photos.mjs entre-amigos`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` es la parrillada.
- `siteUrl` (`https://entre-amigos.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=entre-amigos
bun run typecheck   # dentro de apps/entre-amigos
node scripts/check-site-content.mjs entre-amigos
```
