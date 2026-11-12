/**
 * Datos de Bar La Taberna de Romero (Calle Uruguay 1 · 11008 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5080762, -6.2784972) del enlace de Google Maps aportado.
 * - Dirección Calle Uruguay 1, 11008 Cádiz (turismo.cadiz.es, El País, Facebook).
 * - Teléfono 663 51 76 46 (turismo.cadiz.es, El País).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/taberna-de-romero',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Bar La Taberna de Romero',
  shortName: 'Taberna de Romero',
  category: 'Bar',
  categories: ['Bar', 'Taberna'],
  streetAddress: 'Calle Uruguay 1',
  district: 'Puerta del Mar',
  postalCode: '11008',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 663 51 76 46',
  latitude: 36.5080762,
  longitude: -6.2784972,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Bar+La+taberna+de+romero/@36.5080762,-6.2784972,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd24a94edc777:0x1cd327715ba98b60!8m2!3d36.5080762!4d-6.2784972!16s%2Fg%2F11dyn_xhyq?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34663517646';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lun cerrado · resto consultar · 663 51 76 46';

export const faqs = [
  {
    question: '¿Dónde está la Taberna de Romero?',
    answer:
      'En la Calle Uruguay 1, 11008 Cádiz (junto al Hospital Puerta del Mar), coordenadas 36.5080762, -6.2784972. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 663 51 76 46. La reserva es por teléfono.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'La prensa local indica lunes cerrado; el resto del horario puede variar, así que llama al 663 51 76 46 para confirmar apertura.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del bar en Google Maps, enlazada desde esta web. Las imágenes de esta página son propias del local; las de Maps pertenecen a sus autores y no se copian aquí.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa no oficial, creada con datos públicos de ubicación y contacto. No vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  acceptsReservations: true,
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Bar La Taberna de Romero, taberna en Calle Uruguay 1, 11008 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.streetAddress,
    addressLocality: business.city,
    addressRegion: business.province,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: business.latitude,
    longitude: business.longitude,
  },
  hasMap: mapsUrl,
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
