/**
 * Datos de Doner Kebab Albir (Av de l'Albir, 80, Loc 5 · 03580 L'Alfàs del Pi).
 *
 * Fuentes públicas consultadas el 12 de noviembre de 2026:
 * - Ficha de Google Maps: 38.5731292, -0.0749422, feature
 *   0xd6203fc1617e57b:0x2e5efc545fb96da0. De ahí salen el nombre, la dirección
 *   (Av de l'Albir, 80, Loc 5, 03580 L'Alfàs del Pi, Alicante), el teléfono
 *   965 05 30 19, la categoría «Restaurante especializado en döner kebab», la
 *   nota 4,2 sobre 5 y el horario del día consultado (jueves 12:00–24:00).
 * - Fotos del perfil público del local, descargadas con
 *   `node scripts/fetch-maps-photos.mjs doner-kebab-albir`.
 *
 * Lo que esta web NO inventa: Google solo muestra el horario del día
 * consultado y no publica carta, precios ni número de reseñas en la vista
 * pública. No hay menú ni platos concretos en esta web: no se copian cartas de
 * terceros ni se suponen productos que no estén en la ficha.
 */

export const site = {
  siteUrl: 'https://www.sur-digital.com/doner-kebab-albir',
  consultado: '12 de noviembre de 2026',
} as const;

export const business = {
  name: 'Doner Kebab Albir',
  shortName: 'Albir',
  category: 'Döner kebab',
  categories: ['Döner kebab', 'Comida para llevar', 'L\'Albir'],
  streetAddress: 'Av de l\'Albir, 80, Loc 5',
  district: 'L\'Albir',
  postalCode: '03580',
  city: 'L\'Alfàs del Pi',
  municipality: 'L\'Alfàs del Pi',
  province: 'Alicante',
  region: 'Comunidad Valenciana',
  country: 'ES',
  phone: '+34 965 05 30 19',
  latitude: 38.5731292,
  longitude: -0.0749422,
  rating: 4.2,
  site: site.siteUrl,
} as const;

export const mapsUrl =
  'https://www.google.com/maps/place/Doner+Kebab+Albir/@38.5731292,-0.0749422,17z/data=!3m1!4b1!4m6!3m5!1s0xd6203fc1617e57b:0x2e5efc545fb96da0!8m2!3d38.5731292!4d-0.0749422!16s%2Fg%2F1q5bq209s?authuser=0&hl=es&entry=ttu';

/** La ficha pública no tiene pestaña de reseñas propia: se enlaza la ficha. */
export const reviewsUrl = mapsUrl;

export const phoneHref = 'tel:+34965053019';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&hl=es&output=embed`;

/**
 * Único tramo que publica la ficha en la consulta: jueves de 12:00 a 24:00.
 * No se completa la semana a ojo.
 */
export const hours = [{ day: 'Horario publicado', service: '12:00 – 24:00' }] as const;

export const hoursSummary = '12:00 – 24:00 · confirma por teléfono';

export const hoursSource = 'Google Maps · 12/11/2026';

export const hoursNote =
  'La ficha pública marca 12:00–24:00 en la consulta del 12 de noviembre de 2026, pero solo muestra el horario del día consultado. Llama al 965 05 30 19 para confirmar el horario de hoy, los festivos y los encargos.';

export const faqs = [
  {
    question: '¿Dónde está Doner Kebab Albir?',
    answer:
      'En la avenida de l\'Albir, 80, local 5, 03580 L\'Alfàs del Pi (Alicante), en la zona de l\'Albir. Los botones de esta web abren las indicaciones en Google Maps.',
  },
  {
    question: '¿Cuál es el teléfono?',
    answer:
      'El 965 05 30 19, el que figura en la ficha pública del local. Es también el número al que hay que llamar para preguntar por la comida o encargar.',
  },
  {
    question: '¿Qué horario tiene?',
    answer:
      'La ficha de Google Maps consultada el 12 de noviembre de 2026 marca de 12:00 a 24:00, pero solo publica el horario del día consultado. Llama antes de ir para confirmar el horario del día y los festivos.',
  },
  {
    question: '¿Qué se puede pedir?',
    answer:
      'La ficha lo clasifica como restaurante especializado en döner kebab. No publica una carta con platos y precios, así que lo que haya cada día se pregunta por teléfono o se consulta en la ficha de Google Maps.',
  },
  {
    question: '¿Se puede encargar o pedir a domicilio?',
    answer:
      'La ficha de Google muestra un botón de pedido online, gestionado por la plataforma que use el local. Esta web no gestiona pedidos ni reservas: para encargar, llama al 965 05 30 19 o usa ese botón desde Google Maps.',
  },
  {
    question: '¿Qué valoración tiene?',
    answer:
      '4,2 sobre 5 en Google Maps en la consulta del 12 de noviembre de 2026. La vista pública consultada no mostraba el número de reseñas, así que aquí no se indica.',
  },
  {
    question: '¿De dónde salen las fotos?',
    answer:
      'Del perfil público del local en Google Maps. Se muestran como referencia del establecimiento; si eres el titular y quieres retirar alguna, escríbenos y la quitamos.',
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
    'Doner Kebab Albir, restaurante especializado en döner kebab en la avenida de l\'Albir, 80, local 5, en l\'Albir (03580 L\'Alfàs del Pi, Alicante). Web informativa con teléfono, horario, fotos y mapa.',
  url: `${site.siteUrl}/`,
  image: `${site.siteUrl}/og.jpg`,
  telephone: business.phone,
  servesCuisine: ['Döner kebab', 'Turca'],
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
