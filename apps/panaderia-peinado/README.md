# Panadería Peinado — Cruz de Humilladero, Málaga

Web estática en Astro para **Panadería Peinado**, en la avenida de Carlos Haya, 76 (Cruz de Humilladero, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería Peinado
- Dirección: Av. de Carlos Haya, 76 · Cruz de Humilladero · 29010 Málaga
- Categoría: panadería
- Teléfono: 951 90 02 21
- Valoración: 4,1/5 con 51 reseñas
- Horario: todos los días 8:00–15:00
- Accesibilidad: acceso para sillas de ruedas y aparcamiento adaptado, según la ficha
- Segundo local (según la descripción de la ficha): C/ Pedro Gómez Chaix, 3, zona de Carranque
- Feature id: `0xd72f70d6cce3bc5:0x28b97608255750e3`
- Place ID: `ChIJxTvObA33cg0R41BXJQh2uSg`

La ficha **no publica carta, precios, web propia, correo, redes sociales ni métodos de pago**. El mostrador recoge lo que muestran las fotos del perfil: hogazas y bollos de pan, napolitanas de chocolate, cañas de nata, dulces de crema con coco, magdalenas, roscones de Reyes y tartas decoradas de temporada (Navidad y Halloween). No se muestran importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-peinado
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos: los roscones, la fachada, dulces de crema y coco, una bandeja de bollos de pan, cañas de nata, el mostrador con tartas, napolitanas de chocolate, tartas de Navidad, una hogaza y magdalenas. Se usan siete: los roscones en la portada y seis en la galería (fachada, hogaza, napolitanas, cañas, mostrador y magdalenas). La foto de los roscones genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y accesibilidad con el establecimiento.
