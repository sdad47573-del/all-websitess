/**
 * Datos de Food House (Avda. Virgen de Guadalupe 41-43 · 10001 Cáceres).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (39.4674835, -6.3855061) del enlace de Google Maps aportado.
 * - Dirección Avda. Virgen de Guadalupe 41-43, 10001 Cáceres y teléfono 927 76 16 69
 *   de directorios públicos (turismo.caceres.es, páginas amarillas, Facebook del local).
 *
 * NO se copian fotos, reseñas literales, horarios ni valoraciones de Google Maps:
 * las fotos tienen derechos de sus autores y las Condiciones de Google prohíben extraerlas.
 */

export const site = {
  siteUrl: 'https://food-house-caceres.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Food House',
  shortName: 'Food House',
  category: 'Restaurante',
  categories: ['Restaurante', 'Buffet libre'],
  streetAddress: 'Avda. Virgen de Guadalupe 41-43',
  district: 'Centro-Casco Antiguo',
  postalCode: '10001',
  city: 'Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 927 76 16 69',
  latitude: 39.4674835,
  longitude: -6.3855061,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Food+House/@39.4674835,-6.3855061,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfdd4319e119:0xcb836429d6f31a4b!8m2!3d39.4674835!4d-6.3855061!16s%2Fg%2F1ptznwq1p?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34927761669';

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

export const hoursSummary = 'Horario sin confirmar · llama al 927 76 16 69';

export const faqs = [
  {
    question: '¿Dónde está Food House?',
    answer:
      'En la Avda. Virgen de Guadalupe 41-43, 10001 Cáceres (Extremadura), coordenadas 39.4674835, -6.3855061. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 927 76 16 69.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'No publicamos un horario porque no se ha verificado con el local. Llama al 927 76 16 69 para confirmar apertura y reservas.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En la ficha del restaurante en Google Maps, enlazada desde esta web. Aquí solo se usarán fotos propias con permiso.',
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
    'Food House, buffet en Avda. Virgen de Guadalupe 41-43, 10001 Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
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
