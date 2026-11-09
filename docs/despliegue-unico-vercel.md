# Un solo proyecto: Sur Digital con todas las landings dentro

Las webs de los clientes ya no son proyectos de `apps/`. Su código vive en
`apps/_sur-digital/src/apps/<slug>` y sus ficheros públicos en
`apps/_sur-digital/public/<slug>`, así que **entran directamente en el build de Sur Digital** y se
sirven en `https://www.sur-digital.com/<slug>/`. No hay que compilar cientos de apps ni reescribir
rutas después del build.

## Cómo funciona

1. `scripts/vercel-single-project/build.mjs` compila `sur-digital` con turbo (los paquetes
   compartidos `@astro-config` y `@astro-components` se construyen antes, por el `dependsOn` de
   `turbo.json`).
2. Copia `apps/_sur-digital/dist` a `dist-single/`, que es el `outputDirectory` del `vercel.json`
   de la raíz.
3. Cada landing sale del propio Astro:
   - `src/pages/[slug].astro` genera la portada de cada web de `src/apps/<slug>/pages/index.astro`.
   - `src/pages/[slug]/[...rest].astro` genera sus subpáginas estáticas (`aviso-legal`, `servicios`…).
   - Los assets de `public/<slug>/` se sirven tal cual, y las fotos de
     `src/apps/<slug>/assets/` las optimiza `<Image>` en el build.
   - El `siteUrl` de cada web apunta a `https://www.sur-digital.com/<slug>`, que es lo que usan
     canonical, Open Graph, sitemap y JSON-LD.

## Ponerlo en marcha en Vercel

1. **Import Project** del repositorio.
2. **Root Directory**: la raíz del repositorio. No `apps/_sur-digital`: el `vercel.json` de la
   raíz es el que trae el comando de build y el directorio de salida.
3. **Framework Preset**: Other. El `vercel.json` ya fija `framework: null`, el comando de build y
   `outputDirectory: dist-single`.
4. Desplegar. El dominio del proyecto es el dominio de todas las webs.

El comando de instalación es `bun install --frozen-lockfile`.

## Añadir o cambiar una landing

No se crea ningún proyecto nuevo. Basta con:

- `apps/_sur-digital/src/apps/<slug>/pages/index.astro` (y sus `data/`, `styles/`, `assets/`),
- `apps/_sur-digital/public/<slug>/` para `favicon.svg`, `og.jpg` y demás ficheros públicos,
- `siteUrl: 'https://www.sur-digital.com/<slug>'` en `src/data/site.ts`,
- enlaces internos con el prefijo `/<slug>/…`.

Astro descubre la portada y las subpáginas con `import.meta.glob`: no hay listas que mantener.

## Desarrollar y comprobar en local

```sh
# desarrollo del sitio con todas las landings
cd apps/_sur-digital && bun dev

# build completo + copia a dist-single/
bun run build:single

# servirlo como lo hará Vercel
bun run preview:single
# http://localhost:4321/<slug>/
```

## Qué NO cubre

- **Proyectos con backend**: `cms`, `vigia-proyecto` y las apps de React que siguen en `apps/` no
  forman parte de este build estático.
- **El tiempo de build**: medido en local, cada landing tarda unos 17 s por la optimización de
  sus ~10 fotos a AVIF en varios tamaños. Las ~1.280 landings de una vez son varias horas, muy por
  encima de los **45 minutos** que permite Vercel por despliegue. Para publicar hay que reducir ese
  coste (menos anchos o formatos por imagen, caché de imágenes) o repartir el portfolio: ya no
  existe la variable `APPS` que filtraba proyectos, así que la división tendría que hacerse en el
  propio Astro.
