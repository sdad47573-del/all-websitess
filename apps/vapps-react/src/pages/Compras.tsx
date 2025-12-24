import { useMemo } from 'react';
import { VapListItem } from '@react-components';
import Stats from '../components/Stats';
import { imageBrandMap, imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';
import { useGetAllBuy, useGetAllBuyedItemsTotals, useGetAllFinancialRecords } from '../hooks';
import { SectionHeader } from '../components/SectionHeader';
import { BuyCard } from '../components/BuyCard';
import { EmptyState } from '../components/EmptyState';

export const Compras = () => {
	const { data: buy, isLoading: isLoadingBuy } = useGetAllBuy();
	// TODO: poner solo los registro de caja, no el total de todos
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

	const pendingTotal = buyWithCoverage.reduce(
		(total, item) => (!item.payed ? total + item.pending : total),
		0,
	);
	const pendingcostTotal = buyWithCoverage.reduce(
		(total, item) => (!item.payed ? total + item.eur : total),
		0,
	);
	const pedidospendientes = buyWithCoverage.reduce(
		(total, item) => (!item.payed ? total + 1 : total),
		0,
	);
	const restante = (ingresosTotal - buyEurTotal).toFixed(2);
	const cubierto = (pendingTotal * 100 / pendingcostTotal
	).toFixed(2)

	if (isLoadingBuy) return null;

	return (
		<main className="pb-10">
			{buy && finatial && buyUdsTotal && buyEurTotal && ingresosTotal && (
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
						{
							label: 'Cubierto %',
							value: cubierto + '%',
							icon: 'ri-bar-chart-line',
							color: Number(cubierto) >= 100 ? 'bg-green-500' : 'bg-red-500',
						},
						{
							label: Number(restante) > 0 ? 'Ganancias' : 'Pendiente',
							value: restante + '€',
							icon: 'ri-line-chart-line',
							color: Number(restante) > 0 ? 'bg-teal-500' : 'bg-red-500',
						},
					]}
				/>
			)}

			<SectionHeader
				title={`Compras totales: ${buyUdsTotal} vapers`}
				subtitle="Cantidad acumulada de vapers adquiridos desde el inicio"
			/>

			<div className="mb-20 grid grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{totalsData?.map((item) => (
					<VapListItem
						key={item.item_id}
						id={item.item_id}
						title={translateItem(item.title)}
						src={item.brand === 'VAPSOLO' ? imageMap[item.title] : imageBrandMap[item.brand]}
						amount={item.total_quantity ?? item.total_buyed ?? 0}
					/>
				))}
			</div>

			<SectionHeader title="Historial de Compras" />

			{!buy || buy.length === 0 ? (
				<EmptyState message="No se han registrado compras todavía" />
			) : (
				<ul className="space-y-6 px-5">
					{buyWithCoverage.map((item) => (
						<BuyCard
							key={item.id}
							{...item}
						/>
					))}
				</ul>
			)}
		</main>
	);
};
