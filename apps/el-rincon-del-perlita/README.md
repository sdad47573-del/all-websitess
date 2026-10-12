# El Rincón del Perlita · web (Astro)

One-page para **El Rincón del Perlita**, bar con terraza en Calle Honda 29
(esq. Plaza San Francisco), casco antiguo de Cartagena 30201.

- Coordenadas: 37.6019041, -0.9847265
- Tel: 868 09 03 22
- Horario orientativo: todos los días 9:00–1:00 (vie/sáb hasta 1:30)
- Ficha Google Maps: https://www.google.com/maps/place/EL+RINC%C3%93N+DEL+PERLITA/@37.6019041,-0.9847265,17z/

## ⚠️ Fotos de Google Maps — NO descargadas a propósito

Las fotos de la ficha de Google pertenecen a sus autores y las condiciones de
Google Maps no permiten scrapearlas/descargarlas automáticamente. Por eso:

- La web usa **ilustraciones placeholder propias** en `public/fotos/*.svg`.
- Para poner fotos reales: sustituye esos 6 archivos por fotos **propias**
  (mismo nombre o actualiza `src/pages/index.astro`) en JPG/AVIF optimizado.
- Si eres el titular y tienes derechos sobre alguna foto de Maps, súbela tú
  o pide permiso al autor antes de publicarla.
- Hay un aviso visible en la sección `#fotos` y un enlace a «Ver fotos reales
  en Google Maps» en lugar de hotlinking.

## Desarrollo

```bash
bun install
bun run --filter el-rincon-del-perlita dev      # http://localhost:4321
bun run --filter el-rincon-del-perlita check
bun run --filter el-rincon-del-perlita build
```

Usa los componentes compartidos `@astro-components`
(Seo, Topbar, Chips, About, Menu, Visit, Faq, Footer). El hero y la galería
son propios para no requerir `astro:assets` ni fotos con derechos.

## Pendiente antes de publicar

- [ ] Sustituir `public/fotos/*.svg` por fotos propias (terraza, Despeinás, cervezas, burguer, tapas, exterior).
- [ ] Cambiar `site` en `astro.config.mjs`, `robots.txt` y canonical si hay dominio definitivo.
- [ ] Completar NIF/CIF, razón social y email en `aviso-legal.astro`.
- [ ] Confirmar horario y teléfono (868 09 03 22) con el local.
- [ ] Generar `og.png` definitivo desde `og.svg` si se quiere imagen raster para redes.
