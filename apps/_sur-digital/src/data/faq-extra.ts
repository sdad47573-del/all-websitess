// Preguntas frecuentes añadidas después de las originales de `data.astro`.
//
// Viven en su propio fichero para no reescribir el array `DATA.faq`: `data.astro`
// las reparte con un spread al principio de la lista, así que la sección de la
// home y el JSON-LD (FAQPage) las incluyen solas.
//
// El `a` admite HTML: la sección lo pinta con `set:html`.

export type FaqItem = { q: string; a: string };

export const FAQ_EXTRA: FaqItem[] = [
  {
    q: "¿Cuánto tardo en ver el primer borrador?",
    a: `En <span class="font-bold">24–48 horas</span> desde la llamada de brief ya tienes navegable un primer borrador con tus textos y tus colores. No esperas semanas para saber por dónde va.`,
  },
  {
    q: "¿Cómo sé que la web va a traerme clientes?",
    a: `No prometemos posiciones ni ventas: prometemos la base que las hace posibles. La web sale con <span class="font-bold">formularios que llegan a tu móvil, analítica instalada y Search Console</span>, y te enseñamos cada mes de dónde vienen las visitas y los contactos.`,
  },
  {
    q: "¿Trabajáis con mi sector si no está en la lista?",
    a: `Sí. Las especialidades son las más habituales, pero la estructura se adapta a cualquier negocio: si el tuyo no aparece, cuéntanoslo y te preparamos la propuesta <span class="font-bold">sin compromiso</span>.`,
  },
  {
    q: "¿Qué pasa si no tengo textos ni fotos?",
    a: `Es lo más normal. Los textos los redactamos nosotros a partir de una entrevista de 20 minutos, y para las fotos te damos una guía de qué necesitamos. No hace falta que sepas escribir: hace falta que sepas lo que haces.`,
  },
  {
    q: "¿Puedo empezar con la landing gratis y ampliar después?",
    a: `Sí, es el camino recomendado: empiezas con la landing gratis, mides cómo responde y amplías con páginas de servicio cuando el negocio lo pida. Cada página extra son <span class="font-bold">60€</span>, con el mismo diseño y la misma velocidad.`,
  },
  {
    q: "¿Hacéis la web en varios idiomas?",
    a: `Sí. En Málaga es habitual que un negocio reciba turistas o clientes extranjeros: preparamos la web en español y en inglés (y añadimos un tercer idioma si lo necesitas) con los mismos textos adaptados, no traducidos a máquina.`,
  },
  {
    q: "¿Puedo conectar las citas o reservas a mi calendario?",
    a: `Sí: el formulario de cita puede avisarte por correo y por WhatsApp al momento, y enlazamos tu calendario o tu software de reservas para que las plazas se bloqueen solas en un solo sitio.`,
  },
  {
    q: "¿Me ayudáis con el blog y el contenido?",
    a: `Sí: redactamos los artículos del blog y las páginas de servicio a partir de una entrevista. También decidimos juntos qué temas merecen la pena, que es lo que de verdad trae visitas. Publicar contenido nuevo entra en el mantenimiento de <span class="font-bold">49€/mes</span>.`,
  },
  {
    q: "¿Qué pasa si el negocio cambia de nombre, teléfono o dirección?",
    a: `Lo actualizamos nosotros: web, ficha de Google, datos estructurados y enlaces. Son cambios que, mal hechos, desconectan la web de tu ficha y hacen perder posiciones, así que los revisamos siempre juntos.`,
  },
  {
    q: "¿Cómo protegéis la web y las copias de seguridad?",
    a: `Cada web sale con copias automáticas: si algo se rompe, se vuelve a la versión anterior en minutos y sin perder textos ni precios. En el mantenimiento revisamos además la seguridad y las actualizaciones.`,
  },
  {
    q: "¿La web sirve para un bar con carta que cambia cada día?",
    a: `Sí, es justo el caso de la <span class="font-bold">carta digital con QR</span>: cambias la tapa del día o un precio y el QR de las mesas sigue apuntando al mismo sitio, siempre actualizado. Tienes el ejemplo en <a class="link link-primary font-bold" href="/web-para-bares/">nuestra propuesta para bares y tabernas</a>.`,
  },
  {
    q: "¿Puedo recibir pedidos o encargos sin pagar comisiones?",
    a: `Sí. La web incluye el <span class="font-bold">pedido directo por WhatsApp</span> con mensaje pre-rellenado: el cliente te escribe a ti y te ahorras el porcentaje de las plataformas. Vale para burgers, encargos de carnicería o tartas de cafetería.`,
  },
  {
    q: "¿Hacéis webs para comercios de alimentación?",
    a: `Sí: carnicerías, charcuterías y tiendas de barrio con catálogo de producto, fotos del mostrador y encargos por WhatsApp. Mira <a class="link link-primary font-bold" href="/web-para-carnicerias/">la propuesta para carnicerías</a> y <a class="link link-primary font-bold" href="/especialidades/">todas las especialidades</a>.`,
  },
  {
    q: "¿Cuándo puedo contactar y cuánto tardáis en responder?",
    a: `Atendemos de lunes a jueves de 10:00 a 20:00 y los viernes de 10:00 a 15:00. Por LinkedIn respondemos <span class="font-bold">el mismo día laborable</span>; si escribes en fin de semana, el lunes a primera hora.`,
  },
];
