# Panadería Yoli

Web informativa de **Panadería Yoli**, panadería de barrio en la Travesía del Ciprés,
Cruz de Humilladero (29010 Málaga).

- Ficha de Google Maps: [PANADERIA YOLI](https://www.google.com/maps/place/PANADERIA+YOLI/@36.7238733,-4.4481511,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7acea996051:0x184c91e4e54798a5!8m2!3d36.7238733!4d-4.4481511!16s%2Fg%2F11wpnr40vj?hl=es)
- Coordenadas: 36.7238733, -4.4481511 · Place ID `ChIJUWCZ6qz3cg0RpZhH5eSRTBg`

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) solo publica el **nombre**, la
**dirección** (sin número de portal), la **categoría** (`Panadería`), las **coordenadas** y el
panorama de **Street View** asociado al negocio. **No** publica horario, teléfono, web, redes,
descripción, surtido, precios, accesibilidad, valoración ni reseñas, y **no tiene galería de
fotos**. La web no rellena ninguno de esos huecos: lo dice expresamente en la portada, en «La
casa» y en las preguntas frecuentes.

## Imágenes

`src/assets/fotos/` contiene tres vistas del panorama de Google Street View que la ficha asocia
al local (panoid `boh1JPvQ10TdN8JGNbOW_Q`, captura de julio de 2026), descargadas del endpoint
público `streetviewpixels` de Google. No son fotos del interior ni del género: son la calle y la
esquina del edificio, y así se identifican en la web, con su fecha.

`public/og.jpg` (1200×630) es una composición tipográfica con los datos de la ficha.

## Estructura

```
src/
  assets/fotos/       tres vistas de Street View
  data/site.ts        datos de la ficha, textos de las secciones y FAQ
  pages/index.astro   portada
  pages/aviso-legal.astro
  styles/global.css
public/               favicon.svg, robots.txt, og.jpg
```

Sigue el patrón del monorepo: config compartida `@astro-config` (con sitemap), `vercel.json` con
el `ignoreCommand` común, `netlify.toml` y datos en `src/data/site.ts`.

## Desarrollo

```bash
bun install
bun run dev
bun run build
bun run typecheck
```

## Antes de publicar

- Completar **NIF/CIF, razón social y un canal de contacto** en `src/pages/aviso-legal.astro`.
- Añadir el número de portal cuando se conozca (la ficha no lo indica).
- Si el establecimiento publica horario o teléfono en Google, actualizar `src/data/site.ts` y la
  sección de preguntas.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
