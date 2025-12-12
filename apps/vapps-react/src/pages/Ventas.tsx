import Stats from '../components/Stats';
import { imageMap } from '../data/maps/img';
import { translateItem } from '../data/maps/spanish';
import { useGetAllSales } from '../services/sales.service';

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

// TODO: agrupar por fecha y concepto las ventas
// TODO: poner un check si los dineros se han pagado y pasado a la caja fuerte(ingresos), y mostrar en stats solo  los dineros aun sin pasar a la caja fuerte pero pagados( poner otra columna en la tabla o hacer una relacion de tablas...)
// TODO: Poner los vapers que falta aun por vender que esten en la pagina de compras
// TODO: hacer recuento de los vapers comprados y poner aquellos que faltan de cada sabor por vender
// TODO: poner la fecha de la deuda mas antigua: niño lolo 10 ene, 40 dias, por ejemplo
export const Ventas = () => {
	const { data: sales, isLoading, error } = useGetAllSales();
	const totalCalculated =
		sales &&
		(sales as any)?.reduce((total: any, sale: any) => total + sale.price_per_unit * sale.amount, 0);
	const totalReceived =
		sales && (sales as any)?.reduce((total: any, sale: any) => total + (sale.payment || 0), 0);

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
							value: (totalCalculated - totalReceived).toFixed(2) + '€',
							icon: 'ri-money-euro-circle-line',
							color: 'bg-orange-500',
						},
					]}
				/>
			)}

			<div className="p-5">
				<h2 className="mb-4 text-xl font-semibold">Historial de Ventas</h2>
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
			{!isLoading && !error && sales?.length === 0 && (
				<div className="mx-5 rounded-lg bg-gray-100 p-8 text-center text-gray-600">
					No hay ventas registradas
				</div>
			)}

			{/* Sales List */}
			{!isLoading && !error && (sales as any)?.length > 0 && (
				<ul className="space-y-4 px-5 pb-5">
					{(sales as any)?.map((sale: any) => {
						const total = (sale.price_per_unit * sale.amount).toFixed(2);
						const imageSrc = imageMap[sale.items.title] || '';
						const translatedTitle = translateItem(sale.items.title);

						return (
							<li key={sale.id} className="rounded-lg bg-white p-4 shadow-md">
								<div className="flex flex-col gap-2">
									<div className="flex items-center justify-between border-b border-gray-200 pb-2">
										<h3 className="text-lg font-bold text-teal-700">Venta #{sale.id}</h3>
										<span className="text-sm text-gray-500">{formatDate(sale.created_at)}</span>
									</div>

									<div className="mb-3 max-w-3xs">
										<p className="mb-2 text-xs text-gray-500">Producto</p>
										<div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
											{imageSrc && (
												<img
													src={imageSrc}
													alt={translatedTitle}
													className="h-12 w-12 rounded object-cover"
												/>
											)}
											<div className="flex-1">
												<p className="font-medium text-gray-900">{translatedTitle}</p>
												<p className="text-sm text-gray-500">Cantidad: {sale.amount}</p>
											</div>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-3 md:grid-cols-3">
										<div>
											<p className="text-xs text-gray-500">Precio Unitario</p>
											<p className="font-semibold text-gray-900">{sale.price_per_unit}€</p>
										</div>
										<div>
											<p className="text-xs text-gray-500">Cantidad</p>
											<p className="font-semibold text-gray-900">{sale.amount}</p>
										</div>
										<div>
											<p className="text-xs text-gray-500">Total</p>
											<p className="font-semibold text-teal-600">{total}€</p>
										</div>
									</div>

									{sale.concept && (
										<div className="mt-2">
											<p className="text-xs text-gray-500">Concepto</p>
											<p className="text-sm text-gray-700">{sale.concept}</p>
										</div>
									)}

									{sale.payment !== undefined && sale.payment !== null && (
										<div className="mt-2 rounded-md bg-green-50 p-2">
											<p className="text-xs text-gray-500">Pago Recibido</p>
											<p className="font-semibold text-green-700">{sale.payment}€</p>
										</div>
									)}
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</main>
	);
};
