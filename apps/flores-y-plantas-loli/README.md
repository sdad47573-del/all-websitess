# Flores Y Plantas Loli · Calle Escritor Jiménez Lora, 15 · Córdoba

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Flores Y Plantas Loli** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Flores Y Plantas Loli (tal como lo publica la ficha) · **Categoría:**
  Floristería
- **Dirección:** Calle Escritor Jiménez Lora, 15, Sureste, 14014 Córdoba
- **Plus code:** V6QR+XF Córdoba · **Coords:** 37.8899581, -4.7587911
- **Ficha:** `ChIJF2RZfI_fbA0R2T3QJNZr5Gc` · `/g/1vm7ctpd`
- **Teléfono:** 957 25 14 20 (`tel:+34957251420`) · **Sin web propia**
- **Valoración:** 4,8/5 con 170 reseñas (sin extractos literales en el endpoint)
- **Horario:** dos turnos lun–vie (9:30–14:00 y 17:30–20:00); sáb 9:30–14:00;
  dom cerrado
- **Accesibilidad:** la ficha no publica ningún dato
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 2 apaisadas
  y 8 verticales, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción, sin catálogo ni precios. Todo
vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/flores-y-plantas-loli
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs flores-y-plantas-loli
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/flores-y-plantas-loli`).
