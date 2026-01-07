import { PageLayout, Loading } from '@react-components';
import { useGetAllBuyedItemsPendingSales } from '../hooks';
import { UnidadesStats } from '../components/PendientesAsignar/UnidadesStats';
import { ItemComparisonList } from '../components/PendientesAsignar/ItemComparisonList';

export const PendientesAsignar = () => {
	const { data: items, isLoading } = useGetAllBuyedItemsPendingSales();

	if (isLoading) return <Loading text="Cargando pendientes..." />;

	const totalPending = items?.reduce((acc, item) => acc + Math.abs(item.stock_final), 0) ?? 0;
	const totalBuyed = items?.reduce((acc, item) => acc + item.total_buyed, 0) ?? 0;
	const totalSold = items?.reduce((acc, item) => acc + item.total_sold, 0) ?? 0;

	const pendingItems = items
		?.map((item) => ({ ...item }))
		.filter((item) => item.stock_final > 0)
		.sort((a, b) => b.stock_final - a.stock_final);

	const upToDateItems = items
		?.map((item) => ({ ...item }))
		.filter((item) => item.stock_final <= 0 && (item.total_buyed > 0 || item.total_sold > 0))
		.sort((a, b) => b.stock_final - a.stock_final);

	return (
		<PageLayout>
			<UnidadesStats
				totalBuyed={totalBuyed}
				totalSold={totalSold}
				totalPending={totalPending}
			/>

			<div className="space-y-8">
				<ItemComparisonList
					items={pendingItems}
					title="Por Asignar"
					subtitle="Vapers que han sido comprados pero no se han registrado en ventas"
					emptyMessage="¡Increíble! Has registrado todas las ventas de tus compras."
					type="pending"
				/>

				<ItemComparisonList
					items={upToDateItems}
					title="Stock Registrado"
					subtitle="Productos donde las ventas coinciden con las compras"
					emptyMessage="No hay datos registrados aún."
					type="ok"
				/>
			</div>
		</PageLayout>
	);
};

