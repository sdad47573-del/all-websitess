import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import Detail from "./pages/Detail";
import Year from "./pages/Year";

const rootRoute = createRootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    redirect({
      to: "/2024",
      throw: true,
    });
  },
});
const years = ["2024", "2025"];

const yearRoutes = years.flatMap((year) => [
  // Ruta base: /2024, /2025
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/${year}`,
    component: Year,
  }),

  // Ruta dinámica: /2024/$name, /2025/$name
  createRoute({
    getParentRoute: () => rootRoute,
    path: `/${year}/$name`,
    component: Detail,
  }),
]);

const routeTree = rootRoute.addChildren([homeRoute, ...yearRoutes]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
