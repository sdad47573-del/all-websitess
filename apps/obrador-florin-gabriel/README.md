# Obrador de Panadería y Pastelería Florin & Gabriel — Málaga

Web estática en Astro para el **OBRADOR de PANADERÍA y PASTELERÍA (Florin & Gabriel)**, en la calle Carraca, 5, local 20 (Bailén-Miraflores, 29011 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El obrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: OBRADOR de PANADERÍA y PASTELERÍA (Florin & Gabriel)
- Dirección: C. Carraca, 5, Loc 20 · Bailén-Miraflores · 29011 Málaga
- Categorías: panadería, pastelería, panadería mayorista, distribuidor de comestibles, tienda general, heladería
- Teléfono: 667 32 81 16
- Valoración: 3,7/5 con 9 reseñas
- Horario: todos los días 5:00–22:30
- Accesibilidad: acceso para sillas de ruedas y aparcamiento adaptado
- Feature id: `0xd72f7dea4581671:0xd2e81dbd389d9034`
- Place ID: `ChIJcRZYpN73cg0RNJCdOL0d6NI`

Descripción de la ficha: «Obrador de Panadería y Pastelería (fabricación propia) Venta al público y el sector de la hostelería principalmente, precios competitivos, realizando cualquier tipo de pan y bollería que se necesite, adaptándonos a sus gustos comerciales».

La ficha **no publica carta, precios, web propia, correo ni redes sociales**, y no indica métodos de pago ni reparto. El obrador recoge lo que muestran las fotos del perfil (baguettes, bollos, napolitanas, berlinas, pastelitos y tartas personalizadas) y lo que explica la descripción, sin importes.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs obrador-florin-gabriel
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió diez fotos del obrador: baguettes, bollos glaseados, una tarta de unicornio, tartas de chocolate, una bandeja de pastelitos, berlinas, una tarta con foto, napolitanas y bollos en la rejilla. Se usan siete: las baguettes en la portada y seis en la galería (tarta de unicornio, bollos, napolitanas, berlinas, pastelitos y tarta con foto). Las baguettes generan `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido y formas de encargo con el obrador.
