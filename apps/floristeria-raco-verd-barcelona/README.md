# Floristería Racó Verd Barcelona · Diputació · Barcelona

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Racó Verd Barcelona** publica en su ficha de Google Maps (consultada el 18 de octubre
de 2026).

## Datos de la ficha

- **Nombre:** Floristería Racó Verd Barcelona · **Categoría:** Floristería
- **Dirección:** Carrer de la Diputació, 222, Eixample, 08011 Barcelona
- **Plus code:** 95P6+JV Barcelona · **Coords:** 41.3865616, 2.1622224
- **Ficha:** `ChIJVWFNfYyipBIRXiYdoA69Wso` · `/g/11c6mb23kw`
- **Teléfono:** 652 84 36 17 (`tel:+34652843617`) · **Sin web propia**
- **Valoración:** 4,8/5 con 163 reseñas; destaca 3 extractos literales (5, 5 y 5/5),
  reproducidos tal cual y sin firma (el endpoint no trae el autor)
- **Horario:** lun–jue de 11:30 a 21:30; vie–sáb hasta las 22:00; dom de 11:30 a 15:00
- **Accesibilidad:** acceso disponible; sin aparcamiento adaptado
- **Descripción del titular:** la ficha no publica ninguna
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`), sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin catálogo ni precios. Todo vive en
`src/data/site.ts`.

## Comandos

```bash
cd apps/floristeria-raco-verd-barcelona
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
