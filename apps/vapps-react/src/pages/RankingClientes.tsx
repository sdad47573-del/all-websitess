import { PageLayout } from '../components/PageLayout';
import { Loading } from '../components/Loading';
import { ErrorState } from '../components/ErrorState';
import Stats from '../components/Stats';
import { SectionHeader } from '../components/SectionHeader';
import { ExpandableTransactionCard } from '../components/common/ExpandableTransactionCard';
import { useSupabaseQuery } from '../hooks/useSupabaseQuery';
import { supabaseBrowserClient } from '../services/init.service';
import { translateItem } from '../data/maps/spanish';
import { getImageUrl } from '../utils/image.utils';
import { useGetCustomerRanking } from '../hooks';

export const RankingClientes = () => {
	const { data: ranking, isLoading, error } = useGetCustomerRanking();

	type SalesWithItemRow = {
		customer_id: number | null;
		amount: number;
		customers: { name: string } | null;
		items: { id: number; title: string; image_url: string | null } | null;
	};

	type CustomerItems = {
		customer_id: number | null;
		name: string;
		items: { id: number; title: string; image_url: string | null; amount: number }[];
	};

	const { data: customerItems } = useSupabaseQuery<SalesWithItemRow[], CustomerItems[]>(
		['customerItemsRanking'],
		async () =>
			await supabaseBrowserClient
				.from('sales')
				.select('customer_id, amount, customers(name), items(id, title, image_url)')
				.eq('active', true),
		{
			select: (rows) => {
				const acc = new Map<string, CustomerItems>();
				(rows ?? []).forEach((r) => {
					const key = String(r.customer_id ?? 'null');
					const name = r.customers?.name ?? 'Sin cliente';
					const item = r.items;
					if (!item) return;
					const amount = Number(r.amount ?? 0);
					const existing = acc.get(key);
					if (!existing) {
						acc.set(key, {
							customer_id: r.customer_id ?? null,
							name,
							items: [
								{
									id: item.id,
									title: translateItem(item.title),
									image_url: item.image_url,
									amount,
								},
							],
						});
					} else {
						const found = existing.items.find((i) => i.id === item.id);
						if (found) {
							found.amount += amount;
						} else {
							existing.items.push({
								id: item.id,
								title: translateItem(item.title),
								image_url: item.image_url,
								amount,
							});
						}
					}
				});
				return Array.from(acc.values()).map((c) => ({
					...c,
					items: c.items.sort((a, b) => b.amount - a.amount),
				}));
			},
		},
	);

	if (isLoading) return <Loading text="Calculando ranking de clientes..." />;
	if (error) return <ErrorState message="Error al cargar el ranking" details={String(error)} />;

	const totalClientes = ranking?.length ?? 0;
	const totalItems = ranking?.reduce((sum, r) => sum + r.total_items, 0) ?? 0;
	const totalPagado = ranking?.reduce((sum, r) => sum + r.total_paid, 0) ?? 0;

	return (
		<PageLayout>
			<Stats
				title="Ranking de Clientes"
				items={[
					{
						label: 'Clientes',
						value: totalClientes,
						icon: 'ri-user-3-line',
						color: 'bg-blue-500',
					},
					{
						label: 'Items comprados',
						value: totalItems,
						icon: 'ri-shopping-cart-line',
						color: 'bg-green-500',
					},
					{
						label: 'Dinero pagado',
						value: `${totalPagado.toFixed(2)}€`,
						icon: 'ri-money-euro-circle-line',
						color: 'bg-purple-500',
						isTotal: true,
					},
				]}
			/>

			<SectionHeader title="Top por dinero pagado" />
			<ul className="space-y-4 px-5 pb-5">
				{ranking?.map((r) => (
					<ExpandableTransactionCard
						key={`${r.customer_id ?? 'null'}-${r.name}`}
						title={r.name}
						date={new Date().toISOString()}
						stats={[
							{ label: 'Items', value: r.total_items },
							{ label: 'Pagado', value: `${r.total_paid.toFixed(2)}€` },
						]}
						items={(customerItems?.find((c) => c.customer_id === r.customer_id)?.items ?? []).map(
							(i) => ({
								id: i.id,
								title: i.title,
								brand: '',
								image_url: getImageUrl(i.image_url),
								amount: i.amount,
							}),
						)}
					/>
				))}
			</ul>
		</PageLayout>
	);
};
