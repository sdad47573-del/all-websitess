# Bar restaurante Porcar

Web informativa de **Bar restaurante Porcar**, cocina casera de montaña en Xodos (Castelló). Hecha con Astro y los componentes compartidos de `@astro-components`, igual que el resto de webs del monorepo.

## Datos

- Verificado en la ficha pública de Google Maps: nombre, dirección (Carrer l'Església · 12134 Xodos), teléfono (964 37 02 82), coordenadas (40.2452791, -0.2875449), categorías (bar y restaurante), nota (4,4 con 508 reseñas) y horario.
- Horario tal como lo publica la ficha: **9:00–24:00 de martes a domingo**, con el **lunes cerrado**. No es horario partido, así que la tabla de «Visítanos» lleva una sola franja por día.
- La ficha **no** tiene web propia, ni carta, ni precios, ni menú del día. La sección «La mesa» recoge solo los platos que aparecen en las fotos del perfil (olla de garbanzos con costilla y morcilla, cordero guisado, chuletillas a la brasa con queso, setas salteadas, ensalada con granada y café) y lo que citan las reseñas. La web lo advierte y no inventa importes.
- Reseñas destacadas usadas como cita: «Buen sitio y buen trato y una comida casera buenísima» y «Cocina casera y típica de la comarca muy bien elaborada… a repetir».
- Accesibilidad tal como la marca la ficha: entrada, aseo y asientos adaptados para sillas de ruedas. La ficha **no** marca aparcamiento adaptado y así se dice en las preguntas frecuentes.
- De las diez fotos de la ficha se descartó una: un café en vaso en primer plano, redundante con el resto y sin interés para la galería. Las demás van al hero (fachada) y a la galería (comedor, platos y calles del pueblo).
- Pendiente de confirmar por el titular: razón social, NIF/CIF y correo de contacto, marcados en `src/pages/aviso-legal.astro`.
- Fotos: descargadas de la ficha de Google Maps con `node scripts/fetch-maps-photos.mjs bar-restaurante-porcar`, guardadas en `src/assets/fotos/` con su `.maps-manifest.json`. El `og.jpg` sale de la fachada, recortado desde arriba para dejar fuera a los clientes de la terraza.
- `siteUrl` (`https://bar-restaurante-porcar.vercel.app`) es provisional.
- Ojo con el nombre: en Google Maps aparece como «Bar restaurante Porcar» y el pueblo como «Xodos»; en muchos mapas y guías antiguas figura como **Chodos**. El `keywords` y el `city` del SEO incluyen las dos formas.

## Comandos

```bash
bunx turbo run build --filter=bar-restaurante-porcar
bun run typecheck   # dentro de apps/bar-restaurante-porcar
node scripts/check-site-content.mjs bar-restaurante-porcar
```
