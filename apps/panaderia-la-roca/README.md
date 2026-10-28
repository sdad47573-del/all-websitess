# Panadería La Roca

Web informativa de una panadería de barrio en Palma-Palmilla, construida con
Astro sobre los componentes locales de `@astro-components`.

- **Establecimiento:** Panadería La Roca
- **Ubicación:** Palma-Palmilla · 29011 Málaga (la ficha no publica calle ni número)
- **Teléfono:** 952 30 57 42
- **Google:** 4,5/5 con 56 reseñas · [ficha](https://www.google.com/maps/place/Panader%C3%ADa+La+Roca/@36.7323058,-4.4309386,17z)

## Datos y criterio

Todo sale de la ficha pública de Google Maps (consulta de octubre de 2026):
categoría, teléfono, valoración, reseñas, horario, accesibilidad y la fotografía
del perfil.

Tres cosas **no** están en la ficha y la web no se las inventa:

- **Dirección postal.** Google solo publica «Palma-Palmilla, 29011 Málaga». La
  web lo dice así, deja que el mapa marque el punto exacto y pide los datos
  completos en `/aviso-legal` para antes de publicar.
- **Carta y precios.** No hay. El mostrador recoge solo las tres familias que
  nombran las reseñas (pan, bollería y dulces), sin importes.
- **Accesibilidad de la entrada.** La ficha únicamente indica que no hay
  aparcamiento adaptado; no afirma nada del acceso, y la web tampoco.

La reseña de tres estrellas que echa de menos los bocadillos se cita tal cual,
sin dar por hecho que hayan desaparecido del todo: la web remite al teléfono.

## Fotos

La ficha tiene **una sola** fotografía; se descargó con:

```bash
node scripts/fetch-maps-photos.mjs panaderia-la-roca
```

Es un envase con un bollo azucarado y bollos de chocolate. Se usa una sola vez,
como foto de portada; el `og.jpg` es un recorte 1200×630 de la misma imagen. No
hay fotos del local y la web no enseña ninguna que no exista, ni monta una
galería de una sola foto.

## Estructura

```
src/
  data/site.ts        ficha, horario, reseñas, mostrador y FAQ
  pages/index.astro   portada + JSON-LD (Bakery y FAQPage)
  pages/aviso-legal.astro
  styles/global.css   papel, barro rojo y piedra
  assets/fotos/       foto de Google (AVIF en build)
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

- Completar en `/aviso-legal` la razón social, el NIF/CIF, el correo y la
  dirección completa con calle y número del titular.
- Confirmar con el establecimiento el horario, el surtido y si siguen haciendo
  bocadillos.
- El dominio previsto es `https://panaderia-la-roca.vercel.app` (está en
  `astro.config.mjs`, `public/robots.txt` y `src/data/site.ts`).

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
