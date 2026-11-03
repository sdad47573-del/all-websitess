---
title: "Spam en el formulario de tu web: cómo pararlo"
description: "Recibes decenas de mensajes basura al día: por qué llegan, qué filtros funcionan de verdad y cuáles espantan a tus clientes. Guía práctica."
pubDate: 2026-11-03
category: "Guías"
---

Si tienes un formulario de contacto, tienes spam. No es que tu web esté rota: hay bots que rellenan cualquier formulario que encuentren, y también humanos que ofrecen «posicionamiento SEO en 24 horas». El problema no es recibirlo, es **que te haga perder consultas reales** entre la basura o que te empuje a poner un captcha que espanta clientes.

## Cómo reconocer el spam (y el que no lo es)

- **Bots**: mensajes sin sentido, enlaces, asuntos genéricos, mismo texto repetido, remitente raro.
- **Vendedores**: «te posiciono en Google», «arreglo tu web», «facturación». Son humanos, pero no son clientes.
- **Pruebas**: alguien probando si el formulario funciona. No es spam, pero contesta por si acaso.
- **Consultas reales mal capturadas**: pocas palabras, sin datos de contacto. Antes de borrar, mira si hay un teléfono.

## Los filtros que funcionan, de menos a más

**1. Honeypot (campo trampa).** Un campo oculto que un humano no rellena y un bot sí. Si llega con contenido, se descarta. Cero fricción para el cliente y bloquea la mayoría del spam automático.

**2. Tiempo mínimo de envío.** Si el formulario se envía en menos de dos segundos, es un bot. Se implementa con una marca de tiempo oculta.

**3. Validación en servidor.** Comprobar formato, longitud y que el dominio del email exista. Muchos formularios validan solo en el navegador, y el bot se lo salta.

**4. Límite de envíos por IP.** Tres envíos por hora y por IP es razonable para un negocio local. Frena el spam sin bloquear a nadie normal.

**5. Pregunta sencilla en lenguaje natural.** «¿En qué ciudad está nuestro despacho?» funciona mejor que un captcha de imágenes y no excluye a nadie.

**6. Captcha solo si lo anterior falla.** Si lo pones, usa uno invisible. Un captcha que obliga a girar fotos pierde consultas reales, sobre todo en móvil.

**7. Filtro en el correo.** Reglas por palabra clave («SEO», «bitcoin», «casino») a una carpeta aparte. Es el último filtro, no el primero.

## Si ya te está inundando

1. **Cambia la dirección de destino** del formulario por un alias (`web@tudominio.es`) y filtra ahí. Así el correo principal sigue limpio.
2. **Revisa los registros** del hosting: si todos los envíos vienen de la misma IP o del mismo rango, bloquéala.
3. **Comprueba si el formulario guarda en base de datos.** Si es así, hay que limpiar también esos registros, no solo el correo.
4. **No borres el formulario.** Es la vía de contacto de quien no quiere llamar; quitarlo es resolver el síntoma destruyendo la solución.

## Lo que no deberías hacer

- **Poner un captcha imposible** en un formulario de tres campos. La fricción se la come el cliente.
- **Pedir el teléfono como obligatorio** para «filtrar». Filtra, sí: también a los que no quieren dar el móvil.
- **Responder al spam.** Confirma que tu correo existe y multiplica el volumen.
- **Guardar los datos de los bots.** No tienes base legal para conservarlos: bórralos y no los acumules. Tienes el marco en [qué cookies y datos usa una web](/blog/aviso-legal-cookies-web/).

## Cuándo el problema es otro

Si además del spam notas redirecciones, páginas raras o enlaces que no has puesto, no es spam: puede ser una intrusión. Empieza por [qué hacer si te han hackeado la web](/blog/web-hackeada-que-hacer/) antes de tocar los formularios.

Y si el formulario no llega a nadie (ni spam ni consultas), el problema es de configuración del correo, no de filtros: revisa [dominio, correo y hosting](/blog/dominio-hosting-negocios-guia/).

---

¿Tu formulario recibe más basura que consultas? [Cuéntanoslo](/#contacto) y lo dejamos con honeypot, límite de envíos y validación en servidor, sin captchas que espanten clientes. Si la web es nueva, mira antes la [checklist para lanzarla](/blog/checklist-lanzar-web-negocio/).
