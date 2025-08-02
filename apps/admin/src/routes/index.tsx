import App from "@/App";
import { createBrowserRouter, type RouteObject } from "react-router";
import { rootPaths } from "./paths";
import MainLayout from "@/components/layout/MainLayout";
import Overview from "@/pages/dashobard/Overview";

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
          }
        ]
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL
});
