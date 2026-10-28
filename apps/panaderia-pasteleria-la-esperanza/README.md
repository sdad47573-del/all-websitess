# Panadería Pastelería La Esperanza — Cruz de Humilladero, Málaga

Web estática en Astro para **Panadería Pastelería La Esperanza**, en la calle Virgen del Rocío, 70 (Cruz de Humilladero, 29007 Málaga). Los textos están en español.

## Contenido

- Portada: hero con la foto del interior, cenefa de palabras, franja de datos, «La casa», «El mostrador», galería con las 3 fotos de Google Maps, reseñas, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Pastelería La Esperanza
- Dirección: C. Virgen del Rocío, 70 · Cruz de Humilladero · 29007 Málaga
- Categoría: panadería
- Valoración: 4,3/5 con 48 reseñas
- Teléfono: no publicado en la ficha
- Web propia: no publicada en la ficha
- Horario: lunes a viernes 8:00–21:00; sábado y domingo 8:00–15:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd72f773b7c53dc9:0x886ad6e2343c1e76`
- Place ID: `ChIJyT3Ft3P3cg0Rdh48NOLWaog`

La ficha **no publica teléfono, web, carta, precios ni reparto**, y no tiene descripción del titular. Los productos que cita la web son los que aparecen en las tres fotografías del perfil (pan, bollería, dulces y baldas con aceites, conservas y bebidas) y los que mencionan las reseñas. No se muestran importes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-pasteleria-la-esperanza
```

Google solo devuelve tres imágenes para esta ficha, y viven en `src/assets/fotos/`. El `og.jpg` se genera recortando la bandeja de dulces a 1200×630.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con la panadería horario y productos antes de divulgar la web. Al no haber teléfono publicado, la confirmación tiene que ser presencial.
- Dominio definitivo: ahora `https://panaderia-pasteleria-la-esperanza.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
