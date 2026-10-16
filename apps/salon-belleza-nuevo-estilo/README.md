# Salón de Belleza Nuevo Estilo

Landing local para el Salón de Belleza Nuevo Estilo, en Av de los Almogávares, 30 · Norte Sierra (14006 Córdoba).

## De dónde sale cada dato

Todo procede de la **ficha pública de Google Maps** del negocio, leída el **16 de octubre de 2026** desde el endpoint de vista previa de la propia ficha (`/maps/preview/place`), el mismo que usa `scripts/fetch-maps-photos.mjs`:

| Dato                    | Valor publicado                                      |
| ----------------------- | ---------------------------------------------------- |
| Nombre                  | Salón de Belleza Nuevo Estilo                        |
| Dirección               | Av de los Almogávares, 30 · Nte. Sierra · 14006 Córdoba |
| Categoría de Google     | Centro de estética                                   |
| Valoración              | 4,0 sobre 5 con 1 reseña                             |
| Teléfono                | 957 28 39 67 (+34 957 28 39 67)                      |
| Horario                 | Sin horario publicado ("Añadir horario"): no se inventa |
| Coordenadas             | 37.8965843, -4.7752082                               |
| Identificador del lugar | `ChIJqx4fR3HfbA0RwVd7H9VOyGA`                        |
| Feature id              | `0xd6cdf71471f1eab:0x60c84ed51f7b57c1`               |
| Instagram               | https://www.instagram.com/salondebelleza.nuevoestilo/ |

## Fotos

La ficha **no devolvió fotos** en la respuesta de Google (verificado el 16-10-2026):

```sh
node scripts/fetch-maps-photos.mjs salon-belleza-nuevo-estilo
# sin fotos en la respuesta
```

Por eso la web no tiene hero fotográfico ni galería (el componente `Galeria` no renderiza nada sin fotos): hero con tarjeta de enlace a la ficha y `og.jpg` generado como imagen de marca. En cuanto la ficha tenga fotos, basta re-ejecutar el script y cablearlas en `src/pages/index.astro`.

## Comandos

- `bun run dev` — servidor Astro local.
- `bun run test` — pruebas locales de datos y contenido.
- `bun run typecheck` — comprobación de TypeScript.
- `bun run build` — generar sitio estático.

La URL canónica (`https://salon-belleza-nuevo-estilo.vercel.app`) es provisional: cámbiala si el sitio se despliega en otro dominio, y actualiza también `public/robots.txt` y `astro.config.mjs`.
