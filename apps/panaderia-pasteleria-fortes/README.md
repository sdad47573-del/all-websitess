# Fortes · Panadería y pastelería

Web informativa de una panadería y pastelería de tres generaciones, construida
con Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Fortes S.C. Panadería y pastelería
- **Dirección:** C. del Pintor Berrobianco Menéndez · Carretera de Cádiz · 29006 Málaga
- **Teléfono:** 952 34 45 20
- **Google:** 4,5/5 con 34 reseñas · [ficha](https://www.google.com/maps/place/Fortes+S.C.Panader%C3%ADa+y+pasteler%C3%ADa/@36.7092668,-4.4440092,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
dirección, categorías, teléfono, valoración, reseñas, horario, accesibilidad,
la descripción del titular y las diez fotografías del perfil.

La ficha **no publica carta ni precios**, así que la web no incluye importes. El
mostrador recoge lo que citan la descripción del establecimiento («todo
artesanal, prueben nuestro pan, dulces y gran variedad de alimentos»), las
reseñas (pan, pasteles, palmeras, dulces) y las fotos (tartas de manzana, de
fresas y de cumpleaños, surtidos de pastelería, torrijas con su cartel).

Dos límites que se respetan:

- **El número de la calle.** Google publica la calle pero no el número; la web
  no inventa uno, lo deja pendiente en el aviso legal y manda al mapa.
- **Encargos de tartas.** Las fotos enseñan tartas con nombre, pero la ficha no
  publica un servicio de encargos ni plazos: la FAQ lo dice así.

Solo se citan las dos reseñas positivas de la ficha; la de una estrella sobre
unas palmeras no se reproduce, aunque el dato de 4,5 sobre 34 reseñas es el
real.

## Fotos

Las diez se descargaron de la galería del perfil:

```bash
node scripts/fetch-maps-photos.mjs panaderia-pasteleria-fortes
```

La vitrina (bollos, pan y pasteles) es la portada y el `og.jpg`. La galería usa
las otras nueve en columnas tipo vitrina: escaparate de torrijas, tartas de
manzana, de fresas y de cumpleaños, y surtidos de pastelería.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   crema, cacao y frambuesa de caja de pastelería
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

- Completar en `/aviso-legal` la razón social, el NIF/CIF, el correo y el número
  de la calle del titular.
- Confirmar con el establecimiento horario, surtido y si aceptan encargos.
- El dominio previsto es `https://panaderia-pasteleria-fortes.vercel.app` (está
  en `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
