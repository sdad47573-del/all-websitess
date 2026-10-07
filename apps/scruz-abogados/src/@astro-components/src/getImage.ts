import { getImage as astroGetImage } from 'astro:assets';

type GetImageParams = Parameters<typeof astroGetImage>[0];
type GetImageResult = Awaited<ReturnType<typeof astroGetImage>>;

/**
 * Thin wrapper around `astro:assets#getImage` kept for a stable import path.
 * Sharp/WebP conversion runs only during `astro build` (production).
 * No DEV branch needed — Astro 6 skips heavy transforms in dev automatically.
 */
export default function getImage(params: GetImageParams): Promise<GetImageResult> {
	return astroGetImage(params);
}
