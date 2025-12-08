import { useStore } from '@nanostores/react';
import ConnectedModal from '../components/ConnectedModal';
import Stats from '../components/Stats';
import VapList from '../components/VapList';
import { useGetAllItems } from '../services/items.service';
import { lastSale } from '../stores/modal.store';
import { useEffect, useState } from 'react';

export const Home = () => {
	const { data: stock } = useGetAllItems();
	const [total, setTotal] = useState(0);
	const $lastSale = useStore(lastSale);

	// TODO: mejor invalidar query y hacer fetch con usequery
	useEffect(() => {
		if (stock) {
			setTotal(stock.reduce((acc, item) => acc + (item as any).amount, 0));
		}
	}, [stock]);

	useEffect(() => {
		if ($lastSale) {
			setTotal((t) => t - $lastSale.amountSold);
		}
	}, [$lastSale]);

	return (
		<main>
			{stock?.length && (
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
							value: 'Lima Limón',
							icon: 'ri-medal-line',
							color: 'bg-yellow-500',
						},
					]}
				/>
			)}
			<div className="px-4">
				<div className="py-5">
					<h2 className="text-xl font-semibold">Vapers Disponibles</h2>
				</div>
				<VapList />
				<ConnectedModal />
			</div>
		</main>
	);
};
