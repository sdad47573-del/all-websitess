import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';

export type FinancialRecordWithProfile = {
	id: number;
	amount: number;
	date: string;
	label: string;
	profiles: { full_name: string };
};

export async function getAllFinancialRecords() {
	return await supabaseBrowserClient.from('financial_records').select(
		`
		id,
		amount,
		date,
		label,
		profiles(full_name)
		`,
	);
}

export function useGetAllFinancialRecords() {
	return useSupabaseQuery<FinancialRecordWithProfile[], FinancialRecordWithProfile[]>(
		['financial_records'],
		getAllFinancialRecords,
		{
			select: (data) =>
				data?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) ?? [],
		},
	);
}
