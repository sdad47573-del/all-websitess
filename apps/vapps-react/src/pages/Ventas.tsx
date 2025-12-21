import { VapListItem } from '@react-components';
import { twJoin } from 'tailwind-merge';
import Stats from '../components/Stats';
import { imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';
import { useGetAllSalesGroupedByDate } from '../hooks';
import type { SalesByDateRow } from '../hooks/useGetAllSalesGroupedByDate';

// Type definitions
// type Item = {
// 	id: number;
// 	title: string;
// };

const formatDate = (dateString: string): string => {
	if (!dateString) return 'N/A';
	const date = new Date(dateString);
	return date.toLocaleDateString('es-ES', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	});
};

// type Sale = {
// 	id: number;
// 	item_id: number;
// 	items: Item;
// 	amount: number;
// 	price_per_unit: number;
// 	payment?: number;
// 	concept?: string;
// 	created_at: string;
// };

// TODO: poner un check si los dineros se han pagado y pasado a la caja fuerte(ingresos), y mostrar en stats solo  los dineros aun sin pasar a la caja fuerte pero pagados( poner otra columna en la tabla o hacer una relacion de tablas...)
// TODO: Poner los vapers que falta aun por vender que esten en la pagina de compras
// TODO: hacer recuento de los vapers comprados y poner aquellos que faltan de cada sabor por vender
export const Ventas = () => {
	const { data: sales, isLoading, error } = useGetAllSalesGroupedByDate();
	const totalCalculated =
		sales?.reduce((total: number, sale: SalesByDateRow) => total + sale.total_price, 0) ?? 0;
	const totalReceived =
		sales?.reduce((total: number, sale: SalesByDateRow) => total + (sale.total_payment ?? 0), 0) ??
		0;

	const pendingSales = sales?.filter((sale) => (sale.total_payment ?? 0) - sale.total_price < 0);
	return (
		<main className="">
			{sales && (
				<Stats
					items={[
						{
							label: 'Ventas totales',
							value: `${totalCalculated.toFixed(2)}€`,
							icon: 'ri-shopping-cart-line',
							color: 'bg-green-500',
							isTotal: true,
						},
						{
							label: 'Pendiente de cobro',
							value:
								pendingSales && pendingSales.length > 0
									? (totalCalculated - totalReceived).toFixed(2) + '€'
									: '0€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-orange-500',
						},
					]}
				/>
			)}

			<div className="p-5">
				<h2 className="mb-4 text-xl font-semibold">Pendiente de cobro</h2>
			</div>

			{/* Loading State */}
			{isLoading && (
				<div className="mx-5 rounded-lg bg-blue-50 p-8 text-center">
					<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
					<p className="mt-4 text-blue-700">Cargando ventas...</p>
				</div>
			)}

			{/* Error State */}
			{error && (
				<div className="mx-5 rounded-lg bg-red-100 p-4 text-red-700">
					<p>{`Error al cargar las ventas: ${error}`}</p>
				</div>
			)}

			{/* Empty State */}
			{!isLoading && !error && sales && sales.length === 0 && (
				<div className="mx-5 rounded-lg bg-gray-100 p-8 text-center text-gray-600">
					No hay ventas registradas
				</div>
			)}
			{pendingSales && pendingSales.length > 0 && (
				<ul className="space-y-4 px-5 pb-5">
					{pendingSales.map((sale) => {
						const total = sale.total_price.toFixed(2);
						return (
							<li key={sale.id} className="rounded-lg bg-white p-4 shadow-md">
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-between border-b border-gray-200 pb-2">
										<h3 className="text-lg font-bold text-teal-700">
											{sale.concept ? sale.concept : 'sin concepto'}
										</h3>
										<span className="text-sm text-gray-500">{formatDate(sale.day)}</span>
									</div>

									<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
										<div>
											<p className="text-xs text-gray-500">Cantidad</p>
											<p className="font-semibold text-gray-900">{sale.total_amount}</p>
										</div>
										<div>
											<p className="text-xs text-gray-500">Total</p>
											<p className="font-semibold text-teal-600">{total}€</p>
										</div>
									</div>

									{sale.total_payment !== undefined && sale.total_payment !== null && (
										<div
											className={twJoin(
												'mt-2 rounded-md p-2',
												sale.total_payment - sale.total_price < 0
													? 'bg-red-50 text-red-700'
													: 'bg-green-50 text-green-700',
											)}
										>
											<p className="text-xs text-gray-500">Pago Recibido</p>
											<p
												className={twJoin(
													'font-semibold',
													sale.total_payment - sale.total_price < 0
														? 'text-red-700'
														: 'text-green-700',
												)}
											>
												{sale.total_payment}€
											</p>
										</div>
									)}
									<div className="mb-3">
										<p className="mb-2 text-xs text-gray-500">Producto</p>
										<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
											{sale.items.map((item) => (
												<VapListItem
													key={item.item_id}
													id={item.item_id}
													title={translateItem(item.item_title)}
													src={imageMap[item.item_title]}
													amount={item.amount}
													price={item.price_per_unit}
												/>
											))}
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}

			<div className="p-5">
				<h2 className="mb-4 text-xl font-semibold">Historial de Ventas</h2>
			</div>
			{/* Sales List */}
			{!isLoading && !error && sales && sales.length > 0 && (
				<ul className="space-y-4 px-5 pb-5">
					{sales.map((sale) => {
						const total = sale.total_price.toFixed(2);
						return (
							<li key={sale.id} className="rounded-lg bg-white p-4 shadow-md">
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-between border-b border-gray-200 pb-2">
										<h3 className="text-lg font-bold text-teal-700">
											{sale.concept ? sale.concept : 'sin concepto'}
										</h3>
										<span className="text-sm text-gray-500">{formatDate(sale.day)}</span>
									</div>

									<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
										<div>
											<p className="text-xs text-gray-500">Cantidad</p>
											<p className="font-semibold text-gray-900">{sale.total_amount}</p>
										</div>
										<div>
											<p className="text-xs text-gray-500">Total</p>
											<p className="font-semibold text-teal-600">{total}€</p>
										</div>
									</div>

									{sale.total_payment !== undefined && sale.total_payment !== null && (
										<div
											className={twJoin(
												'mt-2 rounded-md p-2',
												sale.total_payment - sale.total_price < 0
													? 'bg-red-50 text-red-700'
													: 'bg-green-50 text-green-700',
											)}
										>
											<p className="text-xs text-gray-500">Pago Recibido</p>
											<p
												className={twJoin(
													'font-semibold',
													sale.total_payment - sale.total_price < 0
														? 'text-red-700'
														: 'text-green-700',
												)}
											>
												{sale.total_payment}€
											</p>
										</div>
									)}
									<div className="mb-3">
										<p className="mb-2 text-xs text-gray-500">Producto</p>
										<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
											{sale.items.map((item: any) => (
												<VapListItem
													key={item.item_id}
													id={item.item_id}
													title={translateItem(item.item_title)}
													src={imageMap[item.item_title]}
													amount={item.amount}
													price={item.price_per_unit}
												/>
											))}
										</div>
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</main>
	);
};
