import { useGetAllSalesGroupedByDate } from '@/hooks';
import Stats from '@/components/Stats';
import { SaleCard } from '@/components/SaleCard';
import { SectionHeader } from '@/components/SectionHeader';
import { EmptyState } from '@/components/EmptyState';
import { Loading } from '@/components/Loading';
import type { SalesByDateRow } from '@/hooks/useGetAllSalesGroupedByDate';

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

	if (isLoading) return <Loading text="Cargando tus ventas..." />;

	if (error) {
		return (
			<div className="p-10 text-center">
				<div className="bg-error/10 text-error p-6 rounded-xl border border-error/20 inline-block">
					<i className="ri-error-warning-line text-3xl mb-2 block" />
					<p className="font-bold">Error al cargar las ventas</p>
					<p className="text-sm opacity-80 mt-1">{String(error)}</p>
				</div>
			</div>
		);
	}

	return (
		<main className="pb-10">
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

			<SectionHeader
				title="Pendiente de cobro"
				subtitle="Ventas que han sido registradas pero cuyo pago no se ha completado"
			/>

			{!pendingSales || pendingSales.length === 0 ? (
				<div className="px-5 mb-8">
					<div className="bg-success/10 text-success p-4 rounded-lg flex items-center gap-3 border border-success/20">
						<i className="ri-checkbox-circle-line text-xl" />
						<p className="font-medium text-sm">¡Al día! No hay ventas con pagos pendientes.</p>
					</div>
				</div>
			) : (
				<ul className="space-y-4 px-5 pb-5">
					{pendingSales.map((sale) => (
						<SaleCard key={sale.id} {...sale} />
					))}
				</ul>
			)}

			<SectionHeader
				title="Historial de Ventas"
				subtitle="Registro histórico de todas las transacciones realizadas"
			/>

			{!sales || sales.length === 0 ? (
				<EmptyState message="No se han encontrado ventas registradas" />
			) : (
				<ul className="space-y-4 px-5 pb-5">
					{sales.map((sale) => (
						<SaleCard key={sale.id} {...sale} />
					))}
				</ul>
			)}
		</main>
	);
};
