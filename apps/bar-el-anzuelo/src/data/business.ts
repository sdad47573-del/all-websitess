// Datos del negocio. Fuente única de verdad: las páginas y el pie deben leer de aquí.
// Solo datos verificables. El email y la dirección exacta NO están confirmados:
// se piden como dato pendiente, no se inventan.

export const NAME = 'El Anzuelo';

export const PHONE = '686 29 89 29';
export const PHONE_DIGITS = '686298929';
export const PHONE_HREF = `tel:+34${PHONE_DIGITS}`;
export const WA_HREF = `https://wa.me/34${PHONE_DIGITS}`;

export const CITY = 'Málaga';
export const CITY_LOCALE = 'Málaga, España';
export const REGION_CODE = 'ES-AN';

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${NAME} ${CITY}`)}`;

// Horario mostrado en el pie. Google lo usa para mostrar el negocio como abierto
// o cerrado en los resultados locales, asi que vive aqui como fuente unica.
export const HOURS_LABEL = 'Martes a domingo: 12:00 - 23:30';

// Mismo horario en el formato que espera schema.org (dia 1-7, siendo 1 lunes).
export const OPENING_HOURS = [
	{
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		opens: '12:00',
		closes: '23:30',
	},
];