// Mapa de traducción de sabores al español
export const ITEMS_ES: Record<string, string> = {
	'Black Ice Drangofruit Strawberry': 'Regaliz-Negro Pitaya Fresa Helada',
	'blackberry blueberry ice': 'Moras Arándano-Azul Helada',
	'Blueberry Blackcurrant Ice': 'Arándano-Azul Baya-Negra Helada',
	'Blue Razz': 'Frambuesa Azul',
	'Blueberry Cherry Cola': 'Coca-Cola de Arándano-Azul Cereza',
	'Blueberry Cherry Cranberry': 'Arándano-Azul Cereza Arándano-Rojo',
	'Blueberry Ice': 'Arándano-Azul Helado',
	'cool mint': 'Chicle Menta',
	'Double Apple': 'Doble Manzana',
	'grape burst': 'Explosión de Uva',
	'Kiwi Passion Fruit Guava': 'Kiwi Maracuyá Guayaba',
	'Lemon Lime': 'Lima Limón',
	'love 66': 'Love 66',
	'Mixed Berry': 'Frambuesa Arándano Cereza Mora Fresa',
	'Peach Berry': 'Melocoton Frutos del Bosque',
	'Peach Mango Pineapple': 'Melocoton Mango Piña',
	'Pink Lemonade': 'Limonada Rosa',
	'Raspberry Watermelon': 'Frambuesa Sandía',
	'Red Bull': 'Red Bull',
	Skittles: 'Skittles',
	'Strawberry Ice': 'Fresa Helada',
	'Strawberry Banana': 'Fresa Banana',
	'Strawberry Kiwi': 'Fresa Kiwi',
	'strawberry vanilla cola': 'Coca-Cola de Fresa Vainilla',
	'Strawberry Watermelon': 'Fresa Sandía',
	'Summer Dream': 'Sueño de Verano',
	'triple cherry': 'Triple Cereza',
	'Watermelon Ice': 'Sandía Helada',
};

// Función helper para traducir items
export function translateItem(item: string): string {
	return ITEMS_ES[item] || item;
}
