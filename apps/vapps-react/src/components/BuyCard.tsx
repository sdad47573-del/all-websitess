import { ExpandableTransactionCard } from './common/ExpandableTransactionCard';

interface BuyItem {
    id: string | number;
    title: string;
    brand: string;
    image_url: string | null;
    quantity: number;
}

interface BuyCardProps {
    fecha: string;
    eur: number;
    total: number;
    items: BuyItem[];
    label?: string;
    payed?: boolean;
    pending?: number;
}

export const BuyCard = ({
    fecha,
    eur,
    total,
    items,
    label,
    payed,
    pending,
}: BuyCardProps) => {
    const stats = [
        { label: 'Vapers', value: total },
        { label: 'Inversión', value: `${eur.toFixed(2)}€` },
    ];

    const status =
        payed !== undefined
            ? {
                label: !payed ? 'Pendiente' : 'Pagado',
                value: `${(!payed && pending !== undefined ? pending : eur).toFixed(2)}€`,
                isPending: !payed,
            }
            : undefined;

    const transactionItems = items?.map((item) => ({
        id: item.id,
        title: item.title,
        brand: item.brand,
        image_url: item.image_url,
        amount: item.quantity,
    }));

    return (
        <ExpandableTransactionCard
            title={label || 'Compra de Productos'}
            date={fecha}
            stats={stats}
            status={status}
            items={transactionItems}
        />
    );
};
