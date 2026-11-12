/**
 * Datos de El Gran Pollo a la Brasa (Carrer los Almendros, 9 · 03710 Calp, Alicante).
 *
 * Fuentes públicas consultadas el 12 de noviembre de 2026:
 * - Ficha de Google Maps: 38.6448273, 0.0465562, feature
 *   0x129dfe257e8bcec5:0x17c4f7af94fd2136. De ahí salen el nombre, la dirección,
 *   el teléfono 965 83 09 37, la categoría «Restaurante especializado en pollo»,
 *   la nota 4,1 con 297 reseñas y el horario semanal. La ficha no enlaza web
 *   propia («Añadir sitio web»).
 * - Fotografías del perfil público: la fachada y la terraza, el asador con los
 *   pollos sobre el carbón, el pollo servido con patatas, las brochetas y la
 *   parrilla. En el rótulo se lee «Restaurante Halal», «El Gran Pollo a la Brasa»
 *   y «Toda clase de carne a la brasa · Calpe».
 *
 * Lo que esta web NO inventa: no hay carta ni precios publicados, así que no se
 * copian tarifas ni se promete reparto a domicilio. El horario es el de Google.
 */

export const BUSINESS = {
  name: 'El Gran Pollo a la Brasa',
  fullName: 'El Gran Pollo a la Brasa · Calpe',
  shortName: 'El Gran Pollo',
  mark: 'P',
  street: 'Carrer los Almendros, 9',
  city: 'Calp',
  region: 'Comunidad Valenciana',
  postalCode: '03710',
  locality: 'Calpe',
  country: 'ES',
  phone: '965 83 09 37',
  phoneHref: 'tel:+34965830937',
  siteUrl: 'https://www.sur-digital.com/el-gran-pollo-a-la-brasa',
  googleCategory: 'Restaurante especializado en pollo',
  tagline: 'Pollo y carnes a la brasa en Calpe, Alicante',
  description:
    'El Gran Pollo a la Brasa, restaurante halal especializado en pollo y carnes a la brasa en Carrer los Almendros, 9 (03710 Calp, Alicante). Teléfono 965 83 09 37, horario, fotos y mapa. Web informativa no oficial.',
} as const;

export const MAPS = {
  place:
    'https://www.google.com/maps/place/El+Gran+Pollo+a+la+Brasa/@38.6448273,0.0465562,17z/data=!3m1!4b1!4m6!3m5!1s0x129dfe257e8bcec5:0x17c4f7af94fd2136!8m2!3d38.6448273!4d0.0465562!16s%2Fg%2F11cmrsmt9z?authuser=0&hl=es&entry=ttu',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=38.6448273%2C0.0465562',
  embed: 'https://maps.google.com/maps?q=38.6448273,0.0465562&z=17&hl=es&output=embed',
} as const;

/** Valoración publicada en la ficha. */
export const RATING = {
  value: 4.1,
  label: '4,1',
  count: 297,
} as const;

export const HOURS = [
  { day: 'Lunes', value: '10:30–0:30' },
  { day: 'Martes', value: '10:30–0:30' },
  { day: 'Miércoles', value: '10:30–0:30' },
  { day: 'Jueves', value: '10:30–0:30' },
  { day: 'Viernes', value: '10:30–0:30' },
  { day: 'Sábado', value: '10:30–0:30' },
  { day: 'Domingo', value: '11:00–21:00' },
] as const;

export const SERVICIOS = [
  'Pollo a la brasa',
  'Carnes a la brasa',
  'Brochetas',
  'Patatas asadas',
  'Cocina halal',
  'Terraza',
  'Asador de carbón',
  'Calpe · Alicante',
];

