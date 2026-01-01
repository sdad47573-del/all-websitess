import placeholderImage from '@assets/placeholder-600x600.webp';

/**
 * Gets the image URL for an item based on its title and brand.
 * If the brand is VAPSOLO, it uses the title-based map.
 * Otherwise, it uses the brand-based map.
 */
// TODO: remover y hacer que las imagenes vengan de supabasee
export const getItemImageUrl = (image_url: string | null | undefined) => {
	return image_url || placeholderImage;
};
