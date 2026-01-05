import { Link, useRouterState } from "@tanstack/react-router";
import { List } from "../components/List";
import { DATA_2024, GLOBALS_2024 } from "../data/2024/data";
import { DATA_2025, GLOBALS_2025 } from "../data/2025/data";
import { twJoin } from "tailwind-merge";
function Year() {
  const { location } = useRouterState();

  const is2024 = location.pathname.includes("/2024");

  //   const year = is2024 ? "2024" : "2025";

  const data = is2024 ? DATA_2024 : DATA_2025;
  const globals = is2024 ? GLOBALS_2024 : GLOBALS_2025;

  return (
    <div className="container mx-auto">
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">ACCIONES</h1>
            <Link to="/2024">
              <button className={twJoin("btn", is2024 && "btn-primary")}>
                2024
              </button>
            </Link>
            <Link to="/2025">
              <button className={twJoin("btn", !is2024 && "btn-primary")}>
                2025
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{globals}</h1>

      <List items={Object.keys(data)} />
    </div>
  );
}

export default Year;
