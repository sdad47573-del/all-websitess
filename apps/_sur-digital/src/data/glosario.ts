// Términos que se suman al glosario de la home. En fichero aparte para no
// reescribir la lista original de `Glosario.astro`, que los añade con un spread
// al final.

export type Termino = { term: string; text: string; href?: string };

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
];
