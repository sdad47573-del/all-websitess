import { useMemo, useState } from 'react';
import { BuyList } from '../components/BuyList';
import { Loading } from '../components/Loading';
import { PageLayout } from '../components/PageLayout';
import { ProductInventory } from '../components/ProductInventory';
import Stats from '../components/Stats';
import { ErrorState } from '../components/ErrorState';
import { useGetAllBuy, useGetAllBuyedItemsTotals, useGetAllFinancialRecords } from '../hooks';

export const Compras = () => {
	const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);
	const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
	const { data: buy, isLoading: isLoadingBuy, error: errorBuy } = useGetAllBuy();
	const { data: finatial } = useGetAllFinancialRecords();
	const { data: totalsData } = useGetAllBuyedItemsTotals();

	const ingresosTotal =
		finatial?.reduce(
			(total: number, item) => total + (item.profiles.full_name === 'Caja' ? item.amount : 0),
			0,
		) ?? 0;

	const buyUdsTotal = buy?.reduce((total: number, item) => total + item.total, 0) ?? 0;
	const buyEurTotal = buy?.reduce((total: number, item) => total + item.eur, 0) ?? 0;

	const buyWithCoverage = useMemo(() => {
		if (!buy) return [];

		// Ordenar por fecha ascendente para calcular la cobertura cronológicamente
		const sortedAsc = [...buy].sort(
			(a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime(),
		);

		let budget = ingresosTotal;
		const coverageInfo = new Map<number, { payed: boolean; pending: number }>();

		sortedAsc.forEach((item) => {
			if (budget >= item.eur) {
				coverageInfo.set(item.id, { payed: true, pending: 0 });
				budget -= item.eur;
			} else {
				const covered = Math.max(0, budget);
				const pending = item.eur - covered;
				coverageInfo.set(item.id, { payed: false, pending: pending });
				budget = 0;
			}
		});

		return buy.map((item) => ({
			...item,
			payed: coverageInfo.get(item.id)?.payed ?? false,
			pending: coverageInfo.get(item.id)?.pending ?? 0,
		}));
	}, [buy, ingresosTotal]);

	// const pendingTotal = buyWithCoverage.reduce(
	// 	(total, item) => (!item.payed ? total + item.pending : total),
	// 	0,
	// );
	// const pendingcostTotal = buyWithCoverage.reduce(
	// 	(total, item) => (!item.payed ? total + item.eur : total),
	// 	0,
	// );
	const pedidospendientes = buyWithCoverage.reduce(
		(total, item) => (!item.payed ? total + 1 : total),
		0,
	);
	const restante = (ingresosTotal - buyEurTotal).toFixed(2);
	// const cubierto = ((pendingTotal * 100) / pendingcostTotal || 0).toFixed(2);

	if (isLoadingBuy) return <Loading text="Cargando historial de compras..." />;
	if (errorBuy) return <ErrorState message="No se pudieron cargar las compras" details={String((errorBuy as any)?.message ?? errorBuy)} />;

	return (
		<PageLayout>
			{buy && finatial && (
				<Stats
					items={[
						{
							label: 'Compras Totales',
							value: buyEurTotal + '€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-purple-500',
						},
						{
							label: 'Pedidos por cubrir',
							value: pedidospendientes,
							icon: 'ri-shopping-cart-line',
							color: 'bg-blue-500',
						},
						// {
						// 	label: 'Cubierto %',
						// 	value: cubierto + '%',
						// 	icon: 'ri-bar-chart-line',
						// 	color: Number(cubierto) >= 100 ? 'bg-green-500' : 'bg-red-500',
						// },
						{
							label: Number(restante) > 0 ? 'Ganancias' : 'Pendiente',
							value: restante + '€',
							icon: 'ri-line-chart-line',
							color: Number(restante) > 0 ? 'bg-teal-500' : 'bg-red-500',
						},
					]}
				/>
			)}

			<ProductInventory
				items={totalsData}
				title={`Compras totales: ${buyUdsTotal} vapers`}
				subtitle="Cantidad acumulada de vapers adquiridos desde el inicio"
			/>

			<BuyList
				buys={buyWithCoverage}
				title="Historial de Compras"
				emptyMessage="No se han registrado compras todavía"
				onOpenInvoice={(url) => {
					setInvoiceUrl(url);
					setIsInvoiceOpen(true);
				}}
			/>
			{isInvoiceOpen && invoiceUrl && (
				<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 p-4">
					<div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl shadow-lg overflow-hidden">
						<div className="border-b flex items-center justify-between p-2">
							<h4 className="text-base font-bold">Factura</h4>
							<div className="flex items-center gap-2">
								<a
									href={invoiceUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:bg-base-200 rounded-md px-3 py-1 text-xs font-bold"
								>
									Abrir en nueva pestaña
								</a>
								<button
									type="button"
									onClick={() => setIsInvoiceOpen(false)}
									className="hover:bg-base-200 rounded-md p-1"
									aria-label="Cerrar visor de factura"
								>
									<i className="ri-close-line text-xl" />
								</button>
							</div>
						</div>
						<iframe src={invoiceUrl} className="w-full h-full" title="Factura PDF" />
					</div>
				</div>
			)}
		</PageLayout>
	);
};
