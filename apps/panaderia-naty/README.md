# Panadería Naty — Poniente Norte, Córdoba

Web estática en Astro para **Panadería Naty**, en la calle Centro de Salud (Poniente Norte, 14005 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Naty
- Dirección: calle Centro de Salud · Poniente Norte · 14005 Córdoba (sin número)
- Categoría: panadería
- Valoración: 4,8/5 con 12 reseñas
- Teléfono: 633 07 06 94
- Horario: lunes a sábado 7:30–21:00; domingo 7:30–18:00
- Accesibilidad: acceso para sillas de ruedas; sin aparcamiento adaptado
- Feature id: `0xd6d27000e47e191:0xfa181dc5cff42bbe`
- Place ID: `ChIJkeFHDgAnbQ0Rviv0z8UdGPo`

La ficha **no publica el número de la calle, ni web propia, correo, redes sociales, carta, precios, métodos de pago o reparto**. Tampoco trae reseñas destacadas en la respuesta de Google, así que la web no cita ninguna.

Aviso sobre las fotos: el perfil de Google mezcla imágenes que no encajan con el nombre del negocio. Las dos apaisadas y una vertical son del mostrador de chucherías, snacks y chocolates; las otras dos muestran una fachada con el rótulo «Campoarás · Panadería Jordi». Por eso la web usa las fotos del interior (mostrador y estanterías), describe el local como panadería con mostrador de chucherías y **no** usa la fachada ni menciona el otro rótulo. Conviene aclarar con el negocio de quién son esas fotos y si el local es el mismo.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-naty
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió cinco fotos: el mostrador de golosinas, las estanterías de snacks y chocolates, la fachada con el rótulo ajeno, un expositor de chocolates y otra vista de la fachada. El mostrador se usa en la portada, y las estanterías y el expositor en la galería. El mostrador genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar con el negocio el número de la calle, el surtido de pan y de dónde salen las fotos de la fachada.
