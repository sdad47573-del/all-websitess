import { PageLayout } from '../components/PageLayout';
import { Loading } from '../components/Loading';
import { ErrorState } from '../components/ErrorState';
import { SectionHeader } from '../components/SectionHeader';
import { useGetCustomerRanking, useCustomerRankingItems } from '../hooks';
import { RankingStats } from '../components/RankingClientes/RankingStats';
import { CustomerRankingList } from '../components/RankingClientes/CustomerRankingList';

export const RankingClientes = () => {
	const { data: ranking, isLoading, error } = useGetCustomerRanking();
	const { data: customerItems } = useCustomerRankingItems();

	if (isLoading) return <Loading text="Calculando ranking de clientes..." />;
	if (error) return <ErrorState message="Error al cargar el ranking" details={String(error)} />;

	const totalClientes = ranking?.length ?? 0;
	const totalItems = ranking?.reduce((sum, r) => sum + r.total_items, 0) ?? 0;
	const totalPagado = ranking?.reduce((sum, r) => sum + r.total_paid, 0) ?? 0;

	return (
		<PageLayout>
			<RankingStats
				totalClientes={totalClientes}
				totalItems={totalItems}
				totalPagado={totalPagado}
			/>

			<SectionHeader title="Top por dinero pagado" />
			{ranking && <CustomerRankingList ranking={ranking} customerItems={customerItems} />}
		</PageLayout>
	);
};

