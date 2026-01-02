import { useState } from 'react';
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
	const [isPdfOpen, setIsPdfOpen] = useState(false);

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
								} else {
									setIsPdfOpen(true);
								}
							}}
							className="hover:bg-base-200 flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold"
							aria-label="Ver factura"
							title="Ver factura"
						>
							<i className="ri-file-pdf-line text-lg text-red-600" aria-hidden="true" />
							<span className="text-base-content hidden sm:inline">Ver factura</span>
						</button>
					) : undefined
				}
			/>

			{onOpenInvoice
				? null
				: isPdfOpen &&
					facture_url && (
						<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
							<div className="h-[80vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-lg">
								<div className="flex items-center justify-between border-b p-2">
									<h4 className="text-base font-bold">Factura</h4>
									<div className="flex items-center gap-2">
										<a
											href={facture_url}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:bg-base-200 rounded-md px-3 py-1 text-xs font-bold"
										>
											Abrir en nueva pestaña
										</a>
										<button
											type="button"
											onClick={() => setIsPdfOpen(false)}
											className="hover:bg-base-200 rounded-md p-1"
											aria-label="Cerrar visor de factura"
										>
											<i className="ri-close-line text-xl" />
										</button>
									</div>
								</div>
								<iframe src={facture_url} className="h-full w-full" title="Factura PDF" />
							</div>
						</div>
					)}
		</>
	);
};
