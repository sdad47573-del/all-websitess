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

## Enlaces y canónicas

- El portfolio enlaza directamente al despliegue de cada web. No depende del
  proxy ni de un subdominio.
- Las 14 apps que conservan código fuente declaran en `astro.config.mjs` su
  despliegue real como `site`, que es lo que alimenta el sitemap, el canonical
  y el `og:url`. Necesitan un despliegue nuevo para publicar el cambio.
- Las 80 restantes solo tienen `dist/`, así que su canonical no se puede
  corregir desde este repositorio.

## Proxy por ruta (opcional)

`https://www.sur-digital.com/api/proxy/<slug>/…` sigue sirviendo la web del
cliente dentro del dominio principal, reescribiendo sus rutas absolutas y su
dominio. Las reglas públicas `/<slug>` de `vercel.json` reescriben a ese
endpoint, pero el despliegue actual de producción responde 404 en `/<slug>`:
hasta que se despliegue el `vercel.json` vigente, usa el despliegue del cliente
o `/api/proxy/<slug>/` directamente.

## Comprobar

```sh
curl -sI https://a-jalar.vercel.app | head -1
curl -sI https://adrizale.netlify.app | head -1
curl -sI https://a-jalar.sur-digital.com | head -1        # debe fallar: no hay DNS
curl -sI https://www.sur-digital.com/api/proxy/a-jalar | head -1
```
