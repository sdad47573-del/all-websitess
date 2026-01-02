import { BuyCard } from './BuyCard';
import { EmptyState } from './EmptyState';
import { SectionHeader } from './SectionHeader';

interface BuyListProps {
    buys?: any[] | null;
    title: string;
    subtitle?: string;
    emptyMessage?: string;
    onOpenInvoice?: (url: string) => void;
}

export const BuyList = ({ buys, title, subtitle, emptyMessage, onOpenInvoice }: BuyListProps) => {
    if (!buys || buys.length === 0) {
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
            <ul className="space-y-6 px-5">
                {buys.map((buy) => (
                    <BuyCard key={buy.id} {...buy} onOpenInvoice={onOpenInvoice} />
                ))}
            </ul>
        </>
    );
};
