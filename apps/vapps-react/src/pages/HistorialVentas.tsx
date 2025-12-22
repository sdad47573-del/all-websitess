import { VapListItem } from '@react-components';
import Stats from '../components/Stats';
import { imageBrandMap, imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';
import { SELL } from '../data/SELL';
import { useGetAllBuyedItemsPendingSales } from '../hooks';
import type { ItemsStockRow } from '../hooks/useGetAllBuyedItemsPendingSales';

// TODO: sale vapers en negativo,
// eso es porque se han puesto en amount mas cantidad de la que se ha comprado, mirar las compras y ver que ha pasado
// no es tan asi, esto es el historial de ventas antiguo, antes de la app, hay que ir incluyendolo en la app y quitar SELL
export const HistorialVentas = () => {
	const { data } = useGetAllBuyedItemsPendingSales();

	return (
		<main>
			<Stats
				items={[
					{
						label: 'Calculo Total',
						value: SELL.reduce((total, item) => total + item.price, 0) + '€',
						icon: 'ri-shopping-cart-line',
						color: 'bg-blue-500',
					},
					{
						label: 'Cobrado Total',
						value: SELL.reduce((total, item) => total + item.received, 0) + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
				]}
			/>

			<div className="p-5">
				<h2 className="text-xl font-semibold">Pendientes por asignar sus ventas</h2>
				<h3 className="mb-4 text-lg">Se han vendido pero no hemos registrado su venta</h3>
				<div className="mb-20 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{data?.map((item: ItemsStockRow) => (
						<VapListItem
							key={item.item_id}
							id={item.item_id}
							title={translateItem(item.title)}
							src={item.brand === 'VAPSOLO' ? imageMap[item.title] : imageBrandMap[item.brand]}
							amount={item.total_buyed - item.total_sold}
						/>
					))}
				</div>
				<h2 className="mb-4 text-xl font-semibold">Ventas</h2>
			</div>
			{/* <!-- TODO: hacer un comp de vapslit generico --> */}
			{/* <!-- <VapList /> --> */}

			<ul className="space-y-6">
				{/* TODO: no es buy */}
				{SELL.map((buy) => (
					<li
						key={`${buy.data}-${buy.price}-${buy.quantity}`}
						className="rounded-lg bg-white p-4 shadow-md"
					>
						<div className="mb-3">
							<h3 className="text-lg font-bold text-teal-700">Fecha: {buy.data}</h3>
							<p className="text-gray-600">
								Precio: <span className="font-semibold">{buy.price} €</span>
							</p>
							<p className="text-gray-600">
								Cantidad: <span className="font-semibold">{buy.quantity}</span>
							</p>
						</div>
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
							{buy.items.map((item, index) => (
								<VapListItem
									key={item.name}
									// TODO quitar el index, id
									id={index}
									title={translateItem(item.name)}
									src={imageMap[item.name]}
									// src={item.brand === 'VAPSOLO' ? imageMap[item.title] : imageBrandMap[item.brand]}
									amount={item.amount}
								/>
							))}
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};
