/**
 * Datos de Comidas para llevar Abuelas (C. Santiago, 5 · 30800 Lorca, Murcia).
 *
 * Fuentes públicas consultadas el 12 de noviembre de 2026:
 * - Ficha de Google Maps: 37.6768571, -1.6988302, feature
 *   0xd64e7ffa23195ad:0x673d7cc1e5e0a96c. De ahí salen el nombre, la dirección
 *   (C. Santiago, 5, 30800 Lorca, Murcia), el teléfono 968 47 15 87, la
 *   categoría «Restaurante» y la valoración 4,8 sobre 5.
 * - El horario que publica esa ficha en la consulta es 8:30–15:00. Maps no
 *   muestra la semana completa en la vista pública, así que no se inventan los
 *   demás días: la web remite al teléfono.
 * - Fotografías del perfil público del local: el rótulo «Abuelas · Comidas para
 *   llevar» y la fachada de la calle Santiago.
 *
 * Lo que esta web NO inventa: no hay carta, precios ni número de reseñas
 * publicados en la ficha consultada. No se afirma qué se cocina cada día ni si
 * el local tiene servicio de mesa más allá de los veladores que se ven en la
 * puerta.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/comidas-para-llevar-abuelas',
  consultado: '12 de noviembre de 2026',
} as const;

export const business = {
  name: 'Comidas para llevar Abuelas',
  shortName: 'Abuelas',
  category: 'Comida para llevar',
  categories: ['Comida para llevar', 'Restaurante', 'Centro de Lorca'],
  streetAddress: 'C. Santiago, 5',
  district: 'Centro',
  postalCode: '30800',
  city: 'Lorca',
  municipality: 'Lorca',
  province: 'Murcia',
  region: 'Región de Murcia',
  country: 'ES',
  phone: '+34 968 47 15 87',
  latitude: 37.6768571,
  longitude: -1.6988302,
  rating: 4.8,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Comidas+para+llevar+Abuelas/@37.6768571,-1.6988302,17z/data=!3m1!4b1!4m6!3m5!1s0xd64e7ffa23195ad:0x673d7cc1e5e0a96c!8m2!3d37.6768571!4d-1.6988302!16s%2Fg%2F11fn00h0y4?authuser=0&hl=es&entry=ttu';

/** Sin enlace propio a reseñas en la ficha pública: se usa la ficha completa. */
export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34968471587';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&hl=es&output=embed`;

/**
 * Único tramo que publica la ficha en la consulta. No se completa la semana a
 * ojo: si cambia o faltan días, manda el teléfono del local.
 */
export const hours = [
  { day: 'Apertura', service: '8:30' },
  { day: 'Cierre', service: '15:00' },
] as const;

export const hoursSummary = '8:30 – 15:00 · confirma por teléfono';

export const hoursSource = 'Google Maps · 12/11/2026';

export const hoursNote =
  'La ficha pública del local marca 8:30–15:00 en la consulta del 12 de noviembre de 2026, pero no muestra la semana completa. Llama al 968 47 15 87 para confirmar el horario del día, los festivos y los encargos.';

export const fotosNote =
  'Las fotos son del perfil público del local en Google Maps: el rótulo de la fachada y la puerta de la calle Santiago. Se muestran como referencia; si eres el titular y quieres retirar alguna, escríbenos y la quitamos.';

export const faqs = [
  {
    question: '¿Dónde está Comidas para llevar Abuelas?',
    answer:
      'En la calle Santiago, 5, 30800 Lorca (Murcia), en el centro de la ciudad. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer:
      'El 968 47 15 87, el que figura en la ficha pública del local. Es también el número al que hay que llamar para preguntar por la comida del día o encargar.',
  },
  {
    question: '¿Qué horario tiene?',
    answer:
      'La ficha de Google Maps consultada el 12 de noviembre de 2026 marca 8:30–15:00, pero no publica la semana completa. Llama antes de ir para confirmar el horario del día y los festivos.',
  },
  {
    question: '¿Hay carta o precios publicados?',
    answer:
      'No. La ficha pública no incluye carta, precios ni platos del día. El rótulo del local anuncia «Abuelas · Comidas para llevar», y lo que haya cada jornada se pregunta por teléfono.',
  },
  {
    question: '¿Se puede comer en el local?',
    answer:
      'En la fachada hay dos veladores altos junto a la puerta, pero el negocio se presenta como comida para llevar y la ficha no detalla servicio de mesa. Lo más seguro es preguntar al llamar.',
  },
  {
    question: '¿Se puede encargar comida?',
    answer:
      'Sí, por teléfono, en el 968 47 15 87. Esta web no gestiona pedidos ni reservas: solo reúne los datos públicos del local.',
  },
  {
    question: '¿Qué valoración tiene?',
    answer:
      '4,8 sobre 5 en Google Maps en la consulta del 12 de noviembre de 2026. La vista pública que se consultó no mostraba el número de reseñas, así que aquí no se indica.',
  },
  {
    question: '¿De dónde salen las fotos?',
    answer:
      'Del perfil público del local en Google Maps: el rótulo de forja con el nombre y la fachada con la puerta abierta. Si eres el titular y quieres retirarlas, escríbenos y las quitamos.',
  },
  {
    question: '¿Esta web es la oficial del local?',
    answer:
      'No. Es una web informativa hecha con datos y fotos públicos de Google Maps. No gestiona pedidos, reservas ni pagos; para cualquier cosa del día a día, el teléfono del local.',
  },
] as const;

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${site.siteUrl}/#restaurante`,
  name: business.name,
  description:
    'Comidas para llevar Abuelas, comida para llevar en la calle Santiago, 5, en el centro de Lorca (30800 Murcia). Web informativa con teléfono, horario, fotos y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  servesCuisine: ['Casera', 'Española'],
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
  takeaway: true,
} as const;

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${site.siteUrl}/#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
} as const;

export const LEGAL = {
  razonSocial: '[pendiente de completar]',
  nif: '[pendiente de completar]',
  email: '[pendiente de completar]',
} as const;
