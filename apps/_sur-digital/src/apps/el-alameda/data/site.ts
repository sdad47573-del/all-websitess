/**
 * Datos de El Alameda (Urkixo Zumarkalea, 40 · Abando · 48011 Bilbao).
 *
 * Fuentes públicas consultadas el 12 de noviembre de 2026:
 * - Ficha de Google Maps: 43.2605019, -2.9378471, feature
 *   0xd4e50282aac27b1:0x843c6130bcf8449. De ahí salen el nombre, la dirección,
 *   el teléfono 944 43 50 08, la categoría «Bar», la nota 4,3 con 600 reseñas,
 *   el precio medio (1–10 €), los servicios (comer dentro, para llevar y
 *   reparto) y el horario semanal.
 * - Bilbao Turismo (Bilbao Pintxo Finder): especialidades de la casa —la
 *   felipada, la anchoa rellena de calabacín y cebolla pochada, la ensaladilla
 *   rusa y el «bilbainito»— y cercanía al metro de Indautxu.
 * - Fotos del perfil público del local, descargadas con
 *   `node scripts/fetch-maps-photos.mjs el-alameda`.
 *
 * Lo que esta web NO inventa: no hay carta con precios publicada en la ficha,
 * así que no se copian tarifas; el horario es el que publica Google.
 */

export const BUSINESS = {
  name: 'El Alameda',
  fullName: 'El Alameda · Bar',
  shortName: 'El Alameda',
  mark: 'A',
  street: 'Urkixo Zumarkalea, 40',
  city: 'Bilbao',
  region: 'Bizkaia',
  postalCode: '48011',
  locality: 'Abando',
  country: 'ES',
  phone: '944 43 50 08',
  phoneHref: 'tel:+34944435008',
  siteUrl: 'https://www.sur-digital.com/el-alameda',
  googleCategory: 'Bar',
  tagline: 'Bar popular con pintxos y cocina casera en Abando, Bilbao',
  description:
    'El Alameda, bar en Urkixo Zumarkalea, 40 (Abando, 48011 Bilbao, Bizkaia). Clásico bar popular con barra de pintxos, cocina casera y fama de sándwiches, según su ficha de Google Maps.',
} as const;

export const MAPS = {
  place:
    'https://www.google.com/maps/place/El+Alameda/@43.2605019,-2.9378471,16z/data=!3m1!4b1!4m6!3m5!1s0xd4e50282aac27b1:0x843c6130bcf8449!8m2!3d43.2605019!4d-2.9378471!16s%2Fg%2F1v_ndtsg?authuser=0&hl=es&entry=ttu',
  reviews:
    'https://www.google.com/maps/place/El+Alameda/@43.2605019,-2.9378471,16z/data=!3m1!4b1!4m6!3m5!1s0xd4e50282aac27b1:0x843c6130bcf8449!8m2!3d43.2605019!4d-2.9378471!16s%2Fg%2F1v_ndtsg?authuser=0&hl=es&entry=ttu',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2605019%2C-2.9378471',
  embed: 'https://maps.google.com/maps?q=43.2605019,-2.9378471&z=17&hl=es&output=embed',
} as const;

/** Valoración publicada en la ficha. */
export const RATING = {
  value: 4.3,
  label: '4,3',
  count: 600,
} as const;

export const HOURS = [
  { day: 'Lunes', value: '10:00–22:00' },
  { day: 'Martes', value: '10:00–22:00' },
  { day: 'Miércoles', value: '10:00–22:00' },
  { day: 'Jueves', value: '10:00–22:00' },
  { day: 'Viernes', value: '10:00–22:30' },
  { day: 'Sábado', value: '11:00–22:30' },
  { day: 'Domingo', value: 'Cerrado', closed: true },
] as const;

export const SERVICIOS = [
  'Pintxos de barra',
  'Felipadas',
  'Sándwiches',
  'Ensaladilla rusa',
  'Cocina casera',
  'Para llevar',
  'Reparto a domicilio',
  'Abando · Bilbao',
];

export const HIGHLIGHTS = [
  {
    title: 'La felipada',
    text: 'La especialidad de la casa: pan de molde, anchoa, lechuga, mayonesa y un toque picante. En la ficha aparece como «Felipada de Bonito».',
  },
  {
    title: 'El bilbainito',
    text: 'Huevo cocido, langostino y mayonesa, según Bilbao Turismo. Se suma a la ensaladilla rusa y a la anchoa rellena de calabacín con cebolla pochada.',
  },
  {
    title: 'La barra azul',
    text: 'Interior de paredes azules, lámparas amarillas y barra de acero con taburetes rojos. Es un bar de toda la vida, a un paso de la plaza Bizkaia y de Azkuna Zentroa.',
  },
];

export const FICHA = [
  { label: 'Categoría', value: 'Bar' },
  { label: 'Valoración', value: '4,3 sobre 5 · 600 reseñas' },
  { label: 'Precio medio', value: '1–10 € por persona' },
  { label: 'Servicios', value: 'Comer dentro, para llevar y reparto' },
  { label: 'Horario', value: 'Lunes a jueves, 10:00–22:00' },
  { label: 'Domingo', value: 'Cerrado' },
];

export const FAQ = [
  {
    q: '¿Dónde está El Alameda?',
    a: 'En Urkixo Zumarkalea, 40, en el barrio de Abando (48011 Bilbao, Bizkaia). Queda junto a la plaza Bizkaia y a Azkuna Zentroa, y la boca de metro más cercana es Indautxu.',
  },
  {
    q: '¿Cuál es el teléfono?',
    a: 'El 944 43 50 08, el que publica la ficha de Google Maps. Esta página no tramita reservas ni pedidos: para eso hay que llamar al local.',
  },
  {
    q: '¿Qué horario tiene?',
    a: 'De lunes a jueves abre de 10:00 a 22:00; los viernes hasta las 22:30 y los sábados de 11:00 a 22:30. Los domingos cierra. Es el horario que publica la ficha de Google en noviembre de 2026.',
  },
  {
    q: '¿Qué se puede comer?',
    a: 'Pintxos de barra y cocina casera, con la felipada como especialidad y el bilbainito, la ensaladilla rusa y la anchoa rellena de calabacín entre las propuestas que destaca Bilbao Turismo. La ficha de Google lo resume como «clásico bar popular conocido por sándwiches».',
  },
  {
    q: '¿Cuánto cuesta?',
    a: 'La ficha indica un precio medio de 1 a 10 € por persona. No hay carta con precios publicada, así que el importe exacto se pregunta en la barra.',
  },
  {
    q: '¿Se puede pedir para llevar?',
    a: 'La ficha marca servicio de comedor, para llevar y reparto a domicilio. El reparto lo gestiona la plataforma que use el local; esta web no interviene en el pedido.',
  },
  {
    q: '¿Se puede reservar?',
    a: 'Esta web no gestiona reservas. Es un bar de barra; para grupos o dudas concretas, llama al 944 43 50 08.',
  },
  {
    q: '¿De dónde salen las fotos?',
    a: 'Del perfil público del local en Google Maps: la barra azul, la preparación de los sándwiches, la felipada, los pintxos, el pulpo y la carne. Si eres el titular y quieres retirar alguna, escríbenos y la quitamos.',
  },
] as const;

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
