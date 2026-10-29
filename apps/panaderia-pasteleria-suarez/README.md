# Panadería Pastelería Suárez

Web informativa de **Panadería Pastelería Suárez**, panadería, pastelería y cafetería en la
plaza de la Trinidad (Centro, 14003 Córdoba).

- Ficha de Google Maps: [Panaderia Pasteleria Suarez](https://www.google.com/maps/place/Panaderia+Pasteleria+Suarez/@37.8827936,-4.7830999,17z)
- Coordenadas: 37.8827936, -4.7830999 · Place ID `ChIJIT2bDgDfbA0RcOPx4mmwAro`
- Plus Code: `8C9QV6M8+4Q`

## Qué publica la ficha

Datos consultados en octubre de 2026:

- **Nombre**: Panadería Pastelería Suárez (la ficha lo escribe sin tildes).
- **Dirección**: Pl. de la Trinidad, Centro, 14003 Córdoba.
- **Teléfono**: 664 80 87 51.
- **Categoría**: Panadería; el negocio se describe como panadería, cafetería, bocadillos, dulces
  y bebidas frías, con «precios económicos».
- **Valoración**: 3,8 sobre 5 con 20 reseñas.
- **Horario**: L–V 8:30–14:30 y 17:30–19:30; sábado 8:30–14:30; domingo cerrado. Aviso de
  horario especial el Día de Todos los Santos.
- **Accesibilidad**: acceso para sillas de ruedas; sin aparcamiento adaptado.
- **Galería**: diez fotos (fachada, entrada, terraza, café, bocadillos, paninis, pizza e interior).

No publica **página web, redes sociales, carta oficial ni métodos de pago**. La web no inventa
esos datos y no enlaza nada que no aparezca en la ficha.

## Imágenes y precios

Las diez fotos de `src/assets/fotos/` se descargaron de la galería de la ficha con
`scripts/fetch-maps-photos.mjs`; el manifiesto de descarga queda en `.maps-manifest.json`.
La web usa nueve. `public/og.jpg` (1200×630) es una composición con la foto de la fachada.

Los únicos importes que aparecen en la web son los de las pizarras que se ven en dos de las
fotos: bocadillo del día con bebida 5 €, café con tostada desde 2,50 €, proto del día 2,60 €,
bocata con bebida 4 €, desayuno completo 6 €, café 1,60 €, bollos 1,20 € y tostadas 1,80 €.
Se avisa de que pueden haber cambiado.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada
  pages/aviso-legal.astro
  styles/global.css
public/               favicon.svg, robots.txt, og.jpg
```

Sigue el patrón del monorepo: config compartida `@astro-config` (con sitemap), `LocalSeo` de
`@astro-components`, `vercel.json` con el `ignoreCommand` común y datos en `src/data/site.ts`.

## Desarrollo

```bash
bun install
bun run dev
bun run build
bun run typecheck
```

## Antes de publicar

- Completar **razón social y NIF/CIF** en `src/pages/aviso-legal.astro`.
- Confirmar horario, festivos y precios de la pizarra antes de difundir.
- Si el establecimiento publica carta, web o redes sociales en Google, añadirlos.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
