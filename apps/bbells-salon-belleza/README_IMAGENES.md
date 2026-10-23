# Imágenes — B'bells Salón de Belleza

## Qué hay ahora

`src/assets/fotos/` contiene cuatro fotos de recurso de un salón de belleza,
descargadas de [Pexels](https://www.pexels.com/es-es/) (licencia gratuita, uso
comercial, sin atribución obligatoria):

| Archivo | Uso | Foto original |
| --- | --- | --- |
| `bbells-malaga.jpg` | portada / hero (fondo) | <https://www.pexels.com/photo/13068377/> |
| `bbells-salon.jpg` | sección «El salón» | <https://www.pexels.com/photo/16571735/> |
| `bbells-peluqueria.jpg` | hero (recuadro) | <https://www.pexels.com/photo/18367682/> |
| `bbells-estetica.jpg` | galería | <https://www.pexels.com/photo/12115040/> |

**No son fotos de este salón**: se usan como apoyo visual mientras no haya fotos
propias. Por eso los textos alternativos y la nota de la galería lo dicen
explícitamente y remiten a la ficha de Google Maps para ver el local real.
`bbells-logo.svg` es el logotipo de marcador y no se ha tocado.

## Por qué no se descargan las fotos de Google Maps

La ficha pública de Google Maps (`B'bells Salón de Belleza`,
36.6977613,-4.4552113) tiene fotos con derechos de autor y sus condiciones
prohíben descargarlas para reutilizarlas en otra web:

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

## Cómo poner fotos reales (2 minutos)

1. Pide al salón sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` con el mismo nombre base que la tabla de
   arriba (o cambia la ruta en `src/data/site.ts`).
3. Actualiza los textos alternativos de `Hero.astro`, `Salon.astro` y `GALLERY`
   en `src/data/site.ts`, y quita la nota de «imagen de recurso» de la galería
   y de la sección «El salón».
4. `bun run --filter bbells-salon-belleza build`

Recomendado: 1600 px de ancho para la portada, 1200–1400 px para el resto,
JPEG calidad ~82.
