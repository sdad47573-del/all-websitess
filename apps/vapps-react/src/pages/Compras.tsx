import { useMemo } from 'react';
import { BuyList } from '../components/BuyList';
import { Loading } from '../components/Loading';
import { PageLayout } from '../components/PageLayout';
import { ProductInventory } from '../components/ProductInventory';
import Stats from '../components/Stats';
import { useGetAllBuy, useGetAllBuyedItemsTotals, useGetAllFinancialRecords } from '../hooks';

export const Compras = () => {
	const { data: buy, isLoading: isLoadingBuy } = useGetAllBuy();
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
			/>
		</PageLayout>
	);
};
