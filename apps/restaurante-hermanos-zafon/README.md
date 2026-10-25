# Restaurante Hermanos Zafón

Web informativa de **Restaurante Hermanos Zafón**, bar restaurante con parrilla de leña en Castellón de la Plana. Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Av. de l'Alcora, 101 · 12006 Castellón de la Plana), teléfono (964 24 02 43), coordenadas (39.9867858, -0.0590794), nota (4,2 con 1.735 reseñas), categorías (bar restaurante, restaurante especializado en barbacoa, brunch), horario (todos los días desde las 6:00; de domingo a jueves hasta las 17:00 y viernes y sábados hasta las 24:00; sin cierre a mediodía) y accesibilidad (aseo, asientos y aparcamiento adaptados; la entrada tiene escalones según las fotos).
- **La ficha no publica carta.** La sección «La brasa» se ha redactado a partir de las fotos del perfil (parrilla de leña, plato de brasa con patatas y pimiento, bocadillo de longaniza) y de lo que citan las reseñas (jamón y queso, puntilla, bravas, sepia y chipirones, pulpo a la gallega a 10 € la ración, menú diario variado, carajillos). No se inventan precios: solo se reproduce el del pulpo, el único que aparece en la ficha.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs restaurante-hermanos-zafon`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. Se descartaron las fotos con clientes identificables, la de la propia carta (ilegible en miniatura) y una fachada con matrículas legibles. El `og.jpg` es el plato de brasa recortado a 1200×630.
- `siteUrl` (`https://restaurante-hermanos-zafon.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=restaurante-hermanos-zafon
bun run typecheck   # dentro de apps/restaurante-hermanos-zafon
```
