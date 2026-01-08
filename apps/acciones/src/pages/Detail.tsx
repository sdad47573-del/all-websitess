import { useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import { DetailList } from "../components/DetailList";
import { DATA_2024 } from "../data/2024/data";
import { calcularTotales } from "../data/utils";
import { DATA_2025 } from "../data/2025/data";
import { PageLayout, SectionHeader } from "@react-components";

function Detail() {
  const navigate = useNavigate();
  const { location } = useRouterState();

  const is2024 = location.pathname.includes("/2024");

  const { name } = useParams({ strict: false });
  const data = is2024
    ? DATA_2024[name as keyof typeof DATA_2024]
    : DATA_2025[name as keyof typeof DATA_2025];

  const totals = calcularTotales(data);

  return (
    <PageLayout className="container mx-auto">
      <SectionHeader title={String(name)}>
        <button
          className="btn btn-primary"
          onClick={() => navigate({ to: ".." })}
        >
          Volver
        </button>
      </SectionHeader>
      <div className="bg-base-100/60 relative overflow-hidden p-6 backdrop-blur-md rounded-3xl border border-transparent dark:border-base-content/5 mb-6">
        <div className="from-primary/50 via-secondary/50 to-primary/50 absolute top-0 left-0 h-1 w-full bg-linear-to-r" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          <div className="group border-base-200 bg-base-100 relative flex flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-base-content/10">
            <p className="text-base-content/60 text-sm font-medium tracking-wider uppercase">
              cantidades
            </p>
            <p className="text-base-content text-3xl font-black tabular-nums">
              {totals.totalAmount}
            </p>
          </div>
          <div className="group border-base-200 bg-base-100 relative flex flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-base-content/10">
            <p className="text-base-content/60 text-sm font-medium tracking-wider uppercase">
              balance
            </p>
            <p className="text-base-content text-3xl font-black tabular-nums">
              {totals.totalPrice}
            </p>
          </div>
          <div className="group border-base-200 bg-base-100 relative flex flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-base-content/10">
            <p className="text-base-content/60 text-sm font-medium tracking-wider uppercase">
              compras
            </p>
            <p className="text-base-content text-3xl font-black tabular-nums">
              {totals.totalBuy}
            </p>
          </div>
          <div className="group border-base-200 bg-base-100 relative flex flex-col overflow-hidden rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-base-content/10">
            <p className="text-base-content/60 text-sm font-medium tracking-wider uppercase">
              ventas
            </p>
            <p className="text-base-content text-3xl font-black tabular-nums">
              {totals.totalSell}
            </p>
          </div>
        </div>
      </div>
      <DetailList items={data} />
    </PageLayout>
  );
}

export default Detail;
