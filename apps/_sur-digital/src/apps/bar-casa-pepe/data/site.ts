/**
 * Datos de Bar Casa Pepe (Calle La Rosa, 28 · 11002 Cádiz).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (36.5311207, -6.3020274) del enlace de Google Maps aportado.
 * - Turismo Cádiz (Ayuntamiento): bar de tapas, Barrio La Viña, Calle La Rosa 28,
 *   teléfono 678 55 90 84, bar familiar de cocina casera andaluza fundado en 1981,
 *   horario Mar-Dom 11:00-16:30, lunes cerrado, especialidad cocina casera.
 *
 * Las fotos de la web son las del perfil público del local en Google Maps; no se
 * reproducen reseñas literales ni valoraciones.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/bar-casa-pepe',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Bar Casa Pepe',
  shortName: 'Casa Pepe',
  category: 'Bar de tapas',
  categories: ['Bar de tapas', 'Cocina casera', 'Barrio La Viña'],
  streetAddress: 'Calle La Rosa, 28',
  district: 'Barrio La Viña',
  postalCode: '11002',
  city: 'Cádiz',
  province: 'Cádiz',
  region: 'Andalucía',
  country: 'ES',
  phone: '+34 678 55 90 84',
  founded: 1981,
  latitude: 36.5311207,
  longitude: -6.3020274,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Bar+Casa+Pepe/@36.5311207,-6.3020274,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dd15fc346d435:0xe807228c3bf9134b!8m2!3d36.5311207!4d-6.3020274!16s%2Fg%2F11cns6yg7y?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const facebookUrl = 'https://www.facebook.com/p/CASA-PEPE-100057155602674/';

export const instagramUrl = 'https://www.instagram.com/casapepe_cadiz/';

export const phoneHref = 'tel:+34678559084';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario publicado por Turismo Cádiz (Ayuntamiento de Cádiz).
 */
export const hours = [
  { day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '11:00 – 16:30', shifts: [{ open: '11:00', close: '16:30' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '11:00 – 16:30', shifts: [{ open: '11:00', close: '16:30' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '11:00 – 16:30', shifts: [{ open: '11:00', close: '16:30' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '11:00 – 16:30', shifts: [{ open: '11:00', close: '16:30' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '11:00 – 16:30', shifts: [{ open: '11:00', close: '16:30' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '11:00 – 16:30', shifts: [{ open: '11:00', close: '16:30' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Mar-Dom 11:00-16:30 · Lunes cerrado';

export const hoursSource = 'Turismo Cádiz (Ayuntamiento)';

export const faqs = [
  {
    question: '¿Dónde está Bar Casa Pepe?',
    answer:
      'En la Calle La Rosa, 28, 11002 Cádiz (Barrio La Viña), coordenadas 36.5311207, -6.3020274. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado por Turismo Cádiz es el 678 55 90 84.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según Turismo Cádiz: de martes a domingo de 11:00 a 16:30, lunes cerrado. Confirma por teléfono en festivos.',
  },
  {
    question: '¿Qué tipo de comida sirve?',
    answer:
      'Bar familiar de cocina casera andaluza fundado en 1981, famoso por sus tapas tradicionales. Especialidad: cocina casera.',
  },
  {
    question: '¿Dónde puedo ver fotos y opiniones?',
    answer:
      'En esta misma página hay fotos del perfil público del local en Google Maps. Las opiniones y valoraciones se leen en la ficha del local, en Facebook o en Instagram, enlazados desde esta web.',
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
    'Bar Casa Pepe, bar familiar de cocina casera andaluza desde 1981 en Calle La Rosa 28, La Viña, Cádiz. Web informativa no oficial con ubicación, contacto y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  foundingDate: String(business.founded),
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
  servesCuisine: ['Andaluza', 'Casera', 'Tapas'],
  acceptsReservations: false,
  openingHoursSpecification: hours.flatMap((item) =>
    item.shifts.map((shift) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: item.dayOfWeek,
      opens: shift.open,
      closes: shift.close,
    })),
  ),
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
