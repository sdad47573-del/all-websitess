# Floristería Hermanas Gómez · Ciudad Lineal · Madrid

Web informativa de una sola página (Astro, estática) con los datos y las fotos que
**Floristería Hermanas Gómez** publica en su ficha de Google Maps (consultada el
17 de octubre de 2026).

## Datos de la ficha

- **Nombre:** Floristería Hermanas Gómez · **Categoría:** Floristería
- **Dirección:** Avenida de Daroca, 90, 28017 Madrid (distrito de Ciudad Lineal)
- **Plus code:** C9G3+67 Madrid (completo 8CG9C9G3+67) · **Coords:** 40.4255114, -3.6467502
- **Ficha:** `0xd422f446163a4e5:0xda912ee5829af769` · `/g/1tgd7vhr` ·
  reseñas `ChIJ5aRjYUQvQg0RafeaguUukdo`
- **Teléfono:** 914 08 73 26 (`tel:+34914087326`) · **Sin web propia**
- **Valoración:** 4,5/5 con 54 reseñas; la vista previa no incluía los textos,
  así que no se reproduce ningún extracto
- **Horario:** de lunes a viernes de 9:30 a 18:00; sábado y domingo de 9:00 a 18:00
- **Accesibilidad:** la ficha no publica ningún dato
- **Descripción literal (con sus erratas):** «Empresa familiar que fue fundada en 1928,
  siendo la 3° generación de floristas.El género que ofrecemos es muy variado y siempre
  es de 1° calidad, somos cuatro hermanas que atendemos a nuestros clientes con agrado
  y simpatía, hacemos entregas a domicilio y también llevamos encargos a la sepultura
  de sus seres queridos, así como coronas o cualquier decoración que este relacionada
  con flores,como bodas, decoración de iglesias etc,nuestro teléfono es 91 4087326,
  trabajamos los 365 días del año. Esperamos poder estar a la altura de sus exigencias
  y formar parte de su agenda.» (texto completo en `site.ts`)
- **Fotos:** 10 de la portada de la galería de la ficha (`fetch-maps-photos`),
  5 verticales + 3 apaisadas + 1 panorámica + 1 vista, sin autor → sin atribución

Lo que la ficha no publica no se inventa: sin extractos de reseñas, sin accesibilidad,
sin catálogo ni precios. Todo vive en `src/data/site.ts`.

## Comandos

```bash
cd apps/hermanas-gomez
bun install
bun run dev      # desarrollo
bun run build    # build estático
```

## Pendiente antes de publicar

- Rellenar `LEGAL` en `src/data/site.ts` (razón social, NIF, email).
