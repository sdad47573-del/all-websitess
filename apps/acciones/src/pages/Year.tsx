import { Link, useRouterState } from "@tanstack/react-router";
import { List } from "../components/List";
import { DATA_2024, GLOBALS_2024 } from "../data/2024/data";
import { DATA_2025, GLOBALS_2025 } from "../data/2025/data";
import { twJoin } from "tailwind-merge";
import { PageLayout, SectionHeader } from "@react-components";
function Year() {
  const { location } = useRouterState();

  const is2024 = location.pathname.includes("/2024");

  //   const year = is2024 ? "2024" : "2025";

  const data = is2024 ? DATA_2024 : DATA_2025;
  const globals = is2024 ? GLOBALS_2024 : GLOBALS_2025;

  return (
    <PageLayout className="container mx-auto">
      <SectionHeader title="ACCIONES" className="flex items-center justify-between">
        <div className="join">
          <Link to="/2024">
            <button className={twJoin("btn join-item", is2024 && "btn-primary")}>
              2024
            </button>
          </Link>
          <Link to="/2025">
            <button className={twJoin("btn join-item", !is2024 && "btn-primary")}>
              2025
            </button>
          </Link>
        </div>
      </SectionHeader>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-base-content mb-4">{globals}</h2>
        <List items={Object.keys(data)} />
      </div>
    </PageLayout>
  );
}

export default Year;
