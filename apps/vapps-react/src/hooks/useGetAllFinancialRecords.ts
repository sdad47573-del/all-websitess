import { supabaseBrowserClient } from '../services/init.service';
import { useSupabaseQuery } from './useSupabaseQuery';
import type { Tables } from 'supabase-sdk';

export type FinancialRecordWithProfile = Tables<'financial_records'> & {
	profiles: Pick<Tables<'profiles'>, 'full_name'> | null;
};

export async function getAllFinancialRecords() {
	return await supabaseBrowserClient.from('financial_records').select(
		`
		*,
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
