# Panadería La Catalana, 1890 — Noroeste, Córdoba

Web estática en Astro para **Panadería La Catalana, 1890**, en la calle Atlántico, 11 (Noroeste, 14011 Córdoba). Los textos están en español.

## Contenido

- Portada: hero, chips, «La casa», «Tres cosas de la casa», «El mostrador», galería con las fotos de Google Maps, horario con mapa, preguntas frecuentes y pie con el crédito de Sur Digital.
- `src/data/site.ts`: todos los textos y datos del negocio en un único sitio.
- `src/assets/fotos/`: las fotos descargadas del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Panadería La Catalana, 1890
- Dirección: calle Atlántico, 11 · Noroeste · 14011 Córdoba
- Categoría: panadería
- Valoración: 4,6/5 con 35 reseñas
- Teléfono: 957 02 33 45
- Horario: lunes a sábado 8:30–14:30; domingo cerrado
- Feature id: `0xd6cdfb1cd50bb9f:0x3142d9c1b4d18f0d`
- Place ID: `ChIJn7tQzbHfbA0RDY_RtMHZQjE`

La ficha **no publica web propia, correo, redes sociales, carta, precios, métodos de pago, reparto ni accesibilidad**: no tiene atributos de accesibilidad, así que la web no la afirma.

El surtido sale de la carta del local (pan, bollería, empanadas, tartas, pastel cordobés, pestiños, magdalenas, palmeras, negritos…), de las fotos del perfil (vitrinas, bandejas de dulces y estanterías de botes y botellas) y de las reseñas (pan, bizcochos y trato).

El «sin lactosa» es lo que anuncia el propio establecimiento: el cartel de la fachada y de la vitrina dice «todos nuestros productos sin lactosa y sin trazas de lactosa». La ficha de Google no publica la lista de alérgenos, y la web lo aclara.

Ojo: existe otra ficha y otra web en el monorepo (`apps/panificadora-la-catalana-1890`) para la Panificadora La Catalana 1890 de la calle San Pablo. Esta app es la de la calle Atlántico.

## Fotos

Las fotos del perfil se descargan con:

```sh
node scripts/fetch-maps-photos.mjs panaderia-la-catalana-1890
```

y viven en `src/assets/fotos/`. La respuesta de Google devolvió cinco fotos: las vitrinas con el cartel de sin lactosa, una vitrina de dulces con la tarta de inauguración, el interior con las estanterías, la fachada y la carta de precios. Las vitrinas se usan en la portada y la fachada, la vitrina de dulces, el interior y la carta en la galería. Las vitrinas generan `public/og.jpg` (1200 × 630).

## Pendiente antes de publicar

- NIF/CIF y razón social del titular en `src/pages/aviso-legal.astro`.
- Confirmar horario, surtido, alérgenos y accesibilidad con el establecimiento.
