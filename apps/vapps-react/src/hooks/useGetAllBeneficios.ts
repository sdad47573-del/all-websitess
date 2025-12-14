import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export async function getAllBeneficios() {
	const { data, error } = await supabaseBrowserClient.from('beneficios').select('*');

	if (error) {
		console.error('Error getting beneficios:', error);
	}
	const d = data?.sort(
		(a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
	);
	return { data: d, error };
}

export function useGetAllBeneficios() {
	return useQuery({
		queryKey: ['beneficios'],
		queryFn: async () => {
			const { data, error } = await getAllBeneficios();
			if (error) throw error;
			return data;
		},
	});
}
