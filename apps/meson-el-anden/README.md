# Mesón El Andén · web (Astro)

One-page para **Mesón El Andén**, bar de tapas y restaurante en
C. Monte San Juan 13-15, Canteras, 30394 Cartagena (Murcia).

- Coordenadas del enlace: 37.6135044, -1.0248441
- Tel: 968 51 67 27 · IG @mesonelandenct · FB mesonelanden
- Horario (ficha pública 2026): lun–sáb 11:30–17:00, dom cerrado
- Ficha Google Maps: ver `mapsUrl` en `src/pages/index.astro`

## ⚠️ Fotos de Google Maps — NO descargadas a propósito

Las fotos de la ficha pertenecen a sus autores y las condiciones de Google
Maps no permiten extraerlas automáticamente. La web usa **ilustraciones
placeholder propias** en `public/fotos/*.svg`: sustitúyelas por fotos
**propias** (mismo nombre) y reconstruye. Hay aviso en `#fotos` + botón a
«Ver fotos reales en Google Maps».

## Desarrollo

```bash
bun install
bun run --filter meson-el-anden dev      # http://localhost:4321
bunx turbo run build --filter=meson-el-anden
```

Componentes `@astro-components` (Seo, Topbar, Chips, About, Menu, Visit,
Faq, Footer). Hero y galería propios para no requerir `astro:assets`.

## Pendiente antes de publicar

- [ ] Sustituir `public/fotos/*.svg` por fotos propias.
- [ ] Dominio definitivo (astro.config, robots, canonical).
- [ ] NIF/CIF, razón social y email en `aviso-legal.astro`.
- [ ] Confirmar carta y horarios con el local.
