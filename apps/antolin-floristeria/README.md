# ANTOLÍN FLORISTERÍA (Antigua Lunaflor Floristería) · Avenida de Velázquez, Calle Vicente Aleixandre, 1 · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**ANTOLÍN FLORISTERÍA ( Antigua Lunaflor Floristería)** publica en su ficha de
Google Maps (consultada el 17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** ANTOLÍN FLORISTERÍA ( Antigua Lunaflor Floristería) · **Categoría:** Floristería
- **Dirección:** Avenida de Velázquez, Calle Vicente Aleixandre, 1, Carretera de Cádiz,
  Distrito Carretera de Cádiz, 29003 Málaga · **Plus code:** PH24+42 Málaga
- **Ficha:** `ChIJ3YGo6GL2cg0RBW+mS9T2JEQ` · `/g/11rkb6x00s`
- **Teléfono:** 630 36 60 62 (`tel:+34630366062`) · **Sin web propia** (no hay `sameAs` ni enlace web)
- **Valoración:** 4,5/5 con 105 reseñas · 3 extractos de 5 estrellas citados literales
- **Horario:** lun–vie 9:30–17:00, sáb 9:30–14:00, dom cerrado (confirmar por teléfono)
- **Accesibilidad:** acceso para sillas de ruedas disponible
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin descripción del titular, sin catálogo ni
precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/antolin-floristeria
bun install
bun run dev      # desarrollo
bun run build    # compila a dist/
bun run preview  # sirve dist/
```

## Refrescar fotos

```bash
node scripts/fetch-maps-photos.mjs antolin-floristeria
```

## Antes de publicar

Rellenar `LEGAL` en `src/data/site.ts` (titular, NIF, contacto, dirección) y confirmar
horario, teléfono y consentimiento de fotos con el titular. Despliegue igual que el resto
de apps del monorepo (Vercel o Netlify con base `apps/antolin-floristeria`).
