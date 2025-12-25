import ConnectedModal from '../components/ConnectedModal';
import Stats from '../components/Stats';
import VapList from '../components/VapList';
import { useGetAllItems, useGetBestSellingItem } from '../hooks';
import { SectionHeader } from '../components/SectionHeader';
import { PageLayout } from '../components/PageLayout';

export const Home = () => {
	const { data: stock, isLoading } = useGetAllItems();
	const total = stock ? stock.reduce((acc, item) => acc + item.amount, 0) : 0;
	const { data: mostSold } = useGetBestSellingItem();

	return (
		<PageLayout title="Inicio">
			<Stats
				items={[
					{
						label: 'Cantidad de vapers',
						value: total,
						icon: 'ri-stack-line',
						color: 'bg-blue-500',
						isTotal: true,
					},
					{
						label: 'Vaper más vendido',
						value: mostSold?.es_title ?? '—',
						icon: 'ri-medal-line',
						color: 'bg-yellow-500',
					},
				]}
			/>

			<SectionHeader
				title="Vapers Disponibles"
				subtitle="Inventario actual de productos en stock"
			/>

			<div className="px-4">
				<VapList items={stock ?? []} isLoading={isLoading} />
				<ConnectedModal />
			</div>
		</PageLayout>
	);
};

