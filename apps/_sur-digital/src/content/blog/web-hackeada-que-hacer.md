---
title: "Web hackeada: qué hacer en las primeras horas"
description: "Tu web redirige a otra cosa o Google la marca como pirateada: qué hacer en las primeras horas, en qué orden y cuánto cuesta no actuar. Guía 2026."
pubDate: 2026-11-03
category: "Guías"
---

Una web hackeada no siempre se cae. Lo normal es lo contrario: sigue online, pero hace cosas raras. Redirige a otra web, mete enlaces de casinos en el pie, manda correos desde tu dominio o desaparece de Google con un aviso de «sitio pirateado». Cuanto antes actúes, menos cuesta.

## Señales de que te han entrado

- Tu web redirige a otro sitio, sobre todo desde el móvil o desde Google.
- Aparecen páginas que tú no has creado (`/casino/`, `/viagra/`, `/wp-content/…`).
- El pie o el código tienen enlaces a farmacias o apuestas.
- Google muestra «Este sitio puede haber sido pirateado» en los resultados.
- Tus clientes reciben correos raros desde tu dominio.
- El hosting te avisa de consumo o tráfico anómalo.
- Entras al panel y hay usuarios administradores que no reconoces.

## Las primeras dos horas, en este orden

**1. No borres nada todavía.** La copia de seguridad y los registros son la única forma de saber qué pasó y de limpiar sin romper la web. Si borras, pierdes la prueba.

**2. Cambia las contraseñas desde otro dispositivo.** Correo del dominio, hosting, panel de la web, FTP, base de datos. Si el atacante tiene acceso al correo, puede recuperar cualquier otra cuenta.

**3. Avisa al hosting.** Muchos hosts tienen protocolo de emergencia y copias anteriores. Pregunta por la fecha exacta de la última copia limpia: es la pieza que decide la recuperación.

**4. Pon la web en mantenimiento o desconéctala.** Si está enviando spam o estafando a clientes, cada hora que sigue online es tuya. Un 503 temporal es mejor que una web que roba datos.

**5. Revisa Search Console.** Si Google ya detectó el problema, verás el aviso de seguridad y las URLs afectadas: es la lista de lo que hay que limpiar.

## Diagnóstico: por dónde suelen entrar

| Puerta | Cómo se cierra |
| --- | --- |
| Plugin, tema o CMS sin actualizar | Actualizar todo y eliminar lo que no uses |
| Contraseña débil o reutilizada | Contraseñas únicas + doble factor |
| Formulario o subida de archivos mal validada | Revisión del código y límites de subida |
| FTP o panel con acceso antiguo de un exempleado | Borrar usuarios y claves viejas |
| Hosting compartido comprometido | Aislar el sitio y revisar todas las cuentas |

Si no sabes por dónde entraron, no des por hecho que está limpio: el atacante suele dejar una puerta trasera (un archivo PHP, un usuario admin, una tarea programada).

## Cómo se limpia (sin milagros)

1. **Restaura la última copia limpia anterior al ataque.** Es más fiable que rascar archivo a archivo.
2. **Actualiza todo** antes de volver a abrir la web: núcleo, temas, plugins y credenciales.
3. **Revisa usuarios y permisos**: fuera administradores desconocidos.
4. **Busca archivos modificados** en las fechas del ataque (el hosting puede listarlos).
5. **Cambia todas las claves** otra vez al terminar, incluida la base de datos.
6. **Solicita revisión en Search Console** si hay aviso de seguridad. Hasta que Google valida la limpieza, el aviso puede seguir en los resultados.

## Cuánto cuesta no hacerlo

- **Clientes**: una web que redirige a una estafa quema la confianza en un día; recuperarla lleva meses.
- **Google**: el aviso de sitio pirateado hunde el CTR y puede tardar semanas en desaparecer.
- **Correo**: si tu dominio entra en listas negras, tus presupuestos empiezan a llegar a spam.
- **Datos**: si había formularios, puede haber una brecha con obligaciones de notificación (RGPD) que no puedes ignorar.

## Prevención que sí funciona

Doble factor en hosting y panel, actualizaciones automáticas, copias de seguridad diarias **probadas** (una copia que nunca se ha restaurado no sirve), pocos plugins, usuarios mínimos y un [certificado HTTPS en condiciones](/blog/web-no-segura-https/). Todo eso entra en un [mantenimiento honesto](/blog/mantenimiento-web-20-euros-mes/), y si tu web es lenta o está sin actualizar desde 2022, el riesgo es la mitad del problema: mira también [cuánto te cuesta una web lenta](/blog/pagespeed-negocios-locales/).

---

Si tu web está redirigiendo o Google la ha marcado, [escríbenos](/#contacto) y lo miramos antes de tocar nada. Y si estás a tiempo de prevenir, empieza por [revisar los errores que más se repiten](/blog/errores-web-negocio-local/).
