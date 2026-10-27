/**
 * Datos de Restaurante La Caballeriza (Malpartida de Cáceres).
 *
 * Solo datos públicos y verificables:
 * - Nombre y coordenadas (39.443237, -6.5075182) del enlace de Google Maps aportado.
 * - Dirección: Calle Santa María 4 / Plaza de la Nora 2, 10910 Malpartida de Cáceres
 *   (turismo.malpartidadecaceres.es, Tripadvisor, Booking).
 * - Teléfono 927 27 60 31 (turismo.malpartidadecaceres.es).
 * - Horario publicado por turismo municipal: lunes 08:30-12:00 (tarde cerrado),
 *   martes-domingo 08:30-00:00.
 *
 * NO se copian fotos, reseñas literales ni valoraciones de Google Maps.
 */

export const site = {
  siteUrl: 'https://restaurante-la-caballeriza.vercel.app',
  consultado: '18 de octubre de 2026',
} as const;

export const business = {
  name: 'Restaurante La Caballeriza',
  shortName: 'La Caballeriza',
  category: 'Restaurante',
  categories: ['Restaurante', 'Restaurante español'],
  streetAddress: 'Calle Santa María 4',
  district: 'Plaza de la Nora',
  postalCode: '10910',
  city: 'Malpartida de Cáceres',
  province: 'Cáceres',
  region: 'Extremadura',
  country: 'ES',
  phone: '+34 927 27 60 31',
  latitude: 39.443237,
  longitude: -6.5075182,
  rating: 0,
  reviewCount: 0,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Restaurante+La+Caballeriza/@39.443237,-6.5075182,17z/data=!3m1!4b1!4m9!3m8!1s0xd16736eb592bfad:0x54580ab216eb4737!5m2!4m1!1i2!8m2!3d39.443237!4d-6.5075182!16s%2Fg%2F1tdg91dz?hl=es';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34927276031';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  { day: 'Lunes', service: '08:30 – 12:00', shifts: [{ open: '08:30', close: '12:00' }], dayOfWeek: 'Monday' },
  { day: 'Martes', service: '08:30 – 00:00', shifts: [{ open: '08:30', close: '00:00' }], dayOfWeek: 'Tuesday' },
  { day: 'Miércoles', service: '08:30 – 00:00', shifts: [{ open: '08:30', close: '00:00' }], dayOfWeek: 'Wednesday' },
  { day: 'Jueves', service: '08:30 – 00:00', shifts: [{ open: '08:30', close: '00:00' }], dayOfWeek: 'Thursday' },
  { day: 'Viernes', service: '08:30 – 00:00', shifts: [{ open: '08:30', close: '00:00' }], dayOfWeek: 'Friday' },
  { day: 'Sábado', service: '08:30 – 00:00', shifts: [{ open: '08:30', close: '00:00' }], dayOfWeek: 'Saturday' },
  { day: 'Domingo', service: '08:30 – 00:00', shifts: [{ open: '08:30', close: '00:00' }], dayOfWeek: 'Sunday' },
] as const;

export const hoursSummary = 'Lun 8:30–12:00 · Mar–dom 8:30–00:00';

export const faqs = [
  {
    question: '¿Dónde está La Caballeriza?',
    answer:
      'En la Calle Santa María 4 (Plaza de la Nora), 10910 Malpartida de Cáceres, coordenadas 39.443237, -6.5075182. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono publicado por el turismo municipal es el 927 27 60 31.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Según el portal de turismo municipal: lunes de 08:30 a 12:00 (tarde cerrado por descanso) y de martes a domingo de 08:30 a 00:00. Conviene confirmar por teléfono.',
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
  acceptsReservations: true,
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Restaurante La Caballeriza en Calle Santa María 4, 10910 Malpartida de Cáceres. Web informativa no oficial con ubicación, contacto y mapa.',
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
