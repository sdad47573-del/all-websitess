# Nueva Esperanza · Panadería

Web informativa de una panadería y confitería de barrio en Bailén-Miraflores,
construida con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** NUEVA ESPERANZA |Panadería
- **Dirección:** C. Magistrado Salvador Barberá, 5, Loc 3 · Bailén-Miraflores · 29010 Málaga
- **Teléfono:** 662 47 27 68
- **Google:** 4,1/5 con 23 reseñas · [ficha](https://www.google.com/maps/place/NUEVA+ESPERANZA+%7CPanader%C3%ADa/@36.7235776,-4.4434685,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, teléfono, valoración, reseñas, horario, accesibilidad, categorías,
descripción del titular y fotografías del perfil.

La ficha **no publica carta ni precios**, así que la web no incluye importes. El
mostrador recoge solo lo que enumera la descripción del propio establecimiento
(pan artesanal horneado cada día, su «famoso pan cateto», dulces tradicionales y
empanadas caseras), lo que citan las reseñas y lo que se ve en las fotos
(bollos de cacao envasados, tartas, café y una mesa dentro del local).

La tarta de cumpleaños del perfil demuestra que se han preparado tartas
encargadas, pero la ficha no publica un servicio de encargos: la web lo dice así
en las preguntas frecuentes, sin prometer plazos ni precios. Tampoco se afirma
reparto a domicilio aunque Google clasifique el local como «comida a domicilio»;
se remite al teléfono.

## Fotos

Las imágenes se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs nueva-esperanza-panaderia
```

Son seis. La fachada nocturna se recortó por abajo para quitar la marca de agua
de PhotoRoom y es la portada y el `og.jpg`; la galería usa cuatro: el café con
tartaleta, dos tartas y los bollos de cacao. La sexta (un tarro de miel) se
descarta porque no aporta nada del local.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   verde de rótulo, ámbar y noche de barrio
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
- Confirmar con el establecimiento horario, surtido, encargos de tartas y
  reparto a domicilio.
- El dominio previsto es `https://nueva-esperanza-panaderia.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
