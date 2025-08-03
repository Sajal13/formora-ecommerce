import type { ReactNode } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ChairIcon from "@mui/icons-material/Chair";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CategoryIcon from "@mui/icons-material/Category";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

export interface Route {
  id: number;
  name: string;
  path: string;
  pathName?: string;
  icon?: ReactNode;
  active?: boolean;
  pages?: Route[];
}

export interface RouteItems {
  label: string;
  id: number;
  icon?: ReactNode;
  pages?: Route[];
}

const routes: RouteItems[] = [
  {
    id: 1,
    label: "Dashboard",
    pages: [
      {
        id: 2,
        name: "Overview",
        icon: <GridViewIcon fontSize="small" />,
        path: "/",
        active: true
      },
      {
        id: 3,
        name: "Sales Analytics",
        icon: <InsertChartIcon fontSize="small" />,
        path: "/sales-analytics",
        active: true
      },
      {
        id: 4,
        name: "Inventory Status",
        icon: <InventoryIcon fontSize="small" />,
        path: "/inventory-status",
        active: false
      }
    ]
  },
  {
    id: 5,
    label: "Products",
    pages: [
      {
        id: 6,
        name: "All Products",
        icon: <ChairIcon fontSize="small" />,
        path: "/products/all-products",
        active: true
      },
      {
        id: 7,
        name: "Add Product",
        icon: <AddBoxIcon fontSize="small" />,
        path: "/products/add-product",
        active: false
      },
      {
        id: 8,
        name: "Categories",
        icon: <CategoryIcon fontSize="small" />,
        path: "/products/category",
        active: false
      },
      {
        id: 9,
        name: "Sub Categories",
        icon: <SubdirectoryArrowRightIcon fontSize="small" />,
        path: "/products/sub-categories",
        active: false
      },
      {
        id: 10,
        name: "Brands",
        icon: <BrandingWatermarkIcon fontSize="small" />,
        path: "/products/brands",
        active: false
      }
    ]
  }
];

export default routes;
