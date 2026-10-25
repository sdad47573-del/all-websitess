# Restaurante Urumea el Kubano — Alto de los Robles, Donostia

Web estática en Astro para **Restaurante Urumea el Kubano**, bar restaurante en Alto de los Robles Kalea, 10 (20014 Donostia / San Sebastián, Gipuzkoa).

## Contenido

- Portada: hero, «La casa», lo que cuentan las reseñas, galería con las 10 fotos de Google Maps, horario con mapa, FAQ y aviso legal.
- `src/data/site.ts`: todos los textos y datos del negocio en un solo sitio.
- `src/assets/fotos/`: las fotos del perfil de Google Maps, con su `.maps-manifest.json`.
- `src/pages/aviso-legal.astro`: aviso legal, privacidad y cookies.

## Datos de la ficha de Google Maps

- Nombre: Restaurante Urumea el Kubano
- Nombre alternativo: Urumea Jatetxea el Kubano
- Dirección: Alto de los Robles Kalea, 10 · 20014 Donostia / San Sebastián (Gipuzkoa)
- Categoría: Bar restaurante
- Valoración: 4,5/5 con 123 reseñas
- Teléfono: 943 46 05 36
- Horario: de lunes a viernes 10:00–21:00; domingo 10:00–18:00; **sábado cerrado**
- Idiomas: español y euskera
- Etiqueta de Google: Brunch
- Reseñas citadas: comida casera preparada al momento, atención excelente, ambiente acogedor y precio razonable

La ficha **no publica carta, precios, correo, web propia ni descripción del local**. La sección de reseñas recoge solo lo que dicen las opiniones; el teléfono y la ficha de Google son los canales publicados.

## Pendiente antes de publicar

- NIF/CIF, razón social y correo del titular en `src/pages/aviso-legal.astro`.
- Dominio definitivo: ahora `https://restaurante-urumea-el-kubano.vercel.app`. Cambiarlo en `astro.config.mjs`, `public/robots.txt`, `BUSINESS.siteUrl` y el canonical del aviso legal.
- Confirmar con el local el horario y la carta antes de difundir la web.

## Comandos

```bash
bun install          # desde la raíz del monorepo
bunx astro dev       # desarrollo
bunx astro build     # genera dist/
bunx tsc -p tsconfig.json --noEmit
```

`astro check` no funciona en este repo porque usa TypeScript 7; se valida con `tsc`.

## Crédito

El pie de página enlaza a **Sur Digital** → https://sur-digital.vercel.app/
