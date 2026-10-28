# Panadería Confitería Las Flores

Web informativa de la panadería y confitería de la avenida de San Sebastián,
en Bailén-Miraflores, construida con Astro sobre los componentes locales de
`@astro-components`.

- **Establecimiento:** Panadería Confitería Las Flores (rótulo: «Panadería ·
  Confitería · Dulces árabes»)
- **Dirección:** Av. San Sebastián, 5 · Bailén-Miraflores · 29010 Málaga
- **Teléfono:** 952 61 20 89
- **Google:** 3,9/5 con 18 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Las+Flores/@36.7229403,-4.4363528,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026) y de
las fotografías del perfil: dirección, categoría, teléfono, valoración, reseñas,
horario y accesibilidad.

La ficha **no tiene descripción del negocio, ni web propia, ni carta, ni
precios**, así que la página no publica importes. El mostrador recoge solo lo
que anuncian el rótulo del local («Panadería · Confitería · Dulces árabes»), las
reseñas (pan y dulces frescos) y la vitrina de las fotos (bollería, pasteles,
tartaletas y la bandeja de dulces árabes de almendra).

La nota media es **3,9 sobre 5 con 18 reseñas**. La web la publica tal cual y
remite a la ficha para leer las opiniones completas: hay reseñas buenas y malas,
y no se seleccionan solo las favorables.

De accesibilidad, la ficha indica que el local **tiene acceso para sillas de
ruedas**; la web lo recoge así.

El horario es el mismo los siete días, partido: 7:30–16:00 y 17:00–21:15. La
ficha avisa de que el 1 de noviembre podría ser diferente, y la web también.

## Fotos

El perfil devuelve cinco fotos, pero **dos son duplicados exactos** de otras dos
(mismo archivo, distinto id de Google), así que quedan tres imágenes distintas:

```bash
node scripts/fetch-maps-photos.mjs panaderia-confiteria-las-flores
```

- `panaderia-confiteria-las-flores-apaisada-03.jpg`: la vitrina con bollería y
  pasteles. Es la portada y el `og.jpg`.
- `panaderia-confiteria-las-flores-vertical-01.jpg`: la fachada con el rótulo
  negro de «Panadería Confitería Dulces Árabes».
- `panaderia-confiteria-las-flores-vertical-02.jpg`: la bandeja de dulces árabes,
  con medias lunas de almendra bañadas en miel.

Si se vuelve a ejecutar el script, los duplicados se descargan otra vez: conviene
borrarlos y dejar el manifiesto con las tres entradas que apuntan a los archivos
que existen.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   rosa geranio, almendra y arcos
  assets/fotos/       fotos de Google (AVIF en build)
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
- Confirmar con el establecimiento horario, surtido y si quiere publicar carta.
- El dominio previsto es `https://panaderia-confiteria-las-flores.vercel.app`
  (está en `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
