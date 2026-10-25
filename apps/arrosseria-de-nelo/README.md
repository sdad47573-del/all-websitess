# L'Arrosseria de Nelo

Web informativa de **L'Arrosseria de Nelo** (Nelo's, arrocería y tapería), en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer de Campoamor, 34 · 12001 Castelló de la Plana), teléfono (964 72 36 77), coordenadas (39.9842304, -0.0362978), nota (4,4 con 892 reseñas), categorías (restaurante de cocina española, mediterráneo, restaurante), descripción del titular (arroces en paella, melosos, caldosos o al estilo tradicional; recetas marineras con pescado de temporada; carnes a la piedra), horario (**solo mediodías**: jueves a sábado 12:30–16:30, domingo 12:00–16:30, **cerrado lunes a miércoles**, sin cenas) y accesibilidad (acceso, aseo, asientos y aparcamiento adaptados).
- **La ficha no publica carta con precios.** La sección «La carta» se ha redactado a partir de las fotos del perfil (paella de marisco, arroz de secreto y setas, paella de pollo y verduras, pulpo a la gallega, pescado a la plancha, caprese, sorbet) y de lo que citan las reseñas (boquerones con adobo, salmorejo, raciones generosas, arroces «de la terreta»). No se inventan importes.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas con `node scripts/fetch-maps-photos.mjs arrosseria-de-nelo` y guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron tres: una ensalada con una camiseta rotulada de fondo, unos boquerones con móvil y gafas de sol en el encuadre y una ensalada caprese repetida con el resto de la selección. El `og.jpg` es la paella de marisco recortada a 1200×630.
- `siteUrl` (`https://arrosseria-de-nelo.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=arrosseria-de-nelo
bun run typecheck   # dentro de apps/arrosseria-de-nelo
```
