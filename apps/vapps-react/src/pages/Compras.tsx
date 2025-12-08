import Stats from '../components/Stats';
import { VapListItem } from '@react-components';
import { BUY, TOTAL_BUY } from '../data/BUY';
import { TOTAL_INGRESOS } from '../data/INGRESOS';
import { imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';

export const Compras = () => {
	return (
		<main className="pb-6">
			<Stats
				items={[
					{
						label: 'Cantidad Totales',
						value: BUY.reduce((total, buy) => total + buy.quantity, 0),
						icon: 'ri-shopping-cart-line',
						color: 'bg-blue-500',
					},
					{
						label: 'Compras Totales',
						value: TOTAL_BUY + '€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
					{
						label: 'Cubierto %',
						value: ((TOTAL_INGRESOS / TOTAL_BUY) * 100).toFixed(2) + '%',
						icon: 'ri-bar-chart-line',
						color: 'bg-purple-500',
					},
					{
						label: 'Restante',
						value: (TOTAL_INGRESOS - TOTAL_BUY).toFixed(2) + '€',
						icon: 'ri-line-chart-line',
						color: 'bg-teal-500',
					},
				]}
			/>

			<div className="p-5">
				<h2 className="text-xl font-semibold">Compras</h2>
			</div>
			{/* <!-- TODO: hacer un comp de vapslit generico --> */}
			{/* <!-- <VapList /> --> */}

			<ul className="space-y-">
				{BUY.map((buy) => (
					<li className="p-4 pb-6 shadow">
						<div className="mb-3 flex justify-between">
							<h3 className="text-lg font-bold text-teal-700">Fecha: {buy.data}</h3>
							<div className="w-28">
								<p className="text-gray-600">
									Precio: <span className="font-semibold">{buy.price} €</span>
								</p>
								<p className="text-gray-600">
									Cantidad: <span className="font-semibold">{buy.quantity}</span>
								</p>
							</div>
						</div>
						<div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
							{buy.items.map((item, index) => (
								<VapListItem
									key={index}
									item={{
										id: index, // Using index as fallback id
										title: translateItem(item.name),
										src: imageMap[item.name],
										amount: item.amount,
									}}
								/>
							))}
						</div>
					</li>
				))}
			</ul>
		</main>
	);
};
