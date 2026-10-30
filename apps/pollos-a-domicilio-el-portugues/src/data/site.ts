export const BUSINESS = {
  name: 'Pollos a Domicilio El Portugués',
  shortName: 'El Portugués',
  mark: 'EP',
  city: 'Sevilla',
  region: 'Andalucía',
  postalCode: '41005',
  country: 'ES',
  siteUrl: 'https://pollos-a-domicilio-el-portugues.vercel.app',
  geo: { lat: 37.3985396, lng: -5.9195082 },
  featureId: '0xd126f004639fa43:0xf058bf1e88f57053',
  description:
    'Descubre Pollos a Domicilio El Portugués en Sevilla. Consulta la ubicación en Google Maps y confirma la carta, los horarios y el servicio de reparto con el establecimiento.',
};

export const MAPS = {
  place: 'https://www.google.com/maps/place/Pollos+a+Domicilio+%22El+Portugu%C3%A9s%22/@37.3985396,-5.9195082,17z/data=!4m6!3m5!1s0xd126f004639fa43:0xf058bf1e88f57053!8m2!3d37.3985396!4d-5.9195082!16s%2Fg%2F11z630b4bl',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3985396%2C-5.9195082',
  embed: 'https://maps.google.com/maps?q=37.3985396,-5.9195082&z=17&hl=es&output=embed',
};

export const SERVICES = [
  'Pollo asado',
  'Comida para llevar',
  'Consulta disponibilidad',
];

export const MENU = [
  {
    title: 'Especialidades',
    items: [
      { name: 'Pollo entero', note: 'Consulta disponibilidad y preparación en la ficha del establecimiento.' },
      { name: 'Medio pollo', note: 'Pregunta qué acompañamientos están disponibles.' },
      { name: 'Acompañamientos', note: 'Consulta la carta y las opciones del día directamente con el local.' },
    ],
  },
  {
    title: 'Pedidos',
    items: [
      { name: 'Para recoger', note: 'Confirma el horario y el tiempo de preparación antes de desplazarte.' },
      { name: 'Entrega a domicilio', note: 'La disponibilidad del reparto depende de la zona y del horario.' },
    ],
  },
];

export const FAQ = [
  {
    q: '¿Dónde está El Portugués?',
    a: 'Consulta el pin de la ficha de Google Maps para ver la ubicación exacta y abrir la ruta. No he podido confirmar la dirección de calle asociada a este pin.',
  },
  {
    q: '¿Cuál es el teléfono del establecimiento?',
    a: 'Los directorios disponibles muestran teléfonos de locales con el mismo nombre en otras direcciones, así que no puedo confirmar que correspondan a este pin. Consulta el teléfono actualizado en la ficha de Google Maps.',
  },
  {
    q: '¿Puedo pedir a domicilio?',
    a: 'El nombre de la ficha menciona servicio a domicilio, pero la zona, el horario y la disponibilidad pueden cambiar. Confírmalo directamente con el establecimiento.',
  },
  {
    q: '¿Qué platos tienen?',
    a: 'La información pública asocia el negocio con pollos y comida para llevar. Consulta la carta actual y los acompañamientos disponibles en la ficha del local.',
  },
  {
    q: '¿Cuáles son los horarios y precios?',
    a: 'No he podido verificar horarios ni precios para el establecimiento situado en este pin. Comprueba la ficha de Maps antes de hacer un pedido o desplazarte.',
  },
];
