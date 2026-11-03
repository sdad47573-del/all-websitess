/**
 * Parejas de páginas español ↔ inglés.
 *
 * Solo existen las fichas que tienen traducción real (Málaga y extranjería).
 * El selector de idioma del topbar usa este mapa: en una página española lleva
 * a su versión inglesa y en una inglesa, de vuelta a la española. Las páginas
 * sin pareja llevan a la landing inglesa de Málaga, que es la puerta de entrada
 * del público expatriado.
 *
 * Añadir un idioma o una página es tocar solo este archivo (y la página nueva).
 */
export const EN_COUNTERPARTS: Record<string, string> = {
	'/abogados-en-malaga/': '/en/lawyers-in-malaga/',
	'/nacionalidad-extranjeria/': '/en/immigration-and-nationality/',
};

/** Inversa derivada: ruta inglesa → ruta española. */
export const ES_COUNTERPARTS: Record<string, string> = Object.fromEntries(
	Object.entries(EN_COUNTERPARTS).map(([es, en]) => [en, es]),
);

/** Destino del selector en las páginas que aún no tienen versión inglesa. */
export const EN_HOME = '/en/lawyers-in-malaga/';

/** `true` si la ruta pertenece al árbol inglés (`/en/...`). */
export const isEnglishRoute = (pathname: string) => pathname.startsWith('/en/');
