import { PageLayout } from '../components/PageLayout';
import { useGetAllBuy, useGetAllFinancialRecords, useGetAllSalesGroupedByDate } from '../hooks';
import { ComprasStats } from '../components/Estadisticas/ComprasStats';
import { IngresosStats } from '../components/Estadisticas/IngresosStats';
import { VentasStats } from '../components/Estadisticas/VentasStats';
import { PendingSalesStats } from '../components/Estadisticas/PendingSalesStats';
import { BeneficiosStats } from '../components/Estadisticas/BeneficiosStats';

export const Estadisticas = () => {
	const { data: buy } = useGetAllBuy();
	const { data: finatial } = useGetAllFinancialRecords();

	const ingresosTotal =
		finatial?.reduce(
			(total: number, item) => total + (item.profiles?.full_name === 'Caja' ? item.amount : 0),
			0,
		) ?? 0;

	const buyUdsTotal = buy?.reduce((total: number, item) => total + item.total, 0) ?? 0;
	const buyEurTotal = buy?.reduce((total: number, item) => total + item.eur, 0) ?? 0;

	const restante = (ingresosTotal - buyEurTotal).toFixed(2);

	const { data: sales } = useGetAllSalesGroupedByDate();
	const totalCalculated = sales?.reduce((total, sale) => total + sale.total_price, 0) ?? 0;
	const totalReceived =
		sales?.reduce((total, sale) => total + (sale.total_payment ?? 0), 0) ?? 0;

	const pendingSales = sales?.filter((sale) => (sale.total_payment ?? 0) - sale.total_price < 0);

	return (
		<PageLayout>
			{buy && finatial && (
				<ComprasStats
					buyUdsTotal={buyUdsTotal}
					buyEurTotal={buyEurTotal}
					restante={restante}
				/>
			)}
			{finatial && <IngresosStats finatial={finatial} />}
			{sales && (
				<VentasStats
					totalCalculated={totalCalculated}
					totalReceived={totalReceived}
					pendingSalesCount={pendingSales?.length ?? 0}
				/>
			)}
			<PendingSalesStats />
			<BeneficiosStats />
		</PageLayout>
	);
};

