import { imageBrandMap, imageMap } from '../data/maps/img';

/**
 * Gets the image URL for an item based on its title and brand.
 * If the brand is VAPSOLO, it uses the title-based map.
 * Otherwise, it uses the brand-based map.
 */
export const getItemImageUrl = (title: string, brand: string) => {
	const url = brand === 'VAPSOLO' ? imageMap[title] : imageBrandMap[brand];
	return url ?? 'https://via.placeholder.com/150';
};
