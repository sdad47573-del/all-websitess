// Glosario "en cristiano": las palabras que se usan al vender una web,
// traducidas a una frase. Nadie tiene que fingir que entiende lo que firma, y
// además son búsquedas reales (SEO) que traen tráfico informativo.
//
// Los términos viven aquí (y no dentro de `Glosario.astro`) porque los usan dos
// sitios: la sección de la home y la página /glosario/. Con una sola lista no
// puede pasar que una diga un número de términos y la otra, otro.

export type Termino = { term: string; text: string; href?: string };

export const TERMINOS_BASE: Termino[] = [
  {
    term: "Dominio",
    text: "La dirección de tu web (tunegocio.es). Se registra a tu nombre, como el teléfono del negocio: es tuyo, no nuestro.",
    href: "/blog/dominio-hosting-negocios-guia/",
  },
  {
    term: "Hosting",
    text: "El alojamiento donde vive la web: un alquiler anual de 60–90€ que pagas directo al proveedor, sin recargos nuestros.",
    href: "/blog/dominio-hosting-negocios-guia/",
  },
  {
    term: "SEO",
    text: "Que Google te enseñe cuando alguien busca lo que vendes. No es magia: estructura, textos, velocidad y reseñas, por ese orden.",
    href: "/blog/que-es-el-seo-local/",
  },
  {
    term: "SEO local",
    text: "El mismo trabajo, pero para búsquedas de «cerca de mí»: tu barrio, tu ficha de Google Maps y tus reseñas.",
    href: "/blog/que-es-el-seo-local/",
  },
  {
    term: "Core Web Vitals",
    text: "Las notas con las que Google mide si tu web es rápida y no da saltos al cargar. Se miden en móvil, no en tu ordenador.",
    href: "/blog/pagespeed-negocios-locales/",
  },
  {
    term: "Responsive",
    text: "Que la web se adapte sola al móvil, la tablet y el ordenador. No es un extra: el 60% de tus visitas llegan desde el teléfono.",
  },
  {
    term: "Palabra clave",
    text: "Lo que tu cliente escribe en Google. «Peluquería en Carretera de Cádiz» es una; «marca personal» no le interesa a nadie.",
  },
  {
    term: "Kit Digital",
    text: "La subvención europea para digitalizar negocios. Nosotros no trabajamos con ella, y en el blog contamos por qué sin rodeos.",
    href: "/blog/kit-digital-que-cubre-y-que-no/",
  },
];

