import placeholderImage from '@assets/placeholder-600x600.webp';

export const getImageUrl = (image_url: string | null | undefined) => {
	return image_url || placeholderImage;
};
