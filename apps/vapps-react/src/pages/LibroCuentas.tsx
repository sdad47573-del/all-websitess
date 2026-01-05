import Stats from '../components/Stats';
import { useGetAllFinancialRecords } from '../hooks/useGetAllFinancialRecords';
import { getGroupedFinancialRecords } from '../utils/getGroupedFinancialRecords';
import { SectionHeader } from '../components/SectionHeader';
import { FinanceCard } from '../components/FinanceCard';
import { EmptyState } from '../components/EmptyState';

// TODO: separar ganancias en las listas e imprimir una lista por socio
export const LibroCuentas = () => {
	const { data, isLoading } = useGetAllFinancialRecords();

	if (isLoading) return null; // Or a specific skeleton

	return (
		<main className="pb-10">
			{data && (
				<>
					<Stats
						items={[
							{
								label: 'Ingresos Totales',
								value: data.reduce((total, item) => total + item.amount, 0) + '€',
								icon: 'ri-money-euro-circle-line',
								color: 'bg-success',
							},
							...getGroupedFinancialRecords(data).map((it) => ({
								label: `${it.full_name} Total`,
								value: it.totalAmount + '€',
								icon: 'ri-money-euro-circle-line',
								color: 'bg-success',
							})),
						]}
					/>

					<SectionHeader
						title="Ingresos a caja fuerte"
						subtitle="Registro detallado de depósitos realizados por los socios"
					/>

					{data.length === 0 ? (
						<EmptyState message="No hay ingresos registrados a la caja fuerte" />
					) : (
						<ul className="space-y-4 px-5">
							{data.map((item) => (
								<FinanceCard
									key={item.id}
									label={item.label}
									amount={item.amount}
									date={item.date}
									fullName={item.profiles?.full_name ?? 'Desconocido'}
								/>
							))}
						</ul>
					)}
				</>
			)}
		</main>
	);
};
