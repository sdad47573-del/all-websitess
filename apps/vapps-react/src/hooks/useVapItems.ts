import { useQuery } from '@tanstack/react-query';
import { imageMap } from '../data/maps/img';
import { getAllItems } from '../services/items.service';

export interface VapItem {
	id: number;
	src: string;
	title: string;
	amount: number;
}

interface DBItem {
	id: number;
	title: string;
	es_title: string;
	amount: number;
	active: boolean;
}

const fetchVapItems = async (): Promise<VapItem[]> => {
	const { data } = await getAllItems();

	if (!data) return [];

	const dbItems = data as unknown as DBItem[];
	return dbItems
		.map((item) => {
			const srcEntry = imageMap[item.title];
			// Handle both direct string paths (if any) and imported image objects (Astro's default)
			const src =
				srcEntry && typeof srcEntry === 'object' && 'src' in srcEntry ? srcEntry.src : srcEntry;

			return {
				id: item.id,
				src: src,
				title: item.es_title,
				amount: item.amount,
			};
		})
		.filter((item) => item.src)
		.sort((a, b) => b.amount - a.amount);
};

export const useVapItems = () => {
	const { data: items = [], isLoading } = useQuery({
		queryKey: ['vapItems'],
		queryFn: fetchVapItems,
	});

	return { items, isLoading };
};
