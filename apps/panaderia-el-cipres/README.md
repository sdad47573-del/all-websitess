# Panadería El Ciprés

Web informativa de una panadería de barrio de Málaga, construida con Astro sobre
los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería El Ciprés
- **Dirección:** C. del Ciprés, 20 · Bailén-Miraflores · 29010 Málaga
- **Teléfono:** 646 85 16 79
- **Google:** 5/5 con 1 reseña · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+El+Cipr%C3%A9s/@36.7246633,-4.4481099,17z)

## Datos y criterio

La ficha de Google es muy corta: solo publica categoría (panadería), dirección,
teléfono, horario y una reseña sin texto. **No tiene descripción del negocio,
carta, precios, fotos del local, web, accesibilidad ni métodos de pago.** Todo lo
que no está publicado se ha dejado fuera: la web no inventa productos,
especialidades ni opiniones.

La portada es un cartel tipográfico propio, no una foto del local. La única
imagen de Google que existe es una vista de Google Street View de la calle del
Ciprés (15 de julio de 2026), que se muestra identificada como tal en la sección
«La calle».

## Fotos

La ficha no devuelve ninguna foto al pedir su galería:

```bash
node scripts/fetch-maps-photos.mjs panaderia-el-cipres   # 0 fotos
```

La vista de la calle se descargó del panorama de Street View que la propia ficha
enlaza (`NJQ_j0kXUqgZQvhMJHhx_w`) y está en
`src/assets/fotos/panaderia-el-cipres-calle-01.jpg`.

## Estructura

```
src/
  data/site.ts        ficha, horario, datos con fuente y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   caliza, verde ciprés y cobre
  assets/fotos/       vista de la calle (AVIF en build)
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
- Confirmar con el establecimiento horario y datos de contacto.
- Si el negocio facilita fotos propias y carta, añadirlas: ahora mismo no hay
  ninguna fuente pública de producto.
- El dominio previsto es `https://panaderia-el-cipres.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
