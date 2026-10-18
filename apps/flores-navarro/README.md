# Flores Navarro · València · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Flores Navarro** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Flores Navarro · **Categoría:** Floristería
- **Dirección:** Carrer de València, 320, Eixample, 08009 Barcelona
- **Plus code:** 95W8+5R Barcelona · **Coords:** 41.3953809, 2.1671102
- **Ficha:** `ChIJG-pEcuyipBIRSy1bGY4EZJE` · `/g/1tj5ss41`
- **Teléfono:** 934 57 40 99 (`tel:+34934574099`) · **Web propia:** https://www.floresnavarro.com/
- **Valoración:** 4,3/5 con 6.280 reseñas; destaca 3 extractos literales (4, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–sáb de 7:00 a 21:00; dom de 8:00 a 15:00
- **Accesibilidad:** acceso disponible; sin aparcamiento adaptado
- **Descripción del titular:** tradición desde 1956 con parada en el Mercat de la Concepció abierta todos los días del año (literal en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/flores-navarro
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
