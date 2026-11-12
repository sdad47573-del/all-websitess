/**
 * Datos de Bar Restaurante Avenida (C. Escuelas · 30178 Fuente Librilla, Murcia).
 *
 * Solo datos públicos y verificables, tomados de su ficha de Google Maps
 * (feature 0xd64890f9487314f:0xec4d9f8d6520f439, place id ChIJTzGHlA-JZA0ROfQgZY2fTew):
 * - Dirección: C. Escuelas, 30178 Fuente Librilla, en el municipio de Mula.
 * - Teléfono: +34 968 66 90 04.
 * - Horario: viernes 13:15–24:00; sábado y domingo 10:30–24:00; de lunes a jueves cerrado.
 * - Categorías: bar restaurante, marisquería y restaurante de cocina española.
 *
 * Fotos: las del perfil público del establecimiento en Google Maps (src/assets/fotos/), con
 * nota de origen y oferta de retirada. No se copian reseñas literales ni valoraciones.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/bar-restaurante-avenida-murcia',
  consultado: '12 de noviembre de 2026',
} as const;

export const business = {
  name: 'Bar Restaurante Avenida',
  shortName: 'Avenida',
  category: 'Bar restaurante',
  categories: ['Bar restaurante', 'Marisquería', 'Cocina española'],
  streetAddress: 'C. Escuelas',
  district: 'Fuente Librilla',
  postalCode: '30178',
  city: 'Fuente Librilla (Mula)',
  municipality: 'Mula',
  province: 'Murcia',
  region: 'Región de Murcia',
  country: 'ES',
  phone: '+34 968 66 90 04',
  latitude: 37.9184829,
  longitude: -1.4154084,
  reviewCount: 1560,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Bar+Restaurante+Avenida/@37.9184829,-1.4154084,17z/data=!3m1!4b1!4m6!3m5!1s0xd64890f9487314f:0xec4d9f8d6520f439!8m2!3d37.9184829!4d-1.4154084!16s%2Fg%2F11by_h78s2?authuser=0&hl=es&entry=ttu';

export const reviewsUrl =
  'https://search.google.com/local/reviews?placeid=ChIJTzGHlA-JZA0ROfQgZY2fTew&authuser=0&hl=es&gl=ES';

export const phoneHref = 'tel:+34968669004';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Cerrado', dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Cerrado', dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Cerrado', dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Cerrado', dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '13:15 – 24:00', dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '10:30 – 24:00', dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '10:30 – 24:00', dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Vie 13:15–24:00 · Sáb y dom 10:30–24:00 · Lun a jue cerrado';

export const hoursSource = 'Google Maps';

export const faqs = [
  {
    question: '¿Dónde está Bar Restaurante Avenida?',
    answer:
      'En C. Escuelas, 30178 Fuente Librilla, pedanía de Mula (Murcia), en las coordenadas 37.9184829, -1.4154084. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono de la ficha pública es el 968 66 90 04.',
  },
  {
    question: '¿Qué horario tiene?',
    answer:
      'Según su ficha de Google Maps, abre los viernes de 13:15 a 24:00 y los sábados y domingos de 10:30 a 24:00; de lunes a jueves está cerrado. Llama al 968 66 90 04 para confirmar festivos.',
  },
  {
    question: '¿Qué se puede comer?',
    answer:
      'Es marisquería y restaurante de cocina española: marisco y pescado a la plancha (almejas, gambas, cigalas, calamar, pulpo o vieiras) y carnes a la plancha, como se ve en las fotos de su perfil.',
  },
  {
    question: '¿Se puede reservar por esta web?',
    answer:
      'No: esta web es informativa y no gestiona reservas. Llama al 968 66 90 04 para reservar o confirmar mesa.',
  },
  {
    question: '¿Dónde puedo ver más fotos y opiniones?',
    answer:
      'La galería de esta web reúne fotos del perfil público del bar en Google Maps. En la ficha enlazada hay más fotos y las 1.560 reseñas de los clientes.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación, contacto y horario. No vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Bar Restaurante Avenida, marisquería y cocina española en C. Escuelas, 30178 Fuente Librilla (Mula, Murcia). Web informativa no oficial con ubicación, contacto, horario y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: mapsUrl,
  servesCuisine: ['Española', 'Marisco'],
  priceRange: '€€',
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