export const TERMINOS_EXTRA: Termino[] = [
  {
    term: "Landing page",
    text: "Una sola página pensada para una cosa: que el visitante te contacte. Es lo que regalamos como primera web, sin menús que despisten.",
  },
  {
    term: "HTTPS",
    text: "El candado de la barra del navegador. Sin él, Chrome avisa de que tu web «no es segura» y el visitante se va. Va incluido siempre.",
  },
  {
    term: "Sitemap",
    text: "El índice de tu web que le entregamos a Google para que sepa qué páginas tiene y cuáles son nuevas. Sin él, tardan más en encontrarte.",
  },
  {
    term: "Search Console",
    text: "La herramienta gratuita de Google donde se ve con qué búsquedas te encuentran y qué falla. Te dejamos el alta hecha y te enseñamos a leerla.",
  },
  {
    term: "Ficha de Google Business",
    text: "El perfil de tu negocio en Google Maps: horario, fotos, reseñas y botón de llamada. Es lo primero que ve quien busca «cerca de mí».",
    href: "/blog/ficha-google-business-optimizada/",
  },
  {
    term: "Analítica web",
    text: "Saber cuánta gente entra, de dónde viene y cuántos te escriben. Sin medir, cualquier decisión sobre la web es una apuesta a ciegas.",
    href: "/blog/checklist-lanzar-web-negocio/",
  },
  {
    term: "Reseñas de Google",
    text: "Lo que otros clientes dicen de ti en tu ficha de Maps. Es el empate que se rompe a tu favor cuando alguien compara tres negocios parecidos.",
    href: "/blog/conseguir-resenas-google/",
  },
  {
    term: "Google Ads",
    text: "Los anuncios de pago: apareces arriba hoy mismo y pagas por clic. Útil para comprar tiempo mientras el posicionamiento gratuito madura.",
    href: "/blog/cuanto-cuesta-google-ads-malaga/",
  },
  {
    term: "Datos estructurados",
    text: "La letra pequeña que le dice a Google qué eres (negocio local, preguntas frecuentes, artículo). Es lo que hace que tu resultado se vea más completo.",
    href: "/blog/ficha-google-business-optimizada/",
  },
  {
    term: "Conversión",
    text: "El momento en que un visitante hace lo que tú quieres: llamarte, escribirte o reservar. Una web con visitas y sin conversiones está fallando en algo.",
    href: "/blog/errores-web-negocio-local/",
  },
  {
    term: "Copia de seguridad",
    text: "Una foto de tu web guardada por si algo se rompe. Se hace sola y se puede volver atrás en minutos, sin perder textos ni precios.",
    href: "/blog/mantenimiento-web-20-euros-mes/",
  },
  {
    term: "Aviso legal",
    text: "El texto obligatorio donde dices quién eres y cómo se usan los datos de tu web. Sin él, tu formulario de contacto incumple la ley.",
    href: "/blog/aviso-legal-cookies-web/",
  },
  {
    term: "Carta digital con QR",
    text: "Tu carta online en una dirección que no cambia: el QR de las mesas apunta ahí siempre, cambies precios o platos. Se lee sin zoom y Google la indexa, cosa que con el PDF no pasa.",
    href: "/blog/web-bar-taberna-malaga/",
  },
  {
    term: "Pedido directo",
    text: "Que el cliente te pida a ti (WhatsApp o tu sistema) en vez de a una plataforma que se lleva hasta el 30%. Cada pedido directo es margen que no regalas.",
    href: "/blog/web-hamburgueseria-malaga/",
  },
  {
    term: "Encargo online",
    text: "El cliente deja su pedido (tartas, cochinillo de Navidad, medio cordero) con fecha y datos desde la web o WhatsApp. Ni un encargo perdido entre mensajes sueltos.",
    href: "/blog/web-carniceria-malaga/",
  },
  {
    term: "Carta de desayunos",
    text: "Tu oferta de mañanas (pitufos, molletes, tostadas) publicada donde se lee en el móvil, con precios y foto del desayuno estrella. Es lo que decide al cliente nuevo del barrio.",
    href: "/blog/web-cafeteria-malaga/",
  },
  {
    term: "hreflang",
    text: "La etiqueta que le dice a Google que una página tiene versión en otro idioma. Sin ella, la versión inglesa compite contra la española y pierden las dos.",
    href: "/blog/web-bilingue-negocio-costa-del-sol/",
  },
  {
    term: "301",
    text: "La redirección permanente: si una página cambia de dirección, el 301 lleva al visitante y a Google al nuevo sitio sin perder lo que habían ganado.",
    href: "/blog/rediseno-web-7-senales/",
  },
  {
    term: "CTA",
    text: "La llamada a la acción: el botón que quieres que pulsen («Pide cita», «Llámanos»). Si no hay uno claro por pantalla, la visita se va sin hacer nada.",
  },
  {
    term: "Wireframe",
    text: "El esqueleto de la web antes de diseñarla: qué va en cada bloque y en qué orden. Se cambia en minutos y evita rediseñar tres veces.",
  },
  {
    term: "Alt (texto alternativo)",
    text: "La descripción de una imagen para quien no la ve y para Google. No es «imagen1.jpg»: es «fachada del local en Calle El Agua».",
    href: "/blog/accesibilidad-web-negocios-locales/",
  },
];

export const TERMINOS: Termino[] = [...TERMINOS_BASE, ...TERMINOS_EXTRA];
