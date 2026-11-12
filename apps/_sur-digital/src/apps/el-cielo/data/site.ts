/**
 * Datos de El Cielo (C. de Fúcar, 4 · Barrio de las Letras · 28014 Madrid).
 *
 * Fuentes públicas consultadas el 12 de noviembre de 2026:
 * - Ficha de Google Maps: 40.4123415, -3.6957058, feature
 *   0xd422629ce881633:0x63bbabd0e44c556d. De ahí salen el nombre, la dirección,
 *   el teléfono 914 20 44 65, la categoría «Restaurante de comida para llevar»,
 *   la nota 4,7 con 191 reseñas y el horario semanal. La ficha no publica web
 *   propia (muestra «Añadir sitio web»).
 * - Fotografías del perfil público del local: la fachada roja con el rótulo
 *   «el cielo», los carteles de «tienda · shop» y «para llevar · take away», la
 *   vitrina con las bandejas y las etiquetas escritas a mano, y varios platos.
 * - Reseñas públicas de TripAdvisor (10 opiniones): describen el local como
 *   comida para llevar «casera y sana» y mencionan encargos de tortillas.
 *
 * Lo que esta web NO inventa: no hay carta con precios publicada en la ficha ni
 * web del local, así que no se copian tarifas ni se promete reparto. El horario
 * es el que publica Google, con el viernes partido en dos tramos.
 */

export const BUSINESS = {
  name: 'El Cielo',
  fullName: 'El Cielo · Comida para llevar',
  shortName: 'El Cielo',
  mark: 'C',
  street: 'C. de Fúcar, 4',
  city: 'Madrid',
  region: 'Comunidad de Madrid',
  postalCode: '28014',
  locality: 'Barrio de las Letras',
  country: 'ES',
  phone: '914 20 44 65',
  phoneHref: 'tel:+34914204465',
  siteUrl: 'https://www.sur-digital.com/el-cielo',
  googleCategory: 'Restaurante de comida para llevar',
  tagline: 'Comida casera para llevar en el Barrio de las Letras, Madrid',
  description:
    'El Cielo, tienda de comida casera para llevar en C. de Fúcar, 4 (Barrio de las Letras, 28014 Madrid). Vitrina de platos preparados, teléfono 914 20 44 65 y horario de la ficha de Google Maps. Web informativa no oficial.',
} as const;

export const MAPS = {
  place:
    'https://www.google.com/maps/place/El+Cielo/@40.4123415,-3.6957058,17z/data=!3m1!4b1!4m6!3m5!1s0xd422629ce881633:0x63bbabd0e44c556d!8m2!3d40.4123415!4d-3.6957058!16s%2Fg%2F1ptxfnbl5?authuser=0&hl=es&entry=ttu',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4123415%2C-3.6957058',
  embed: 'https://maps.google.com/maps?q=40.4123415,-3.6957058&z=17&hl=es&output=embed',
} as const;

/** Valoración publicada en la ficha. */
export const RATING = {
  value: 4.7,
  label: '4,7',
  count: 191,
} as const;

export const HOURS = [
  { day: 'Lunes', value: '12:30–21:00' },
  { day: 'Martes', value: '12:30–21:00' },
  { day: 'Miércoles', value: '12:30–21:00' },
  { day: 'Jueves', value: '12:30–21:00' },
  { day: 'Viernes', value: '12:30–16:30 · 18:30–21:00' },
  { day: 'Sábado', value: '12:30–15:30' },
  { day: 'Domingo', value: 'Cerrado', closed: true },
] as const;

export const SERVICIOS = [
  'Comida casera',
  'Para llevar',
  'Platos del día',
  'Pasta y guisos',
  'Ensaladas',
  'Horno y tartas',
  'Barrio de las Letras',
  'Pedidos por teléfono',
];

export const HIGHLIGHTS = [
  {
    title: 'La vitrina',
    text: 'Bandejas de pasta, pollo, guisos, ensaladas y horno detrás de un mostrador de cristal, con las etiquetas escritas a mano. Se elige a la vista y se envasa en el momento.',
  },
  {
    title: 'Para llevar',
    text: 'El rótulo de la fachada lo dice en dos idiomas: «tienda · shop» y «para llevar · take away». Los platos salen en tarrinas de cartón, listos para comer en casa o de camino.',
  },
  {
    title: 'A dos pasos de Atocha',
    text: 'La tienda está en la calle Fúcar, entre el Paseo del Prado y la plaza de Santa Ana, en pleno Barrio de las Letras. La boca de metro más cercana es Antón Martín.',
  },
];

