import { PageLayout } from '../components/PageLayout';
import { SectionHeader } from '../components/SectionHeader';
import { useGetAllBuyedItemsPendingSales } from '../hooks';
import { Loading } from '../components/Loading';
import Stats from '../components/Stats';
import { translateItem } from '../data/maps/spanish';
import { getItemImageUrl } from '../utils/image.utils';

export const PendientesAsignar = () => {
	const { data: items, isLoading } = useGetAllBuyedItemsPendingSales();

	if (isLoading) return <Loading text="Cargando pendientes..." />;

	const totalPending = items?.reduce((acc, item) => acc + (item.total_buyed - item.total_sold), 0) ?? 0;
	const totalBuyed = items?.reduce((acc, item) => acc + item.total_buyed, 0) ?? 0;
	const totalSold = items?.reduce((acc, item) => acc + item.total_sold, 0) ?? 0;

	const pendingItems = items
		?.map((item) => ({ ...item, pending: item.total_buyed - item.total_sold }))
		.filter((item) => item.pending > 0)
		.sort((a, b) => b.pending - a.pending);

	const upToDateItems = items
		?.map((item) => ({ ...item, pending: item.total_buyed - item.total_sold }))
		.filter((item) => item.pending <= 0 && (item.total_buyed > 0 || item.total_sold > 0))
		.sort((a, b) => b.total_sold - a.total_sold);

	return (
		<PageLayout title="Pendientes por Asignar">
			<Stats
				title="Resumen de Unidades"
				items={[
					{
						label: 'Total Comprados',
						value: totalBuyed,
						icon: 'ri-shopping-bag-line',
						color: 'bg-blue-500',
					},
					{
						label: 'Total Vendidos',
						value: totalSold,
						icon: 'ri-hand-coin-line',
						color: 'bg-green-500',
					},
					{
						label: 'Pendientes Asignar',
						value: totalPending,
						icon: 'ri-alert-line',
						color: 'bg-orange-500',
						isTotal: true,
					},
				]}
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

interface ItemComparisonListProps {
	items?: any[] | null;
	title: string;
	subtitle: string;
	emptyMessage: string;
	type: 'pending' | 'ok';
}

const ItemComparisonList = ({ items, title, subtitle, emptyMessage, type }: ItemComparisonListProps) => {
	return (
		<div>
			<SectionHeader title={title} subtitle={subtitle} />
			{(!items || items.length === 0) ? (
				<div className="mx-5 rounded-xl border border-dashed border-base-300 py-10 text-center">
					<p className="text-base-content/50">{emptyMessage}</p>
				</div>
			) : (
				<ul className="space-y-4 px-5">
					{items.map((item) => (
						<li key={item.item_id} className="rounded-lg bg-base-100 p-4 shadow-md transition-shadow hover:shadow-lg border border-base-200">
							<div className="flex flex-col gap-3">
								<div className="flex items-center justify-between border-b border-base-200 pb-2">
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-base-200 border border-base-300">
											<img
												src={getItemImageUrl(item.title, item.brand)}
												alt={item.title}
												className="h-full w-full object-cover"
											/>
										</div>
										<div>
											<h3 className="text-lg font-bold text-teal-700 leading-tight">
												{translateItem(item.title)}
											</h3>
											<p className="text-[10px] font-medium uppercase text-base-content/40 tracking-widest">
												{item.brand}
											</p>
										</div>
									</div>
									<div className={`rounded-md px-3 py-1 flex flex-col items-end ${type === 'pending' ? 'bg-orange-500/10 text-orange-600' : 'bg-green-500/10 text-green-600'}`}>
										<span className="text-[10px] font-bold uppercase opacity-70">
											{type === 'pending' ? 'Faltan' : 'Al día'}
										</span>
										<span className="text-xl font-black">
											{item.pending}
										</span>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-4">
									<div className="flex flex-col">
										<p className="text-xs font-medium uppercase text-base-content/50">Total Comprados</p>
										<p className="text-lg font-semibold text-base-content">{item.total_buyed}</p>
									</div>
									<div className="flex flex-col">
										<p className="text-xs font-medium uppercase text-base-content/50">Total Vendidos</p>
										<p className="text-lg font-semibold text-base-content">{item.total_sold}</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
