// import { supabaseBrowserClient } from '../services/init.service';
// import { useSupabaseQuery } from './useSupabaseQuery';
// import type { Beneficio } from '../types';

// export async function getAllBeneficios() {
// 	const { data, error } = await supabaseBrowserClient.from('DEPRECATED_beneficios').select('*');
// 	return { data: data as unknown as Beneficio[] | null, error };
// }

// export function useGetAllBeneficios() {
// 	return useSupabaseQuery<Beneficio[], Beneficio[]>(['beneficios'], getAllBeneficios, {
// 		select: (data) =>
// 			data?.sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()) ?? [],
// 	});
// }
