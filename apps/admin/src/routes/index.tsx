import App from "@/App";
import { createBrowserRouter, type RouteObject } from "react-router";
import paths, { rootPaths } from "./paths";
import MainLayout from "@/components/layout/MainLayout";
import Overview from "@/pages/dashobard/Overview";
import SalesAnalytics from "@/pages/dashobard/SalesAnalytics";
import AllProducts from "@/pages/products/AllProducts";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: rootPaths.root,
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Overview />
          },
          {
            path: paths.salesAnalytics,
            element: <SalesAnalytics />
          },
          {
            path: paths.allProducts,
            element: <AllProducts />
          }
        ]
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL
});
