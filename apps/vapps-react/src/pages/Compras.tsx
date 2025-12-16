import { VapListItem } from '@react-components';
import Stats from '../components/Stats';
import { imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';
import { useGetAllBuy, useGetAllBuyedItemsTotals, useGetAllFinancialRecords } from '../hooks';

export const Compras = () => {
	const { data: buy } = useGetAllBuy();
	// TODO: poner solo los registro de caja, no el total de todos
	const { data: finatial } = useGetAllFinancialRecords();
	const { data } = useGetAllBuyedItemsTotals();
	const ingresosTotal = finatial?.reduce((total, item: any) => total + item.amount, 0) as number;

	const buyUdsTotal = buy?.reduce((total, item: any) => total + item.total, 0) as number;
	const buyEurTotal = buy?.reduce((total, item: any) => total + item.eur, 0) as number;

	const restante = (ingresosTotal - buyEurTotal).toFixed(2);
	const cubierto = ((ingresosTotal / buyEurTotal) * 100).toFixed(2);

	return (
		<main className="pb-6">
			{buy && finatial && buyUdsTotal && buyEurTotal && ingresosTotal && (
				<Stats
					items={[
						{
							label: 'Cantidad Totales',
							value: buyUdsTotal,
							icon: 'ri-shopping-cart-line',
							color: 'bg-blue-500',
						},
						{
							label: 'Compras Totales',
							value: buyEurTotal + '€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-purple-500',
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
			<h2 className="px-5 pt-6 text-xl font-semibold">Compras totales</h2>
			<h3 className="mb-4 px-5 text-lg">Cantidad de vapers comprados desde el inicio</h3>
			<div className="mb-20 grid grid-cols-2 gap-3 px-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
				{(data as any)?.map((item: any) => (
					<VapListItem
						key={item.item_id}
						id={item.item_id}
						title={translateItem(item.title)}
						src={imageMap[item.title]}
						amount={item.total_quantity}
					/>
				))}
			</div>
			<div className="p-5">
				<h2 className="text-xl font-semibold">Historial de Compras</h2>
			</div>
			{/* <!-- TODO: hacer un comp de vapslit generico --> */}
			{/* <!-- <VapList /> --> */}
			<ul className="space-y-">
				{buy?.map((item: any) => (
					<li className="p-4 pb-6 shadow">
						<div className="mb-3 flex justify-between">
							<h3 className="text-lg font-bold text-teal-700">Fecha: {item.fecha}</h3>
							<div className="w-28">
								<p className="text-gray-600">
									Precio: <span className="font-semibold">{item.eur} €</span>
								</p>
								<p className="text-gray-600">
									Cantidad: <span className="font-semibold">{item.total}</span>
								</p>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
							{(item as any)?.items?.map((item: any, index: number) => (
								<VapListItem
									key={index}
									id={index}
									title={translateItem(item.title)}
									src={imageMap[item.title]}
									amount={item.quantity}
								/>
							))}
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};
