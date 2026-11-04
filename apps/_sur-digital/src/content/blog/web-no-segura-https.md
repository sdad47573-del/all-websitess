---
title: "Tu web no es segura: HTTPS y el candado"
description: "Qué significa el aviso de «sitio no seguro», por qué caduca el certificado, cómo arreglarlo y cuánto cuesta. Guía para negocios locales."
pubDate: 2026-11-03
category: "Guías"
---

El aviso «No es seguro» en la barra del navegador es lo primero que ve un cliente antes de leer nada. Y no es un detalle estético: en cuanto aparece, la visita se ha perdido. El cliente potencial no llega al horario, ni a la carta, ni al botón de contacto.

La buena noticia es que casi siempre se arregla en una tarde y sin pagar el certificado. Estas son las causas, en el orden en que suelen aparecer.

## Qué es el candado (y qué no)

HTTPS significa dos cosas: que la conexión entre el navegador y el servidor va cifrada, y que el certificado del servidor está emitido para ese dominio concreto. Sirve para que nadie lea lo que un cliente escribe en un formulario, para que no se pueda suplantar tu web con una copia idéntica y para que los navegadores dejen de avisar.

Lo que **no** significa: que la web esté libre de malware, que cargue rápido o que esté bien posicionada. Son problemas distintos, con soluciones distintas: [qué hacer si tu web está hackeada](/blog/web-hackeada-que-hacer/) y [por qué una web lenta te cuesta clientes](/blog/pagespeed-negocios-locales/).

## Por qué aparece el aviso

Casi todos los casos son uno de estos cuatro:

**1. El certificado ha caducado.** Los certificados gratuitos se renuevan cada 90 días y los de pago, cada año. Si la renovación automática del hosting falla, la web sigue funcionando pero el navegador avisa. Es la causa más frecuente y la más barata de arreglar.

**2. No hay certificado instalado.** Pasa en dominios recién comprados o tras un cambio de hosting donde nadie activó el certificado del dominio nuevo.

**3. Contenido mixto.** La página se carga por HTTPS, pero alguna imagen, fuente o script se sigue pidiendo por HTTP. El navegador lo interpreta como una conexión a medias y marca el candado con un triángulo. Es la causa que más se escapa porque la página «parece» segura desde fuera.

**4. El certificado es de otro dominio.** Típico al migrar: el certificado sigue emitido para el dominio viejo, o para el dominio del proveedor, y el navegador comprueba el nombre y no coincide.

## Cómo comprobarlo en dos minutos

Abre tu web en el móvil, no solo en el ordenador:

1. Toca el candado (o el icono de aviso) junto a la dirección.
2. Comprueba si dice «La conexión es segura» o el motivo del aviso.
3. Entra en los detalles del certificado y mira para qué dominio está emitido y hasta cuándo vale.
4. Repite en dos o tres páginas interiores, sobre todo en la de contacto: ahí es donde se envía información.

Si el aviso solo aparece en algunas páginas, es contenido mixto o una imagen concreta. Si aparece en todas, es el certificado del dominio.

## El contenido mixto, con ejemplo

Un caso real: la home carga por HTTPS, pero la foto del equipo se subió hace años con la dirección completa `http://` y el navegador la bloquea o la marca. Lo mismo pasa con una tipografía de Google cargada desde el tema antiguo o con un reproductor incrustado.

La solución no es reinstalar el certificado: es cambiar esas direcciones a HTTPS o, mejor, a rutas relativas dentro de la propia web. Cuando el aviso desaparece al entrar en una página y en otra no, mira ahí.

## Cuánto cuesta tener HTTPS

El certificado en sí no se paga: los proveedores de hosting actuales lo incluyen gratis y lo renuevan solos. Lo que se paga es el hosting, y ahí sí conviene saber qué estás firmando.

En nuestros planes, dominio y hosting del primer año van incluidos en la [Web Completa](/precios/); a partir del segundo año son unos 60–90 € anuales, a tu nombre y pagados directo al proveedor. Si el certificado lo gestiona una agencia, pide que la renovación sea automática y comprueba la fecha una vez al año: un aviso rojo en plena campaña de Navidad no se recupera.

## HTTPS no es lo mismo que estar protegido

El candado protege el transporte, no el contenido. Una web con HTTPS puede estar desactualizada, sin copias de seguridad y con la misma contraseña en el correo y en el panel. La parte que evita sustos es el mantenimiento: actualizaciones, copias probadas, doble factor y usuarios mínimos. Está detallado en el [mantenimiento web sin permanencia](/blog/mantenimiento-web-20-euros-mes/).

Y si el dominio está en el aire, hay otra prioridad: [en qué fase está y cómo recuperarlo](/blog/dominio-caducado-o-perdido/) antes de que lo registre otro.

## Checklist para quitar el aviso

- [ ] El certificado está emitido para el dominio actual y no para otro.
- [ ] La fecha de caducidad está lejos y la renovación es automática.
- [ ] Ninguna imagen, fuente o script se pide por `http://`.
- [ ] La web redirige `http://` y `www` al dominio canónico con una sola versión.
- [ ] La página de contacto y el formulario cargan sin avisos.
- [ ] Tienes acceso al panel donde se gestiona el certificado, no solo la web.

---

Si el navegador está marcando tu web y no sabes de dónde viene, [escríbenos](/contacto/) con el dominio y te decimos qué está fallando antes de tocar nada. Y si lo que quieres es no volver a pensar en esto, mira [qué debe incluir un mantenimiento honesto](/blog/mantenimiento-web-20-euros-mes/).
