# Alimentación Asia · Mefistofeles · Málaga

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Alimentación Asia** publica en su ficha de Google Maps (consultada el 17 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Alimentación Asia · **Categorías:** Tienda de alimentación, Bazar
- **Dirección:** Calle Mefistofeles, 14, Local V, Teatinos-Universidad, 29006 Málaga
- **Plus code:** PG6P+2W Málaga · **Coords:** 36.7100316, -4.4626952
- **Ficha:** `ChIJ31eXOkP3cg0RujCTZHT3ANA` · `/g/11f34t0lsz`
- **Teléfono:** 365 68 32 12 (`tel:+34365683212`, tal como lo publica la ficha) ·
  **Sin web propia**
- **Valoración:** 2,8/5 con 11 reseñas; destaca 2 extractos literales (3 y 1/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** todos los días desde las 9:00; cierra a las 23:30 lun–jue y dom,
  y a las 23:45 vie–sáb
- **Accesibilidad:** acceso para sillas de ruedas disponible (única entrada que publica
  la ficha)
- **Descripción literal:** «Bazar del barrio»
- **Fotos:** 2 de la portada de la galería de la ficha (`fetch-maps-photos`), 1 panorámica
  y 1 apaisada, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/alimentacion-asia
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
