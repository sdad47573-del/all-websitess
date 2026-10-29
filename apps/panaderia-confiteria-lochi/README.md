# Panadería Confitería Lochi

Web informativa de **Panadería Confitería Lochi**, panadería y confitería en la avenida de
Carlos Haya — Cruz de Humilladero (29010 Málaga).

- Ficha de Google Maps: [Panadería Confitería Lochi](https://www.google.com/maps/place/Panader%C3%ADa+Confiter%C3%ADa+Lochi/@36.7216955,-4.4440079,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7b320a4bb05:0x1f41326e92afdfa7!8m2!3d36.7216955!4d-4.4440079!16s%2Fg%2F11fjx8rpqq?hl=es)
- Coordenadas: 36.7216955, -4.4440079 · Place ID `ChIJBbukILP3cg0Rp9-vkm4yQR8`
- Teléfono: 952 39 16 41 · Plus Code `8C8QPHC4+M9`

> Esta es la ficha de la **avenida de Carlos Haya**. En el repo ya existe
> `apps/confiteria-panaderia-lochi`, que corresponde a otra ficha de Lochi en la calle
> Eugenio Gross; son fichas distintas, con dirección, teléfono y valoración distintas.

## Qué hay en la ficha

La ficha pública de Google (consultada en octubre de 2026) publica:

- **Nombre**: Panadería Confitería Lochi · **Categoría**: Panadería.
- **Dirección**: Av. de Carlos Haya, Cruz de Humilladero, 29010 Málaga, **sin número de portal**.
- **Teléfono**: 952 39 16 41.
- **Horario**: de 8:00 a 14:30 todos los días, sin día de cierre. Aviso de horario especial el
  Día de Todos los Santos.
- **Valoración**: 3,7 sobre 5 con 30 reseñas.
- **Accesibilidad**: acceso para sillas de ruedas; **sin** aparcamiento adaptado.
- **Galería**: diez fotos (fachada, entrada, vitrina, donuts, troncos de Navidad y envoltorio).

No publica **página web, redes sociales, descripción del negocio, carta ni precios**. La web no
inventa esos datos: los huecos se explican en la portada y en las preguntas frecuentes.

## Reseñas

La portada resume con palabras propias los tres temas que destaca Google (donuts, una tarta de
cumpleaños y el trato del personal); no reproduce el texto de las reseñas. El enlace a Google
Maps permite leerlas completas.

## Imágenes

Las fotos de `src/assets/fotos/` se descargaron de la galería con
`scripts/fetch-maps-photos.mjs`. Se usan seis: fachada, entrada, vitrina, dos bandejas de donuts
y el envoltorio. Se descartan el primer plano desenfocado de un bocado y los troncos de Navidad,
por ser producto de temporada. Las fuentes se recomprimen antes de compilar.
`public/og.jpg` (1200×630) es una composición tipográfica con los datos de la ficha.

## Estructura

```
src/
  assets/fotos/       fotos de la galería de Google
  data/site.ts        datos de la ficha, horario, reseñas resumidas y FAQ
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

- Completar **NIF/CIF y razón social** en `src/pages/aviso-legal.astro`.
- Confirmar que el teléfono sigue activo y el horario vigente.
- Añadir el número de portal cuando se conozca; la ficha no lo indica.

Web creada por [Sur Digital](https://sur-digital.vercel.app/).
