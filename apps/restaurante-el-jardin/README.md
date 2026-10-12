# Restaurante El Jardín · web (Astro)

One-page para **Restaurante El Jardín**, cocina mediterránea en
Plaza Cavanna s/n, km 3 Gran Vía de La Manga, 30380 La Manga del Mar Menor
(Cartagena, Murcia).

- Coordenadas del enlace: 37.6568679, -0.7219862
- Tel: 968 56 31 70 · Móvil/WhatsApp: 659 63 69 54
- Horario orientativo: mar–dom desde 07:30 (lunes cerrado), todo el año
- Ficha Google Maps: ver enlace en `src/pages/index.astro` (`mapsUrl`)

## ⚠️ Fotos de Google Maps — NO descargadas a propósito

Las fotos de la ficha de Google pertenecen a sus autores y las condiciones de
Google Maps no permiten scrapearlas/descargarlas automáticamente. Por eso:

- La web usa **ilustraciones placeholder propias** en `public/fotos/*.svg`.
- Para fotos reales: sustituye esos 6 archivos por fotos **propias**
  (mismo nombre o actualiza `src/pages/index.astro`).
- Hay aviso visible en `#fotos` + botón «Ver fotos reales en Google Maps».

## Desarrollo

```bash
bun install
bun run --filter restaurante-el-jardin dev      # http://localhost:4321
bunx turbo run build --filter=restaurante-el-jardin
```

Componentes compartidos `@astro-components`
(Seo, Topbar, Chips, About, Menu, Visit, Faq, Footer).
Hero y galería propios para no requerir `astro:assets` ni fotos con derechos.

## Pendiente antes de publicar

- [ ] Sustituir `public/fotos/*.svg` por fotos propias.
- [ ] Cambiar `site` si hay dominio definitivo (astro.config, robots, canonical).
- [ ] Completar NIF/CIF, razón social y email en `aviso-legal.astro`.
- [ ] Confirmar horarios de cocina y menú del día con el local.
