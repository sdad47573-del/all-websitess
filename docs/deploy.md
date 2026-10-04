# Despliegue en Vercel

## El problema

Cada carpeta de `apps/` es su propio proyecto de Vercel, y los 144 están conectados a **este
mismo repositorio**. Un push llega a los 144 a la vez, así que un commit que toca una sola web
lanza 144 builds: 143 no cambian de código pero instalan dependencias y ejecutan `astro build`
enteramente.

Con un plan Hobby (1 build concurrente y 100 despliegues al día) eso agota la cuota y, además,
los builds inútiles encolan por delante de los que sí importan.

## La solución: `ignoreCommand`

Cada app tiene un `vercel.json` con:

```json
{
	"$schema": "https://openapi.vercel.sh/vercel.json",
	"ignoreCommand": "node ../../scripts/vercel-ignore-build.mjs"
}
```

Es el **Ignored Build Step** de Vercel. Antes de instalar nada, Vercel ejecuta ese script, que
compara los ficheros que cambiaron el commit con lo que necesita este proyecto. Si no toca esta
app ni lo que comparte con el resto, cancela el build.

El script **construye** cuando cambia cualquiera de estos sitios:

- `apps/<esta app>/`: su propio código.
- Los paquetes del workspace de los que depende (`workspace:*` en su `package.json`), sobre todo
  `packages/@astro-config` y `packages/@astro-components`, que usa casi todas las apps.
- Ficheros globales de resolución y configuración: `package.json`, `bun.lock`, `turbo.json`,
  `tsconfig.base.json` y `.npmrc`.

Y **se salta** el resto: `README`, `docs/`, `scripts/`, u otra app que no sea esta.

### Los códigos de salida están invertidos

En el Ignored Build Step, `0` significa **saltar** el build y `>= 1` significa **construir**. Es lo
contrario de la convención de Unix. Un script escrito al revés se traga todos los commits sin
avisar, y el síntoma es "Vercel no despliega nada" sin ningún error visible.

### Contra qué commit se compara

Se usa `VERCEL_GIT_PREVIOUS_SHA`, el commit del último despliegue de ese proyecto: es justo lo que
hay publicado y, por tanto, lo que hay que recompilar.

### Vercel clona sin historial: el SHA anterior hay que traerlo

Este es el punto que hizo que las 145 apps construyeran en cada push. Vercel siempre pone
`VERCEL_GIT_PREVIOUS_SHA` en el entorno, pero su clon viene con `--depth` y **casi nunca incluye
ese commit**. Si el script lo descarta por no encontrarlo en el clon, se queda sin base y recurre a
la ventana de commits, que incluye commits ya publicados.

El caso concreto: el commit que creó los 144 `apps/*/vercel.json` se colaba en esa ventana, y como
cada `vercel.json` vive dentro de su app, cada proyecto se veía "modificado" y construía.

Por eso el script **descarga el SHA antes de renunciar**, con dos intentos:

1. `git fetch --depth=10 origin <sha>`, que pide ese commit concreto.
2. `git fetch --deepen=10 origin <ref>`, que profundiza la ventana del branch por si el clon no lo
   trajo de origen.

Solo si ambos fallan (sin red, remoto caído) se usa la ventana de commits, que construye de más
pero nunca deja una web sin publicar.

Un fallo de git también construye: tratar un error como "sin cambios" publicaría websites
desactualizadas en silencio, que es el peor fallo posible en un filtro de despliegue.

### Cómo diagnosticar una build que no debería haber salido

El script imprime siempre la base usada, antes del veredicto:

```
base: 43e23b9… (VERCEL_GIT_PREVIOUS_SHA)
base: 43e23b9… (VERCEL_GIT_PREVIOUS_SHA (descargado))
base: HEAD~10 (ventana de commits (sin VERCEL_GIT_PREVIOUS_SHA))
```

- Si dice **ventana de commits**, el filtro no sabe qué hay publicado y construye de más. Es el
  estado en el que se está pagando el peaje de las 144 builds: hay que mirar por qué falla el
  `fetch` (red o remoto).
- Si dice **VERCEL_GIT_PREVIOUS_SHA**, el diff es exactamente lo publicado, así que un build
  disparado significa que ese diff toca la app: mirar los ficheros que lista con `--explain`.

Los logs de un build están en `vercel inspect <url-del-deployment> --logs`.

## Comprobarlo en local

El script se puede ejecutar tal cual lo ejecutará Vercel:

```sh
# desde la raíz del repo, simulando el proyecto de una app
VERCEL_PROJECT_ROOT_DIRECTORY=apps/a-fuego-braseria node scripts/vercel-ignore-build.mjs

# con el detalle de los ficheros que cambiaron
VERCEL_PROJECT_ROOT_DIRECTORY=apps/a-fuego-braseria node scripts/vercel-ignore-build.mjs --explain
```

El código de salida es el veredicto: `1` construye, `0` se salta.

## Añadir el filtro a una app nueva

Al crear una app hay que darle su `vercel.json`. Para hacerlo todas de una vez, o para refrescar
los ficheros existentes tras cambiar el comando:

```sh
node scripts/add-vercel-ignore-command.mjs --dry   # ver qué haría
node scripts/add-vercel-ignore-command.mjs         # aplicarlo
```

El generador **no sobrescribe** un `vercel.json` que ya tenga otras claves (`framework`,
`rewrites`, `buildCommand`...), porque eso podría romper el despliegue de ese proyecto: lo avisa
y lo deja intacto.

## Qué NO cubre

- **Vercel cuenta el build cancelado como despliegue.** El Ignored Build Step corre después de
  reservar hueco de build, así que sigue consumiendo cuota, aunque evita instalar dependencias y
  compilar. Para que el salto no cuente, Vercel ofrece "Skipping Unaffected Projects", que
  decide **antes** de reservar el hueco, pero se activa desde el panel de cada proyecto y solo
  funciona con repositorios de workspaces.
- **Un `vercel.json` por app es mucho fichero**, 144 en total. Es la forma que tiene Vercel de
  configuración por proyecto sin depender del panel, y se genera con un script, así que mantenerlo
  no cuesta.
- Si una web depende de algo que no está en la lista global y no es un paquete del workspace, no se
  detectará el cambio. Al añadir un paquete compartido hay que añadirlo a `GLOBAL_PATHS` en
  `scripts/vercel-ignore-build.mjs`.