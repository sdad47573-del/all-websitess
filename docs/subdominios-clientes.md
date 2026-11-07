# Subdominios de clientes

Cada web del portfolio se publica en `https://<slug>.sur-digital.com`
(por ejemplo `https://a-jalar.sur-digital.com`). El dominio principal
`https://www.sur-digital.com` es el sitio de Sur Digital.

## Cómo funciona (sin un DNS por cliente)

El proyecto `_sur-digital` recibe un **dominio comodín** `*.sur-digital.com` y
enruta por `Host`: una petición a `<slug>.sur-digital.com/<ruta>` se reescribe
al despliegue real de ese cliente (`https://<slug>.vercel.app/<ruta>`).

Como cada web conserva su propio origen, sus rutas absolutas (`/_astro/…`,
`/og.jpg`, sitemap…) también se resuelven: la petición llega con el mismo host
y Vercel la reenvía al mismo destino. **No hay que reconstruir las 96 webs ni
tocarlas una a una.**

Las reglas están al principio de `rewrites` en
`apps/_sur-digital/vercel.json`, con `has: [{ type: "host", … }]`, y salen de
la columna `web_actual` de `docs/subdominios-clientes.csv`.

## Lo único que hay que configurar (2 registros, no 96)

1. **Vercel** → proyecto de `_sur-digital` → Settings → Domains → añadir
   `*.sur-digital.com`.
2. **DNS**, una de estas dos opciones:
   - **Delegar el dominio a Vercel**: cambiar en el registrador los
     nameservers por los que indique Vercel (`ns1.vercel-dns.com`,
     `ns2.vercel-dns.com`). Vercel crea y renueva el certificado comodín solo.
   - **Mantener tu DNS**: crear `* CNAME cname.vercel-dns.com.` y delegar
     `_acme-challenge.sur-digital.com` a Vercel para que pueda emitir el
     certificado comodín (lo exige Vercel para `*.dominio`).

No hay que añadir cada subdominio a su proyecto de Vercel/Netlify ni crear 96
CNAME.

## También por ruta, sin salir del dominio

`https://www.sur-digital.com/a-jalar` **sirve la web**, no redirige. Las 96
rutas (`/<slug>` y `/<slug>/…`) se reescriben en `vercel.json` al endpoint
`/api/proxy/<slug>/…`, que pide el despliegue original, reescribe sus rutas
absolutas (`/_astro/…`, `srcset`, CSS, JS) y las de su propio dominio
(canonical, `og:url`, JSON-LD) a `https://www.sur-digital.com/<slug>/` y
devuelve un 200. Por eso la web conserva fotos, estilos y scripts sin
reconstruirla y sin tocar su proyecto.

El mapa `slug → despliegue real` vive en
`apps/_sur-digital/src/data/proxy-origins.ts`, generado desde la columna
`web_actual` de `docs/subdominios-clientes.csv`. Los subdominios siguen
funcionando por su cuenta.

## Límites

- **El HTML es el del despliegue original**: su canonical, `og:url` y sitemap
  siguen apuntando al `.vercel.app` / `.netlify.app`. Las 14 apps que conservan
  `astro.config.mjs` ya declaran el subdominio, pero necesitan un despliegue
  nuevo; las **80 restantes no tienen código fuente** (solo `dist/`), así que
  eso no se puede corregir desde aquí.
- Un subdominio que no esté en la lista sirve el sitio principal.
- Si el despliegue original contesta con una redirección absoluta a su propio
  host, el navegador acabará en `.vercel.app` en esa ruta concreta.
- El comodín no puede compartirse con un subdominio asignado a otro proyecto
  de Vercel; `www` y el comodín van en el mismo proyecto.

## Comprobar

```sh
curl -sI https://a-jalar.sur-digital.com | head -1
curl -s https://a-jalar.sur-digital.com | grep -o '<link rel="canonical"[^>]*>'
curl -sI https://www.sur-digital.com/a-jalar | grep -i location
```
