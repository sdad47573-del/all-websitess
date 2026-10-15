# Imágenes — Tamaya salón de belleza

## Descarga realizada

Se descargaron **10 fotos** de la portada de la galería de la ficha de Google Maps (`Tamaya salón de belleza`, 37.8973831,-4.7799044, feature `0xd6cdf6e06df607b:0xedcd6b6918374fe0`) con:

```bash
node scripts/fetch-maps-photos.mjs tamaya-salon-belleza
```

Quedan en `src/assets/fotos/` con el nombre que asigna el script y su id anotado en `.maps-manifest.json`, así que volver a ejecutarlo no las descarga de nuevo. Se sirven con `<Image>` de `astro:assets` (AVIF, `srcset` y `sizes`):

- `tamaya-salon-belleza-cuadrada-01.jpg` → portada / hero
- `-vertical-02/03/04/05/08.jpg`, `-cuadrada-06.jpg`, `-apaisada-07.jpg` → galería (8 usadas en `GALLERY`)
- `-vertical-09.jpg`, `-vista-10-10.jpg` → descargadas pero sin usar (reserva)
- `tamaya-salon-belleza-logo.svg` → marcador propio, por si hay que revertir

## Aviso legal (importante)

- [Condiciones de Google Maps / Google Earth](https://www.google.com/help/legalnotices_maps/): el contenido (incluidas fotos de usuarios) no puede copiarse ni reutilizarse sin permiso.
- [Política de Contenido Aportado por Usuarios de Google Maps](https://maps.google.com/localguides/rules/): cada foto sigue perteneciendo a su autor.

**Antes de publicar, confirma que el titular autoriza el uso de estas 10 imágenes** (permiso por escrito del autor/negocio). Si no, sustitúyelas por fotos originales:

1. Pide al centro sus fotos originales (JPG, con permiso por escrito).
2. Guárdalas en `src/assets/fotos/` y actualiza los imports en `src/data/site.ts`.
3. `bun run --filter tamaya-salon-belleza build`
