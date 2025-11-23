import { getImage } from 'astro:assets';

const isDev = import.meta.env.DEV;

export default async function (params: Parameters<typeof getImage>) {
	const optimized = isDev ? params.src : await getImage(params);
	return optimized;
}
