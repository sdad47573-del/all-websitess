---
title: "Correo profesional con tu dominio"
description: "Por qué info@tunegocio.com vende más que un Gmail, cómo se monta sin perder correos y qué revisar (SPF, DKIM y DMARC) para que no caigan en spam."
pubDate: 2026-11-03
category: "Guías"
faq:
  - q: "¿Puedo seguir usando mi Gmail para el negocio?"
    a: "Puedes, pero no es recomendable: las facturas, los presupuestos y la recuperación de la ficha de Google deberían ir con un correo del dominio que sea tuyo."
  - q: "¿El correo va incluido en el hosting?"
    a: "Casi todos los hostings incluyen buzones, pero quedan atados a ese proveedor. Un proveedor de correo independiente te permite cambiar de hosting sin tocar las direcciones."
  - q: "¿Qué pasa si cambio de proveedor de correo?"
    a: "Se exportan los buzones y se cambian los registros MX del dominio. Bien hecho no se pierde ningún mensaje; el riesgo está en no tener acceso al DNS."
  - q: "¿Hace falta configurar SPF, DKIM y DMARC?"
    a: "Sí, si quieres que los correos lleguen a la bandeja de entrada y no a spam. Se configuran una vez en el DNS y conviene comprobarlos tras cualquier cambio de proveedor."
---

Hay negocios con una web impecable que siguen respondiendo desde una dirección de Gmail con números. El cliente no lo dice, pero lo ve: una dirección propia es la diferencia entre «una empresa» y «alguien que hace cosas». Y hay un problema más caro que la imagen: si pierdes el acceso a ese correo, pierdes el historial, las facturas y la recuperación de todas tus cuentas.

## Qué cambia con info@tudominio.com

- **Confianza.** El cliente compra a quien parece estable. Y con el correo pasan las facturas, los presupuestos y las reservas.
- **Propiedad.** El correo va con tu dominio, que es tuyo. Si cambias de agencia o de hosting, se puede mover.
- **Recuperación de cuentas.** La ficha de Google, la web y las herramientas se recuperan con ese correo. Si está a nombre de otra persona, no es tu cuenta.
- **Verificación.** Google Business y Search Console verifican por correo del dominio con más facilidad que con una cuenta personal.

Lo mínimo razonable: un buzón principal para ti, un alias para «info» o «reservas», y una copia que puedas exportar.

## Cómo se monta (sin tecnicismos)

El correo no lo da el dominio: lo da un proveedor de correo. Hay tres caminos:

1. **El correo que incluye tu hosting.** Lo más barato y lo más cómodo al principio. La pega: si cambias de hosting, te llevas el correo contigo o lo pierdes, según cómo lo hayas montado.
2. **Un proveedor independiente** (Google Workspace, Microsoft 365 y similares). El correo deja de depender del hosting, gana herramientas y cuesta una cuota por buzón y mes.
3. **Un buzón básico del registrador.** Suficiente para una persona, incómodo cuando entran dos.

En los tres casos se cambian los registros MX del dominio, que son los que dicen a internet dónde entregar los mensajes. Es un cambio de cinco minutos que hace el proveedor; el riesgo no está ahí, está en no tener acceso al panel del dominio. Si el dominio lo gestiona una agencia, pide que te añada como contacto técnico: [cómo hacer el traspaso sin perder nada](/blog/cambiar-de-agencia-web-sin-perder-google/).

## Los tres registros que deciden si llegas

Cuando mandas un presupuesto y el cliente no contesta, a veces no es que pase de ti: es que el mensaje se ha ido a spam. Hay tres registros en el DNS que lo explican:

- **SPF**: dice qué servidores pueden enviar correo en nombre de tu dominio.
- **DKIM**: firma cada mensaje para que se pueda comprobar que no lo han manipulado.
- **DMARC**: le dice al receptor qué hacer si un mensaje no cumple lo anterior.

No hace falta saber configurarlos, pero sí exigir que estén: un correo profesional sin ellos acaba en spam con más frecuencia, sobre todo si envías a clientes con Gmail o Outlook. Pídeselo a quien monte el correo y compruébalo con un test de autenticación.

## La migración: aquí se pierde la gente

Si el correo actual está en el hosting o en una cuenta que no controlas:

1. **Exporta los buzones** antes de tocar el DNS (archivo de correo o copia del proveedor).
2. **Crea primero los buzones nuevos** y comprueba que reciben.
3. **Cambia los MX** en el panel del dominio, uno a uno.
4. **Avisa a los clientes habituales** de la dirección nueva durante un mes, con reenvío desde la antigua.
5. **Revisa a los 7 días**: correo entrante, saliente, carpetas y firmas.

El error clásico es cambiar el hosting con el correo dentro sin exportar: los mensajes nuevos llegan, los antiguos ya no están. Y si trabajas con formularios, comprueba que el envío de la web sigue saliendo (y que no acaba en spam): [qué hacer con el spam de los formularios](/blog/spam-formularios-web-como-evitarlo/).

## Errores que se repiten

- **Responder desde Gmail «en nombre de»** el dominio: los clientes ven la dirección rara y algunos correos se marcan como sospechosos.
- **No tener copia de seguridad del correo.** El histórico es documentación del negocio: facturas, presupuestos, acuerdos.
- **Un solo buzón para todo** sin alias ni acceso compartido: cuando alguien está de vacaciones, el negocio se para.
- **No saber quién tiene el DNS.** Sin acceso al panel del dominio no puedes arreglar nada, ni el correo ni la web.
- **Contratar el correo y olvidar el renovado.** Una cuenta caducada rebota los mensajes y el cliente no recibe respuesta.

## Cuánto cuesta

El correo se cobra por buzón y mes, y no lo cobra el registrador: pide el precio anual y compara. Un negocio de una o dos personas no necesita el plan más completo: necesita un buzón bien montado, alias para las direcciones públicas y una copia exportable. Y no pagues por almacenamiento que no vas a usar.

El dominio y el hosting van por otro lado: están explicados en [la guía de dominio y hosting](/blog/dominio-hosting-negocios-guia/), con lo que cuestan de verdad y los errores al contratarlos.

## Checklist antes de dar el salto

- [ ] El dominio está a tu nombre y tienes acceso al DNS.
- [ ] Existe un buzón principal y alias para info, reservas o facturas.
- [ ] SPF, DKIM y DMARC están configurados.
- [ ] Los buzones antiguos están exportados.
- [ ] El correo entrante y el saliente se prueban con un cliente real.
- [ ] La web envía los formularios a una dirección que lees.

---

Si tu correo depende de una cuenta que no controlas, [escríbenos](/contacto/) y te decimos qué pedir y en qué orden. Y si la web está en la misma situación, empieza por [los errores que más se repiten](/blog/errores-web-negocio-local/).
