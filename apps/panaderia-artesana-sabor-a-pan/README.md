# Panadería Artesana Sabor a Pan — Cruz de Humilladero, Málaga

Web estática en Astro para **Panadería Artesana Sabor a Pan, s.l.**, en la calle Cristóbal de Villalón, 11, local 7 (Cruz de Humilladero, 29006 Málaga). Los textos están en español.

## Contenido

- Portada: hero con hogazas y una tarta superpuesta, carta de panes con puntos guía, franja de datos, «El obrador» con la descripción del titular, «La pastelería», galería con 9 fotos de Google Maps, reseñas, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las 10 fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Artesana Sabor a Pan, s.l.
- Dirección: C. Cristóbal de Villalón, 11, Loc 7 · Cruz de Humilladero · 29006 Málaga
- Categoría: panadería
- Valoración: 4,1/5 con 18 reseñas
- Teléfono: 951 24 52 57 (+34 951 24 52 57)
- Horario: lunes a viernes 7:00–15:00 y 17:00–20:30; sábado 7:00–14:00; domingo cerrado
- Accesibilidad: acceso para sillas de ruedas **y** aparcamiento adaptado
- Feature id: `0xd72f73bae9b3c5f:0xf96d4af950c76108`
- Place ID: `ChIJXzybrjv3cg0RCGHHUPlKbfk`

La ficha **no publica web propia, carta, precios ni reparto**, pero sí una descripción del titular muy completa: masas madres, harinas de cereales, maíz y centeno, certificación del 100 % frente a alérgenos bajo petición, locas, bizcochos y bollería, tartas de cumpleaños y de bodas personalizables con fotografías, hojaldres especiales, palmeras gigantes (frutas, chocolate), empanadas, milhojas, torrijas, donuts caseros y panes de harina blanca, chai, centeno, cebolla y miel y nueces. La web reproduce esos datos y no muestra importes.

## Fotos

Las 10 fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-artesana-sabor-a-pan
```

y viven en `src/assets/fotos/`. El `og.jpg` se genera recortando la tarta de chocolate a 1200×630.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Confirmar con la panadería horario, productos y disponibilidad de alérgenos antes de divulgar la web.
- Dominio definitivo: ahora `https://panaderia-artesana-sabor-a-pan.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y en el canonical del aviso legal.

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
