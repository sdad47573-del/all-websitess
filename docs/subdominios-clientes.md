# URLs de las webs de clientes

Cada web del portfolio se publica en su propio despliegue, no en un subdominio
de `sur-digital.com`:

- `https://<slug>.vercel.app`
- `https://<slug>.netlify.app`

La URL exacta de cada una está en la columna `web_actual` de
`docs/subdominios-clientes.csv`, que alimenta los enlaces del portfolio
(`apps/_sur-digital/src/data/portfolio.ts`) y el mapa
`apps/_sur-digital/src/data/proxy-origins.ts`. El dominio principal
`https://www.sur-digital.com` sirve el sitio de Sur Digital.

## Los subdominios `*.sur-digital.com` no existen

`a-jalar.sur-digital.com` (ni ningún otro `<slug>.sur-digital.com`) no
resuelve: el comodín `*.sur-digital.com` no está añadido al proyecto de Vercel
ni hay registro DNS. La columna `subdominio_previsto` del CSV guarda el nombre
reservado para cada web, pero **no es una URL publicable**: enlazar a ella da
error de DNS.

Por eso las reglas de reescritura por `Host` que había en
`apps/_sur-digital/vercel.json` se han retirado.

## Si algún día se configuran

Harían falta dos cosas para volver a tener `https://<slug>.sur-digital.com`:

1. **Vercel** → proyecto de `_sur-digital` → Settings → Domains → añadir
   `*.sur-digital.com`.
2. **DNS**: delegar el dominio a Vercel (`ns1.vercel-dns.com`,
   `ns2.vercel-dns.com`) o crear `* CNAME cname.vercel-dns.com.` y delegar
   `_acme-challenge.sur-digital.com` para el certificado comodín.

Después habría que regenerar en `vercel.json` una reescritura por subdominio
(`has: [{ type: "host", value: "<slug>.sur-digital.com" }]`) apuntando a la
columna `web_actual`, como las que había antes.

## Código fuente: 80 de las 96 no están en este repo

El proxy sirve 96 webs (`ORIGINS`), pero el repositorio solo contiene el código
de 16. Comprobado contra la columna `codigo_fuente` del CSV y con
`git ls-files` (8 nov 2026):

| Situación | Webs |
|---|---|
| `codigo_fuente=si` | 16 |
| · con `package.json` y script `build` | 14 |
| · con carpeta pero sin `package.json` | 2 |
| `codigo_fuente=no` | 80 |
| · sin carpeta en `apps/` | 17 |
| · con carpeta y sin `dist` (solo `node_modules`, `.turbo` o `.astro`) | 47 |
| · con `dist` | 16 |

Las 80 sin fuente no se pueden reconstruir desde aquí: su código vive fuera de
este repositorio. El proxy funciona porque pide el despliegue ya publicado en
cada visita, así que un cambio en una de ellas exige tocar su proyecto de
origen y volver a desplegarlo. Tampoco se pueden empaquetar en el build de
`_sur-digital`: no hay fuente que compilar, solo el despliegue en producción.

## Enlaces y canónicas

- El portfolio enlaza directamente al despliegue de cada web. No depende del
  proxy ni de un subdominio.
- Las 14 apps Astro con fuente declaran en `astro.config.mjs` su despliegue
  real como `site`, que es lo que alimenta el sitemap, el canonical y el
  `og:url`. Necesitan un despliegue nuevo para publicar el cambio.
- Las 80 sin fuente no se pueden tocar aquí, así que su canonical no se puede
  corregir desde este repositorio.

## Servir la web en el dominio principal

`https://www.sur-digital.com/<slug>/…` sirve la web del cliente dentro de
`sur-digital.com`: pide su despliegue, reescribe las rutas absolutas, los
`srcset`, los assets y su propio dominio, y devuelve la página con 200. La URL
no cambia, así que el cliente y su web se ven en el mismo dominio.

El enrutado vive en Astro, no en `vercel.json`:

- `src/pages/[...path].ts` atiende `/<slug>/…` y llama al proxy.
- `src/lib/proxy.ts` hace la descarga y la reescritura.
- `src/pages/api/proxy/[...path].ts` mantiene `/api/proxy/<slug>/…` como puerta
  de depuración para una web concreta.

Hubo 198 reglas `rewrites` por slug en `vercel.json` y no funcionaban: con
Astro, Vercel solo aplica esos rewrites a ficheros estáticos (su propia
documentación lo dice), y el resto se lo comía la ruta del 404 del adaptador.
Por eso se retiraron; si se vuelven a añadir, `/<slug>` seguirá dando 404.

El 404 del sitio (`src/pages/404.astro`) es on-demand a propósito: la ruta
catch-all le reescribe los slugs que no son de ningún cliente y Astro no
permite reescribir a una página prerenderizada.

## Comprobar

```sh
curl -sI https://a-jalar.vercel.app | head -1
curl -sI https://adrizale.netlify.app | head -1
curl -sI https://a-jalar.sur-digital.com | head -1        # debe fallar: no hay DNS
curl -sI https://www.sur-digital.com/api/proxy/a-jalar | head -1
```
