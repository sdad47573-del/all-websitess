import { useGetAllSalesGroupedByDate } from '@/hooks';
import Stats from '@/components/Stats';
import { PageLayout } from '@/components/PageLayout';
import { SaleList } from '@/components/SaleList';
import { Loading } from '@/components/Loading';
import { ErrorState } from '@/components/ErrorState';
import type { SalesByDateRow } from '@/hooks/useGetAllSalesGroupedByDate';

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
		return <ErrorState message="Error al cargar las ventas" details={String(error)} />;
	}

	return (
		<PageLayout title="Gestión de Ventas">
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

			<SaleList
				sales={pendingSales}
				title="Pendiente de cobro"
				subtitle="Ventas que han sido registradas pero cuyo pago no se ha completado"
				emptyMessage="¡Al día! No hay ventas con pagos pendientes."
			/>

			<SaleList
				sales={sales}
				title="Historial de Ventas"
				subtitle="Registro histórico de todas las transacciones realizadas"
				emptyMessage="No se han encontrado ventas registradas"
			/>
		</PageLayout>
	);
};

