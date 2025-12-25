import { SaleCard } from './SaleCard';
import { EmptyState } from './EmptyState';
import { SectionHeader } from './SectionHeader';
import type { SalesByDateRow } from '@/hooks/useGetAllSalesGroupedByDate';

interface SaleListProps {
    sales?: SalesByDateRow[] | null;
    title: string;
    subtitle?: string;
    emptyMessage?: string;
}

export const SaleList = ({ sales, title, subtitle, emptyMessage }: SaleListProps) => {
    if (!sales || sales.length === 0) {
        return (
            <>
                <SectionHeader title={title} subtitle={subtitle} />
                <EmptyState message={emptyMessage} />
            </>
        );
    }

    return (
        <>
            <SectionHeader title={title} subtitle={subtitle} />
            <ul className="space-y-4 px-5 pb-5">
                {sales.map((sale) => (
                    <SaleCard key={sale.id} {...sale} />
                ))}
            </ul>
        </>
    );
};
