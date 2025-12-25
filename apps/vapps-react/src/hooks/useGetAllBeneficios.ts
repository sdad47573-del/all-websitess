import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Beneficio } from '../types';

// TODO: sin uso, no existe la tabla ya
export async function getAllBeneficios() {
	return await supabaseBrowserClient.from('beneficios').select('*');
}

export function useGetAllBeneficios() {
	return useSupabaseQuery<Beneficio[], Beneficio[]>(['beneficios'], getAllBeneficios, {
		select: (data) =>
			data?.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()) ?? [],
	});
}
