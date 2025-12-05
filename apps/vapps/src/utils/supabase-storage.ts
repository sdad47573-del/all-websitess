/**
 * Utility functions for Supabase Storage URLs
 */

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL;
const BUCKET_NAME = 'vaper-images';

/**
 * Generates a public URL for an image stored in Supabase Storage
 * @param imagePath - The path to the image within the bucket (e.g., 'VAPS/arandano-hielo.png')
 * @returns The full public URL to access the image
 */
export function getSupabaseImageUrl(imagePath: string): string {
	if (!SUPABASE_URL) {
		console.error('PUBLIC_SUPABASE_URL is not defined in environment variables');
		return '';
	}

	// Remove leading slash if present
	const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;

	return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${cleanPath}`;
}

/**
 * Generates URLs for all vaper flavor images
 * @param fileName - The filename of the image (e.g., 'arandano-hielo.png')
 * @returns The full public URL to access the image
 */
export function getVaperImageUrl(fileName: string): string {
	return getSupabaseImageUrl(`VAPS/${fileName}`);
}
