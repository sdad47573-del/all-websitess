/**
 * Datos de Restaurante On Egin - Cocina Vasca (Calle Plocia 7 · 11005 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5298144, -6.2916122) del enlace de Google Maps aportado.
 * - Dirección Calle Plocia 7, 11005 Cádiz (turismo.cadiz.es, Guía Repsol, Tripadvisor).
 * - Teléfono 856 03 24 75 (turismo.cadiz.es, Guía Repsol).
 * - Web propia citada en directorios: https://www.onegincadiz.es (no se copia su contenido).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/on-egin-cadiz',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante On Egin (Cocina Vasca)',
  shortName: 'On Egin',
  category: 'Restaurante vasco',
  categories: ['Restaurante vasco', 'Bar de pintxos'],
  streetAddress: 'Calle Plocia 7',
  district: '',
  postalCode: '11005',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 856 03 24 75',
  latitude: 36.5298144,
  longitude: -6.2916122,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+On+Egin+(Cocina+Vasca)/@36.5298144,-6.2916122,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd3b6bd6482e1:0x4ddb0e0638a6af46!8m2!3d36.5298144!4d-6.2916122!16s%2Fg%2F11q2rzt8c0?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34856032475';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: 'Consultar por teléfono', shifts: [], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Horario sin confirmar · llama al 856 03 24 75';

export const faqs = [
  {
    question: '¿Dónde está On Egin?',
    answer:
      'En la Calle Plocia 7, 11005 Cádiz (Andalucía), coordenadas 36.5298144, -6.2916122. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 856 03 24 75.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 856 03 24 75 para confirmar apertura.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del local en Google Maps, enlazada desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Restaurante On Egin, cocina vasca en Calle Plocia 7, 11005 Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
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