/** Lo que se ve en la vitrina y en las fotos del perfil. */
export const VITRINA = [
  {
    name: 'Pasta del día',
    text: 'Bandejas de pasta con tomate y queso, entre otras salsas, servidas por ración.',
  },
  {
    name: 'Pollo y guisos',
    text: 'Pollo asado y guisos de cuchara en las bandejas grandes de la vitrina.',
  },
  {
    name: 'Ensaladas y fríos',
    text: 'Ensaladas y preparados fríos en cuencos, para completar el plato o comer solos.',
  },
  {
    name: 'Horno y tartas',
    text: 'Lasaña, quiche de espinacas y tartas caseras, también por porciones.',
  },
  {
    name: 'Platos preparados',
    text: 'Hamburguesa con quinoa y carne rellena gratinada: parte de lo que aparece en las fotos del local.',
  },
  {
    name: 'Tortillas y encargos',
    text: 'Clientes del local cuentan en sus reseñas que han encargado tortillas por teléfono. Llama al 914 20 44 65 para confirmar.',
  },
];

export const FICHA = [
  { label: 'Categoría', value: 'Restaurante de comida para llevar' },
  { label: 'Valoración', value: '4,7 sobre 5 · 191 reseñas' },
  { label: 'Web propia', value: 'No publica en la ficha' },
  { label: 'Horario', value: 'Lunes a jueves, 12:30–21:00' },
  { label: 'Viernes', value: '12:30–16:30 y 18:30–21:00' },
  { label: 'Sábado', value: '12:30–15:30 · Domingo cerrado' },
];

export const FAQ = [
  {
    q: '¿Dónde está El Cielo?',
    a: 'En la calle Fúcar, 4, en el Barrio de las Letras (28014 Madrid), entre el Paseo del Prado y la plaza de Santa Ana. La boca de metro más cercana es Antón Martín, en la línea 1.',
  },
  {
    q: '¿Cuál es el teléfono?',
    a: 'El 914 20 44 65, el que publica la ficha de Google Maps. Esta página no tramita pedidos: para encargar o preguntar por el plato del día hay que llamar al local.',
  },
  {
    q: '¿Qué horario tiene?',
    a: 'De lunes a jueves abre de 12:30 a 21:00. Los viernes cierra entre las 16:30 y las 18:30 y vuelve hasta las 21:00; los sábados abre solo de 12:30 a 15:30 y los domingos cierra. Es el horario que publica la ficha en noviembre de 2026.',
  },
  {
    q: '¿Qué se puede comprar?',
    a: 'Comida casera preparada que se elige en la vitrina: pasta, pollo y guisos, ensaladas, lasaña, quiche y tartas, además de platos como la hamburguesa con quinoa o la carne rellena que aparecen en las fotos del perfil.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'La ficha de Google no publica precios y esta web no los inventa. En las etiquetas de la vitrina se ven algunas tarifas escritas a mano, pero cambian con los platos: se consultan en el mostrador o por teléfono.',
  },
  {
    q: '¿Se puede comer allí o solo para llevar?',
    a: 'La ficha lo clasifica como restaurante de comida para llevar y el rótulo de la fachada anuncia «para llevar · take away». Esta web no puede confirmar mesas ni servicio de sala: si necesitas comer en el local, pregunta al llamar.',
  },
  {
    q: '¿Se puede reservar o pedir por esta web?',
    a: 'No. Esta página es informativa y no gestiona reservas ni pedidos. El único canal es el teléfono del local, el 914 20 44 65.',
  },
  {
    q: '¿De dónde salen las fotos?',
    a: 'Del perfil público de El Cielo en Google Maps: la fachada, la vitrina, la cocina, las tarrinas para llevar y varios platos. Se muestran como referencia del local; si eres el titular y quieres retirar alguna, escríbenos y la quitamos.',
  },
] as const;

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
