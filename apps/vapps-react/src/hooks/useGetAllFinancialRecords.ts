import { useQuery } from '@tanstack/react-query';
import { supabaseBrowserClient } from '../services/init.service';

export async function getAllFinancialRecords() {
	const { data, error } = await supabaseBrowserClient.from('financial_records').select(`
		id,
		amount,
		date,
		label,
		profiles(full_name)
		`);

	if (error) {
		console.error('Error getting financial records:', error);
	}
	const d = data?.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return { data: d, error };
}

export function useGetAllFinancialRecords() {
	return useQuery({
		queryKey: ['financial_records'],
		queryFn: async () => {
			const { data, error } = await getAllFinancialRecords();
			if (error) throw error;
			return data;
		},
	});
}

// TODO: sin terminar, ahora mismo no tiene utilidad
// export async function getAllFinancialRecordsByProfileId(profileId) {
// 	const { data, error } = await supabaseBrowserClient
// 		.from('financial_records')
// 		.select(
// 			`
// 		id,
// 		amount,
// 		date,
// 		label,
// 		profiles(full_name)
// 		`,
// 		)
// 		.eq('profiles.id', profileId);

// 	if (error) {
// 		console.error('Error getting financial records:', error);
// 	}
// 	const d = data?.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
// 	return { data: d, error };
// }
// export function useGetAllFinancialRecordsByProfileId(profileId: string) {
// 	return useQuery({
// 		queryKey: ['financial_records', profileId],
// 		queryFn: async () => {
// 			const { data, error } = await getAllFinancialRecords(profileId);
// 			if (error) throw error;
// 			return data;
// 		},
// 	});
// }
