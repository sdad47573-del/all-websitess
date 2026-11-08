# Imágenes — Laura Castro-Estudio de Belleza

## Descarga realizada

Se descargaron **10 fotos** de la portada de la galería de la ficha de Google Maps (`Laura Castro-Estudio de Belleza`, 37.8896107,-4.7971136, feature `0xd6cdfa932cefd69:0xa393a4925755c87f`) con:

```bash
node scripts/fetch-maps-photos.mjs laura-castro-belleza
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `laura-castro-belleza-vista-1-01.jpg` → portada / hero
- `-cuadrada-02`, `-apaisada-03/05.jpg`, `-vertical-04/06/07/08.jpg` → galería (8 usadas en `GALLERY`)
- `-vertical-09.jpg`, `-apaisada-10.jpg` → descargadas pero sin usar (reserva)
- `laura-castro-belleza-logo.svg` → marcador propio, por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 10 imágenes** (permiso por escrito del autor/negocio). Si no, sustitúyelas por fotos originales:

1. Pide al centro sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter laura-castro-belleza build`
