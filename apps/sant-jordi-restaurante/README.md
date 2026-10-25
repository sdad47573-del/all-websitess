# Sant Jordi Restaurante

Web informativa de **Sant Jordi Restaurante**, restaurante mediterráneo en L'Alcora (Castellón). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo. La portada usa una vista de fachada de Google Street View porque la ficha no tiene fotos propias.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer Mossen Juli Vilar, 2 · 12110 L'Alcora), teléfono (964 36 22 00), coordenadas (40.0706978, -0.2073817), nota (4,8 con 8 reseñas), categoría (restaurante mediterráneo) y horario (todos los días, de 9:30 a 0:30).
- **Sin fotos propias ni carta**: la ficha de Google no tiene imágenes publicadas ni carta. Comprobado por tres vías (endpoint de la ficha, página de Maps renderizada, que solo ofrece «Añadir fotos y vídeos»). Por eso no hay galería de platos y no se publican platos ni precios inventados.
- **Imagen de portada**: captura de la fachada desde Google Street View (`src/assets/fotos/sant-jordi-restaurante-fachada.jpg`, panorama `OPF2v0tHagUDt4RLgXEdPw`, yaw 205), con crédito en el pie de foto y en el aviso legal. El `og.jpg` es un recorte de esa misma vista.
- Si el titular facilita fotos o carta, se añaden: las fotos van a `src/assets/fotos/` y se puede recuperar la galería con `LocalGallery`.
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- `siteUrl` (`https://sant-jordi-restaurante.vercel.app`) es provisional.

## Comandos

```bash
bunx turbo run build --filter=sant-jordi-restaurante
bun run typecheck   # dentro de apps/sant-jordi-restaurante
```
