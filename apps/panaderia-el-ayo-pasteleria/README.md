# Panadería El Ayo - Pastelería — Bailén-Miraflores, Málaga

Web estática en Astro para la **Panadería El Ayo - Pastelería**, en la calle Sondalezas, 2 (Bailén-Miraflores, 29010 Málaga). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, una reseña, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: la galería descargada del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería El Ayo - Pastelería
- Dirección: C. Sondalezas, 2 · Bailén-Miraflores · 29010 Málaga
- Categoría: panadería
- Teléfono: 636 76 09 70
- Correo: panaderiaelayo@gmail.com
- Instagram: [@panaderiaelayo](https://www.instagram.com/panaderiaelayo/)
- Valoración: 4,8/5 con 45 reseñas
- Horario: L–V 7:30–20:00 · S y D 7:30–14:00
- Feature id: `0xd72f70ac0c8df23:0x116cff4d64003aad`
- Place ID: `ChIJI9_IwAr3cg0RrToAZE3_bBE`

La ficha **no publica carta, precios, web propia ni métodos de pago**. El mostrador recoge solo lo que la casa anuncia en su perfil de Instagram (pan, tartas, pasteles, salados y encargos para celebraciones) y lo que figura en los vinilos del escaparate (bollería, empanadas, confitería, roscos de reyes y buñuelos). No se muestran importes ni productos que no estén publicados.

El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar; se recuerda en la tabla y en las preguntas frecuentes.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-el-ayo-pasteleria
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió cinco fotos: la fachada, el mostrador de tartas, las estanterías de pan y dos dulces del obrador. La fachada se usa en la portada y también genera `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, encargos y accesibilidad con el establecimiento.
