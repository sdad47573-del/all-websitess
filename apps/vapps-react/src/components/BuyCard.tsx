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
	facture_url?: string | null;
	onOpenInvoice?: (url: string) => void;
}

export const BuyCard = ({
	fecha,
	eur,
	total,
	items,
	label,
	payed,
	pending,
	facture_url,
	onOpenInvoice,
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
		<>
			<ExpandableTransactionCard
				title={label || 'Compra de Productos'}
				date={fecha}
				stats={stats}
				status={status}
				items={transactionItems}
				actions={
					facture_url ? (
						<button
							type="button"
							onClick={() => {
								if (onOpenInvoice && facture_url) {
									onOpenInvoice(facture_url);
								}
							}}
							className="hover:bg-base-200 flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold"
							aria-label="Ver factura"
							title="Ver factura"
						>
							<i className="ri-file-pdf-line text-error text-lg" aria-hidden="true" />
							<span className="text-base-content hidden sm:inline">Ver factura</span>
						</button>
					) : undefined
				}
			/>
		</>
	);
};
