# Panadería Pastelería Dulce Capricho

Web informativa de una panadería-pastelería de barrio en Málaga, construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería Pastelería Dulce Capricho
- **Dirección:** Av. Miraflores de los Ángeles · Bailén-Miraflores · 29011 Málaga
  (la ficha no publica número de portal)
- **Teléfono:** no publicado
- **Google:** 5/5 con 1 reseña · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Pasteler%C3%ADa+Dulce+Capricho/@36.7305362,-4.4399293,17z)

## Datos y criterio

La ficha de Google solo publica categoría (panadería), dirección, valoración,
número de reseñas y horario. **No tiene teléfono, número de portal, descripción,
carta, precios, fotos del local, web, accesibilidad ni métodos de pago**, y la
única reseña no tiene texto público. Todo eso se ha dejado fuera.

Lo que sí se describe de la fachada (rótulos, vitrinas, puerta, esquina, peluquería
de al lado) está tomado de la vista de Google Street View del 19 de julio de 2026,
que es el panorama que enlaza la propia ficha. No se detallan productos ni precios.

## Imágenes

La ficha devuelve **0 fotos**:

```bash
node scripts/fetch-maps-photos.mjs panaderia-dulce-capricho
```

Se descargaron tres vistas del panorama de Street View (`4hjAjcRpSv3LmEcoEJeyGw`)
a la ficha, por tres ángulos distintos: fachada, esquina y avenida. Están en
`src/assets/fotos/` y se muestran siempre identificadas como Google Street View.

## Estructura

```
src/
  data/site.ts        ficha, horario, detalles de la fachada y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   nata, chocolate, fresa y pistacho
  assets/fotos/       vistas de Street View (AVIF en build)
public/               favicon, robots.txt y og.jpg
```

## Comandos

```bash
bun run dev
bun run build
bun run preview
bun run typecheck
```

## Pendiente antes de publicar

- Completar en `/aviso-legal` el NIF/CIF, la razón social y el correo del titular.
- Confirmar con el establecimiento número de portal, teléfono, horario y si
  quieren añadir fotos y carta propias.
- El dominio previsto es `https://panaderia-dulce-capricho.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