export const HIGHLIGHTS = [
  {
    title: 'El asador',
    text: 'Pollos abiertos en la parrilla sobre brasas de carbón, girándolos a mano hasta que la piel queda crujiente. En el rótulo del local lo resumen así: «el más crujiente con un sabor diferente».',
  },
  {
    title: 'La mesa',
    text: 'Pollo a la brasa con patatas asadas, brochetas y carnes a la parrilla. Platos para compartir, servidos en la mesa o en la terraza del local.',
  },
  {
    title: 'Cocina halal',
    text: 'El cartel de la fachada anuncia «Restaurante Halal» y «toda clase de carne a la brasa». Está en Carrer los Almendros, 9, en Calpe (Alicante).',
  },
];

/** Lo que se ve en las fotos del perfil. */
export const BRASA = [
  {
    name: 'Pollo a la brasa',
    text: 'La especialidad de la casa: pollo asado al carbón, dorado por fuera y jugoso por dentro.',
  },
  {
    name: 'Carnes a la parrilla',
    text: 'Toda clase de carne a la brasa, según el rótulo del restaurante.',
  },
  {
    name: 'Brochetas',
    text: 'Brochetas de carne a la parrilla, servidas como entrante o para compartir.',
  },
  {
    name: 'Patatas asadas',
    text: 'Patatas al horno con especias, el acompañamiento que aparece en las fotos junto al pollo.',
  },
  {
    name: 'Para compartir',
    text: 'Fuentes con pollo troceado, brochetas y patatas para poner en el centro de la mesa.',
  },
  {
    name: 'Terraza',
    text: 'Mesas y sillas en el exterior del local, junto a la fachada blanca y el rótulo rojo.',
  },
];

export const FICHA = [
  { label: 'Categoría', value: 'Restaurante especializado en pollo' },
  { label: 'Valoración', value: '4,1 sobre 5 · 297 reseñas' },
  { label: 'Cocina', value: 'Halal · carnes a la brasa' },
  { label: 'Web propia', value: 'No publica en la ficha' },
  { label: 'Horario', value: 'Lunes a sábado, 10:30–0:30' },
  { label: 'Domingo', value: '11:00–21:00' },
];

export const FAQ = [
  {
    q: '¿Dónde está El Gran Pollo a la Brasa?',
    a: 'En Carrer los Almendros, 9, 03710 Calp (Alicante). La ficha de Google Maps incluye el mapa y el botón de indicaciones para llegar en coche o a pie.',
  },
  {
    q: '¿Cuál es el teléfono?',
    a: 'El 965 83 09 37, el que publica la ficha de Google Maps. Esta página no tramita pedidos ni reservas: para eso hay que llamar al restaurante.',
  },
  {
    q: '¿Qué horario tiene?',
    a: 'De lunes a sábado abre de 10:30 a 0:30 y los domingos de 11:00 a 21:00, según la ficha de Google consultada en noviembre de 2026. Puede cambiar en festivos.',
  },
  {
    q: '¿Qué se puede comer?',
    a: 'Pollo a la brasa hecho al carbón, carnes a la parrilla, brochetas y patatas asadas. El local se anuncia como restaurante halal y ofrece «toda clase de carne a la brasa», según el rótulo de la fachada.',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'La ficha no publica precios y esta web no los inventa. Se consultan en el restaurante o por teléfono.',
  },
  {
    q: '¿Tiene terraza?',
    a: 'Las fotos del perfil muestran mesas y sillas en el exterior, junto a la fachada. Para confirmar disponibilidad o reservar, llama al 965 83 09 37.',
  },
  {
    q: '¿Se puede pedir para llevar?',
    a: 'Esta web no puede confirmarlo: la ficha de Google no detalla ese servicio. Llama al restaurante para preguntar por pedidos para llevar.',
  },
  {
    q: '¿De dónde salen las fotos?',
    a: 'Del perfil público de El Gran Pollo a la Brasa en Google Maps: la fachada, el asador, la parrilla, el pollo servido y las patatas. Si eres el titular y quieres retirar alguna, escríbenos y la quitamos.',
  },
] as const;

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
