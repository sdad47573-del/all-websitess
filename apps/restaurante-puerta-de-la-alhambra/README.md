# Restaurante Puerta de la Alhambra · web (Astro)

Web de una sola página (one-page) para **Restaurante Puerta de la Alhambra**, restaurante de
tapas y cocina mediterránea y española en la calle Rauda, 2 (18008 Granada), junto a la Alhambra.

Pensada para SEO local: metadatos geográficos, JSON-LD `Restaurant` + `FAQPage`, contenido en
español orientado a búsquedas del tipo «restaurante Puerta de la Alhambra», «tapas en la
Alhambra», «comida en Granada centro» o «dónde comer cerca de la Alhambra».

## Desarrollo

```bash
# desde la raíz del monorepo
bun install
bun run --filter restaurante-puerta-de-la-alhambra dev      # http://localhost:4321
bun run --filter restaurante-puerta-de-la-alhambra typecheck
bun run --filter restaurante-puerta-de-la-alhambra build
bun run --filter restaurante-puerta-de-la-alhambra preview
```

El dominio provisional del `site` es `https://restaurante-puerta-de-la-alhambra-granada.vercel.app`:
**cámbialo en `astro.config.mjs`, `public/robots.txt`, `business.site` y en el canonical de
`src/pages/aviso-legal.astro`** cuando haya dominio definitivo.

## Estructura

```
public/
  favicon.svg
  og.svg            # ilustración vectorial original, no una foto del local
  robots.txt
src/
  assets/fotos/     # 10 fotografías de la ficha de Google Maps
  pages/index.astro # datos del negocio, JSON-LD y composición de las secciones
  pages/aviso-legal.astro
```

## Fotografías

Las diez imágenes de `src/assets/fotos/` se descargaron de la **galería de la ficha pública del
restaurante en Google Maps**, a 1600 px de lado largo. Las trae `scripts/fetch-maps-photos.mjs`
del repositorio:

```bash
node scripts/fetch-maps-photos.mjs --dry restaurante-puerta-de-la-alhambra   # solo informa
node scripts/fetch-maps-photos.mjs restaurante-puerta-de-la-alhambra         # descarga
```

El script lee el *feature id* (`0xd71e350ba653683:0xeb0c03316ccebfa4`) del enlace de Maps que ya
tenía la web, consulta el endpoint de datos de Maps y descarga la portada de la galería (10 fotos
por ficha; el endpoint no devuelve más sin sesión de navegador). Los ids de foto quedan guardados
en `src/assets/fotos/.maps-manifest.json` para que volver a ejecutarlo no descargue de nuevo lo
que ya está.

En `src/pages/index.astro` se importan con `astro:assets` y se renderizan con `<Image>` (AVIF,
`srcset`, `width`/`height` y `loading="lazy"`), de modo que los 6,2 MB de origen se sirven
convertidos y con varias resoluciones.

### Nota de procedencia

Las fotos están atribuidas en Google al propio **Restaurante Puerta de la Alhambra**, es decir, son
material que el negocio publica en su perfil. Aun así, **los derechos de las fotografías siguen
perteneciendo a sus autores**, y la galería lo indica al pie. Confirma con el titular que se permite
publicarlas y **sustitúyelas si pide retirarlas**.

A diferencia de otras webs del monorepo, aquí no se ha tenido que descartar ninguna foto de otro
negocio: la ficha solo contiene imágenes del propio restaurante.

### Pendiente de revisión visual

Los archivos se nombran por su **proporción** (`apaisada`, `vertical`, `cuadrada`), no por lo que
muestran, porque en el momento de la descarga no se pudieron inspeccionar una a una. **Antes de
publicar hay que:**

- [ ] Revisar las 10 fotos y renombrarlas con lo que depictan (`fachada`, `barra`, `tapa-…`), y
      reordenar la galería para que la mejor foto abra la sección.
- [ ] Ajustar los textos alternativos. Ahora son descriptivos pero genéricos
      (`Fotografía 1 de 10 del Restaurante Puerta de la Alhambra en Granada`): ninguno afirma qué se
      ve en la imagen porque no se han mirado.
- [ ] Descartar cualquier foto que no sea del local o que contenga caras de clientes sin permiso.

## Origen de los datos

| Dato | Fuente |
| --- | --- |
| Nombre y categorías (Bar restaurante, Restaurante) | ficha de Google Maps |
| Dirección: Av. Santa María de la Alhambra / calle Rauda, 2, 18008 Granada | ficha de Google Maps |
| Coordenadas: 37.1640279, -3.5720224 | enlace de Google Maps facilitado |
| CID: `0xd71e350ba653683:0xeb0c03316ccebfa4` | enlace de Google Maps |
| Teléfono: 958 16 47 01 | web del establecimiento |
| Horario 07:00–00:00 todos los días | web del establecimiento (octubre 2026) |
| Fotografías | galería de la ficha de Google Maps |

> **El horario no coincide.** Google Maps publica a día de hoy 07:00–22:30 de lunes a viernes,
> 07:00–16:30 el sábado y **domingo cerrado**, frente a los 07:00–00:00 de los siete días que
> declara la web del restaurante. La web mantiene lo que publica el negocio, pero conviene
> confirmarlo por teléfono y corregir `hours` en `src/pages/index.astro` si el nuevo horario es el
> bueno.

## Pendiente antes de publicar

- [ ] Sustituir el dominio provisional.
- [ ] Completar los datos legales (NIF/CIF y correo de contacto).
- [ ] Confirmar horario, carta y precios con el restaurante.
- [ ] Revisar la galería tal y como se detalla arriba.
- [ ] `public/og.svg` es una ilustración vectorial original. Si quieres que las redes muestren una
      foto real del local, genera `public/og.jpg` (1200×630) a partir de una de las imágenes y
      cambia `og:image` en `src/pages/index.astro`.