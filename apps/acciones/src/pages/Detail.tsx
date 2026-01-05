import { useNavigate, useParams, useRouterState } from "@tanstack/react-router";
import { DetailList } from "../components/DetailList";
import { DATA_2024 } from "../data/2024/data";
import { calcularTotales } from "../data/utils";
import { DATA_2025 } from "../data/2025/data";

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
    <div className="container mx-auto">
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{name}</h1>
            <button
              className="btn btn-primary"
              onClick={() => navigate({ to: ".." })}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
      <div className="stats shadow">
        <div className="stat place-items-center">
          <div className="stat-title">cantidades</div>
          <div className="stat-value">{totals.totalAmount}</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">balance</div>
          <div className="stat-value">{totals.totalPrice}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">compras</div>
          <div className="stat-value">{totals.totalBuy}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">ventas</div>
          <div className="stat-value">{totals.totalSell}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <DetailList items={data} />
    </div>
  );
}

export default Detail;
