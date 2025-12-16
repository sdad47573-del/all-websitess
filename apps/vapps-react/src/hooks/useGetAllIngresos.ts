import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

// TODO: SIN USAR
export async function getAllIngresos() {
	const { data, error } = await supabaseBrowserClient.from('ingresos').select('*');

	if (error) {
		console.error('Error getting ingresos:', error);
	}
	const d = data?.sort(
		(a: any, b: any) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
	);
	return { data: d, error };
}

export function useGetAllIngresos() {
	return useQuery({
		queryKey: ['ingresos'],
		queryFn: async () => {
			const { data, error } = await getAllIngresos();
			if (error) throw error;
			return data;
		},
	});
}
