/**
 * Datos de Asador Valle de Ricote (Calle de Gran Vía, 46D · 30540 Blanca, Murcia).
 *
 * Solo datos públicos y verificables, tomados de la ficha de Google Maps:
 * - Nombre, categoría, coordenadas (38.1793861, -1.3714672) y enlace de Maps aportados.
 * - Dirección: Calle de Gran Vía, 46D, 30540 Blanca, Murcia.
 * - Teléfono público: 608 65 30 50.
 * - Valoración: 4,3 sobre 5 con 290 reseñas.
 * - Horario, accesibilidad y especialidad publicados por la propia ficha.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/asador-valle-de-ricote',
  consultado: '21 de octubre de 2026',
} as const;

export const business = {
  name: 'Asador Valle de Ricote',
  shortName: 'Valle de Ricote',
  category: 'Asador',
  categories: ['Asador', 'Restaurante', 'Barbacoa'],
  streetAddress: 'Calle de Gran Vía, 46D',
  postalCode: '30540',
  city: 'Blanca',
  province: 'Murcia',
  region: 'Región de Murcia',
  country: 'ES',
  phone: '+34 608 65 30 50',
  latitude: 38.1793861,
  longitude: -1.3714672,
  rating: 4.3,
  reviewCount: 290,
  site: site.siteUrl,
} as const;

/** La especialidad la describe el propio local en su ficha. */
export const specialty =
  'Especialidad en asados, carnes a la brasa, paellas de pulpo, gazpacho manchego, y gran variedad de postres caseros.';

export const mapsUrl =
  'https://www.google.com/maps/place/Asador+Valle+de+Ricote/@38.1793861,-1.3714672,17z/data=!3m1!4b1!4m6!3m5!1s0xd646f6a02610771:0xe9d7e285d5e386ce!8m2!3d38.1793861!4d-1.3714672!16s%2Fg%2F11qh8dxd0b?authuser=0&hl=es&entry=ttu';

export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34608653050';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

export const hours = [
  {
    day: 'Lunes',
    service: '5:00 – 17:00',
    shifts: [{ open: '05:00', close: '17:00' }],
    dayOfWeek: 'Monday',
  },
  {
    day: 'Martes',
    service: '5:00 – 17:00',
    shifts: [{ open: '05:00', close: '17:00' }],
    dayOfWeek: 'Tuesday',
  },
  {
    day: 'Miércoles',
    service: '5:00 – 17:00',
    shifts: [{ open: '05:00', close: '17:00' }],
    dayOfWeek: 'Wednesday',
  },
  {
    day: 'Jueves',
    service: '5:00 – 17:00',
    shifts: [{ open: '05:00', close: '17:00' }],
    dayOfWeek: 'Thursday',
  },
  {
    day: 'Viernes',
    service: '5:00 – 17:00 · 20:00 – 24:00',
    shifts: [
      { open: '05:00', close: '17:00' },
      { open: '20:00', close: '24:00' },
    ],
    dayOfWeek: 'Friday',
  },
  {
    day: 'Sábado',
    service: '5:00 – 17:00 · 20:00 – 24:00',
    shifts: [
      { open: '05:00', close: '17:00' },
      { open: '20:00', close: '24:00' },
    ],
    dayOfWeek: 'Saturday',
  },
  {
    day: 'Domingo',
    service: '5:00 – 17:00',
    shifts: [{ open: '05:00', close: '17:00' }],
    dayOfWeek: 'Sunday',
  },
] as const;

export const hoursSummary =
  'Abierto todos los días de 5:00 a 17:00, con un segundo turno de 20:00 a 24:00 los viernes y sábados';

export const accessibility = [
  { label: 'Acceso para sillas de ruedas', disponible: true },
  { label: 'Aseo adaptado para sillas de ruedas', disponible: true },
  { label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación: la primera termina con un
 * signo de exclamación sin abrir y se reproduce igual.
 */
export const reviews = [
  {
    text: 'Pasamos de casualidad pero sin duda, volveremos a repetir si volvemos a Blanca!!',
    rating: 5,
    source: 'Reseña destacada en la ficha de Google Maps',
  },
  {
    text: 'Buen churrasco a la brasa y la tarta de chocolate y turrón muy rica.',
    rating: 5,
    source: 'Reseña destacada en la ficha de Google Maps',
  },
  {
    text: 'Raciones generosas, buen género, buena atención, y buen precio.',
    rating: 4,
    source: 'Reseña destacada en la ficha de Google Maps',
  },
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
  {
    question: '¿Dónde está Asador Valle de Ricote?',
    answer:
      'En la Calle de Gran Vía, 46D, con código postal 30540, en Blanca (Murcia). La ficha publica las coordenadas 38.1793861, -1.3714672.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer: 'El teléfono público es el 608 65 30 50.',
  },
  {
    question: '¿Cuál es el horario?',
    answer:
      'Abre todos los días de 5:00 a 17:00, y los viernes y sábados añade un segundo turno de 20:00 a 24:00. Es el horario publicado en la ficha consultada el 21 de octubre de 2026; en festivos puede cambiar, así que conviene confirmar por teléfono antes de ir.',
  },
  {
    question: '¿Qué se come?',
    answer:
      'La ficha lo presenta como un restaurante especializado en barbacoa, con especialidad en asados, carnes a la brasa, paellas de pulpo, gazpacho manchego y gran variedad de postres caseros.',
  },
  {
    question: '¿Qué opinan los clientes?',
    answer:
      'Tiene 4,3 sobre 5 con 290 reseñas. Entre las que la ficha destaca se habla de volver a repetir, de un buen churrasco a la brasa con tarta de chocolate y turrón, y de raciones generosas, buen género, buena atención y buen precio.',
  },
  {
    question: '¿Es accesible el local?',
    answer:
      'La ficha publica tres entradas de accesibilidad y las tres están disponibles: acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
  },
  {
    question: '¿Se puede reservar?',
    answer:
      'La ficha no ofrece reserva en línea y esta web no permite reservar. Llama al 608 65 30 50 para consultar disponibilidad.',
  },
  {
    question: '¿De quién es esta web?',
    answer:
      'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 21 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  alternateName: business.shortName,
  description: `${specialty} Asador en ${business.streetAddress}, ${business.postalCode} ${business.city} (${business.province}).`,
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  servesCuisine: ['Asador', 'Barbacoa', 'Carnes a la brasa', 'Murciana'],
  priceRange: '€€',
  areaServed: [{ '@type': 'City', name: business.city }],
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
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '05:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '05:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '05:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '05:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '05:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '20:00', closes: '24:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '05:00', closes: '17:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '20:00', closes: '24:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '05:00', closes: '17:00' },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Acceso para sillas de ruedas', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Aseo adaptado para sillas de ruedas', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Asientos adaptados sillas de ruedas', value: true },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
    bestRating: 5,
  },
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
