# Casa Herminia

Web informativa de **Restaurant - Bar Casa Herminia**, bar de almuerzos en La Pobla Tornesa (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Vilafamés, 4 · 12191 La Pobla Tornesa), teléfono (964 33 81 25), coordenadas (40.102729, -0.0018279), nota (4,5 con 983 reseñas), categorías (bar, restaurante), horario (lunes a viernes 7:00–15:30, sábado 7:00–13:30, **domingo cerrado**, solo mañanas) y ausencia de atributos de accesibilidad publicados (así se dice en la FAQ, sin inventarlos).
- **El carajillo palmero**: el cartel del propio bar, fotografiado en su galería, dice que el palmero es original de este bar, se sirve en vaso de caña y se creó en 1998. La web lo atribuye al cartel de la casa y a las reseñas, que lo citan por su nombre.
- **La ficha no publica carta ni precios ni descripción del titular.** La sección «El almuerzo» sale de las fotos del perfil (plato de almuerzo con huevos y embutido, bocadillo de llom con pimiento, bocadillo de longaniza con huevo, olivas y cacahuetes, cerveza) y de las reseñas (pinchos de tortilla, bar de almuerzos ciclistas, trato de las camareras).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas con `node scripts/fetch-maps-photos.mjs casa-herminia` y guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron tres: dos versiones del carajillo con la mano en el encuadre y un bocadillo de tortilla con mano, por repetir motivos ya elegidos. El `og.jpg` es el plato de almuerzo recortado a 1200×630.
- `siteUrl` (`https://casa-herminia.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=casa-herminia
bun run typecheck   # dentro de apps/casa-herminia
```
