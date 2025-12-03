// Mapa de traducción de sabores al español
export const ITEMS_ES: Record<string, string> = {
	'Double Apple': 'Manzana Doble',
	'Peach Mango Pineapple': 'Melocotón Mango Piña',
	'Pink Lemonade': 'Limonada Rosa',
	'Raspberry Watermelon': 'Frambuesa Sandía',
	'Strawberry Ice': 'Fresa Hielo',
	'Strawberry Kiwi': 'Fresa Kiwi',
	'cool mint': 'Menta Fresca',
	'love 66': 'Amor 66',
	'strawberry vanilla cola': 'Fresa Vainilla Cola',
	'Lemon Lime': 'Lima Limón',
	'Mixed Berry': 'Frutos del Bosque',
	'Red Bull': 'Red Bull',
	'Strawberry Banana': 'Fresa Plátano',
	'Watermelon Ice': 'Sandía Hielo',
	'Blueberry Cherry Cranberry': 'Arándano Cereza Arándano Rojo',
	'Blueberry Ice': 'Arándano Hielo',
	'Kiwi Passion Fruit Guava': 'Kiwi Maracuyá Guayaba',
	'Peach Berry': 'Melocotón Frutos del Bosque',
	'Strawberry Watermelon': 'Fresa Sandía',
	'blackberry blueberry ice': 'Mora Arándano Hielo',
	'triple cherry': 'Triple Cereza',
	'Black Ice Drangofruit Strawberry': 'Hielo Negro Pitaya Fresa',
	'Blueberry Blackcurrant Ice': 'Arándano Grosella Negra Hielo',
	'Blueberry Cherry Cola': 'Arándano Cereza Cola',
	'grape burst': 'Explosión de Uva',
};

// Función helper para traducir items
export function translateItem(item: string): string {
	return ITEMS_ES[item] || item;
}
