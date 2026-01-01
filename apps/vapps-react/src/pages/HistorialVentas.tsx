import VapList from '@/components/VapList';
import { PageLayout } from '@/components/PageLayout';
import { SectionHeader } from '@/components/SectionHeader';
import Stats from '../components/Stats';
import { translateItem } from '../data/maps/spanish';
import { SELL } from '../data/SELL';
import { useGetAllBuyedItemsPendingSales } from '../hooks';
import type { ItemsStockRow } from '../hooks/useGetAllBuyedItemsPendingSales';
import { getItemImageUrl } from '@/utils/image.utils';
import { imageMap } from '@/data/maps/img';

// TODO: sale vapers en negativo,
// eso es porque se han puesto en amount mas cantidad de la que se ha comprado, mirar las compras y ver que ha pasado
// no es tan asi, esto es el historial de ventas antiguo, antes de la app, hay que ir incluyendolo en la app y quitar SELL
export const HistorialVentas = () => {
	const { data } = useGetAllBuyedItemsPendingSales();

	const pendientesItems =
		data?.map((item: ItemsStockRow) => ({
			id: item.item_id,
			title: translateItem(item.title),
			src: getItemImageUrl(item.image_url),
			amount: item.total_buyed - item.total_sold,
		})) ?? [];

	const ventasHistoricas = SELL.map((buy) => ({
		fecha: buy.data,
		precio: buy.price,
		cantidad: buy.quantity,
		items: buy.items.map((item, index) => ({
			id: index,
			title: translateItem(item.name),
			src: imageMap[item.name],
			amount: item.amount,
		})),
	}));

	return (
		<PageLayout>
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

			<SectionHeader
				title="Pendientes por asignar sus ventas"
				subtitle="Se han vendido pero no hemos registrado su venta"
			/>
			<VapList items={pendientesItems} isLoading={false} />

			<SectionHeader title="Ventas" />
			<div className="space-y-6 p-5">
				{ventasHistoricas.map((buy) => (
					<div
						key={`${buy.fecha}-${buy.precio}-${buy.cantidad}`}
						className="rounded-lg bg-white p-4 shadow-md"
					>
						<div className="mb-3">
							<h3 className="text-lg font-bold text-teal-700">Fecha: {buy.fecha}</h3>
							<p className="text-gray-600">
								Precio: <span className="font-semibold">{buy.precio} €</span>
							</p>
							<p className="text-gray-600">
								Cantidad: <span className="font-semibold">{buy.cantidad}</span>
							</p>
						</div>
						<VapList items={buy.items} isLoading={false} />
					</div>
				))}
			</div>
		</PageLayout>
	);
};
