import ConnectedModal from '../components/ConnectedModal';
import Stats from '../components/Stats';
import VapList from '../components/VapList';
import { useGetAllItems } from '../services/items.service';
import { useEffect, useState } from 'react';

// TODO: hacer un stat para saber la cantidad de vapers que tienen el niño lolo, el bolero, y cualquiera....
export const Home = () => {
	const { data: stock, isLoading } = useGetAllItems();
	const [total, setTotal] = useState(0);

	// TODO: mejor invalidar query y hacer fetch con usequery
	useEffect(() => {
		if (stock) {
			setTotal(stock.reduce((acc, item) => acc + (item as any).amount, 0));
		}
	}, [stock]);

	return (
		<main>
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
			<div className="px-4">
				<div className="py-5">
					<h2 className="text-xl font-semibold">Vapers Disponibles</h2>
				</div>
				<VapList items={stock as any} isLoading={isLoading} />
				<ConnectedModal />
			</div>
		</main>
	);
};
