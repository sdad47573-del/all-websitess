// import { BeneficioItem } from '../components/Beneficios/BeneficioItem';
// import { PageLayout, Loading, ErrorState } from '@react-components';
// import { Stats } from '@react-components';

// import { useGetAllBeneficios } from '../hooks';
// import type { Beneficio } from '../types';

// export const Beneficios = () => {
// 	const { data, isLoading, error } = useGetAllBeneficios();

// 	if (isLoading) return <Loading text="Cargando beneficios..." />;
// 	if (error) return <ErrorState message="Error al cargar los beneficios" details={String(error)} />;

// 	return (
// 		<PageLayout>
// 			<Stats
// 				items={[
// 					{
// 						label: 'Beneficios Totales',
// 						value:
// 							(data?.reduce((total: number, item: Beneficio) => total + item.eur, 0) ?? 0).toFixed(
// 								2,
// 							) + '€',
// 						icon: 'ri-money-euro-circle-line',
// 						color: 'bg-green-500',
// 					},
// 				]}
// 			/>

// 			<ul className="space-y-4 px-5 pb-5">
// 				{data?.map((item: Beneficio) => (
// 					<BeneficioItem key={item.id} {...item} />
// 				))}
// 			</ul>
// 		</PageLayout>
// 	);
// };
