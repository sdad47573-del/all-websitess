# FLORS SENKA · Carrer de Falguera · Sant Feliu de Llobregat

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**FLORS SENKA** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** FLORS SENKA · **Categoría:** Floristería
- **Dirección:** Carrer de Falguera, 94, 08980 Sant Feliu de Llobregat (Barcelona)
- **Plus code:** 92MR+5F Sant Feliu de Llobregat · **Coords:** 41.3829829, 2.0412141
- **Ficha:** `0x12a49bb352a4aec5:0x8e76aeaf81ea9462` · `/g/1ptxjtc7d`
- **Teléfono:** 936 66 71 40 (`tel:+34936667140`) · **Sin web propia**
- **Valoración:** 4,6/5 con 43 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** dos turnos lun–vie (9:30–13:45, mar hasta las 13:30, y 17:00–20:00);
  sáb 9:15–14:00; dom 10:00–14:00
- **Accesibilidad:** la ficha solo publica una entrada: acceso para sillas de ruedas
  disponible
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), 8 verticales
  y 2 apaisadas, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flors-senka
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
