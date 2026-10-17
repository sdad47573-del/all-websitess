# La Sastrería de las Flores · Chamartín · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**La Sastrería de las Flores** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** La Sastrería de las Flores · **Categoría:** Floristería
- **Dirección:** Calle de Mantuano, 40, 28002 Madrid (distrito de Chamartín)
- **Plus code:** C8WF+MP Madrid (completo 8CG8C8WF+MP) · **Coords:** 40.4467015, -3.6756626
- **Ficha:** `0xd4229521bc01a57:0x3ccf3675cf36f960` · `/g/11q3sk6nvz` ·
  reseñas `ChIJVxrAG1IpQg0RYPk2z3U2zzw`
- **Teléfono:** 606 45 55 52 (`tel:+34606455552`) · **Sin web propia**
- **Valoración:** 4,7/5 con 12 reseñas; 2 extractos literales (5 y 1/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** la ficha no publica ninguno
- **Accesibilidad:** no hay aparcamiento adaptado para sillas de ruedas
  (la única entrada que publica la ficha, como no disponible)
- **Descripción literal (con sus erratas):** «Estudio de diseño floral. Decoración
  floral. Bodas y eventos. Envíos diarios de flores.» (texto completo en `site.ts`)
- **Fotos:** 6 de la portada de la galería de la ficha (`fetch-maps-photos`),
  3 verticales + 1 panorámica + 1 apaisada + 1 vista, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin horario, sin catálogo ni precios.
Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/sastreria-flores
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
