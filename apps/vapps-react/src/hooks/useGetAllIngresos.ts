import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

type IngresoRow = {
	id: number;
	fecha: string;
	amount: number;
	concept: string;
};

// TODO: SIN USAR
export async function getAllIngresos() {
	return await supabaseBrowserClient.from('ingresos').select('*');
}

export function useGetAllIngresos() {
	return useSupabaseQuery<IngresoRow[], IngresoRow[]>(['ingresos'], getAllIngresos, {
		select: (data) =>
			data?.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()) ?? [],
	});
}
