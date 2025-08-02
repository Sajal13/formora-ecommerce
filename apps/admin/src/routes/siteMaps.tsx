import type { ReactNode } from "react";

export interface Route {
  name: string;
  path: string;
  pathName?: string;
  icon?: ReactNode;
  active?: boolean;
  pages?: Route[];
}

export interface RouteItems {
  label: string;
  icon?: ReactNode;
  pages?: Route[];
}

export const routs: RouteItems[] = [
  {
    label: "Dashboard",
    pages: [
      {
        name: "Overview",
        path: "/",
        active: true
      }
    ]
  }
];
