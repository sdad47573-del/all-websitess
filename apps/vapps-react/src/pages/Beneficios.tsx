import { BeneficioItem } from '../components/Beneficios/BeneficioItem';
import { ErrorState } from '../components/ErrorState';
import { Loading } from '../components/Loading';
import Stats from '../components/Stats';
import { useGetAllBeneficios } from '../hooks';
import type { Beneficio } from '../types';

// TODO: sin usar, no existe la tabla ya
export const Beneficios = () => {
	const { data, isLoading, error } = useGetAllBeneficios();

	if (isLoading) return <Loading />;
	if (error) return <ErrorState message="Error al cargar los beneficios" />;

	return (
		<main>
			<Stats
				items={[
					{
						label: 'Beneficios Totales',
						value:
							data?.reduce((total: number, item: Beneficio) => total + item.eur, 0).toFixed(2) +
							'€',
						icon: 'ri-money-euro-circle-line',
						color: 'bg-green-500',
					},
				]}
			/>
			<div className="p-5">
				<h2 className="mb-4 text-xl font-semibold">Beneficios</h2>
			</div>

			<ul className="space-y-4 px-5 pb-5">
				{data?.map((item: Beneficio) => (
					<BeneficioItem key={item.id} {...item} />
				))}
			</ul>
		</main>
	);
};
