import type { FinancialRecordWithProfile } from "@/hooks";

// Move logic inside component or useMemo, or define outside without export
export const getGroupedFinancialRecords = (data: FinancialRecordWithProfile[]) => {
    const result = data.reduce<Record<string, number>>((acc, item) => {
        const name = item.profiles?.full_name ?? 'Desconocido';
        if (!acc[name]) {
            acc[name] = 0;
        }
        acc[name] += item.amount;
        return acc;
    }, {});

    return Object.entries(result).map(([full_name, totalAmount]) => ({
        full_name,
        totalAmount,
    }));
};