import { JSX } from "react";
import { HiHome } from "react-icons/hi2";
import { AiOutlineProduct } from "react-icons/ai";
import { MdPermContactCalendar } from "react-icons/md";
import { BsFillInfoSquareFill } from "react-icons/bs";

export interface Route {
  id: number;
  icon?: JSX.Element;
  label: string;
  href?: string;
  pages?: Route[];
}

export const routes: Route[] = [
  {
    id: 1,
    icon: <HiHome />,
    label: "Home",
    href: "/"
  },
  {
    id: 2,
    icon: <AiOutlineProduct />,
    label: "Products",
    pages: [
      {
        id: 3,
        label: "All Products",
        href: "/products"
      },
      {
        id: 4,
        label: "Living Room Furniture",
        href: "/products/living-room-furniture"
      },
      {
        id: 5,
        label: "Bedroom Furniture",
        href: "/products/bedroom-furniture",
        pages: [
          {
            id: 6,
            label: "Beds",
            href: "/products/bedroom-furniture/beds"
          },
          {
            id: 7,
            label: "Wardrobes & Armoires",
            href: "#"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    icon: <BsFillInfoSquareFill />,
    label: "About",
    href: "#"
  },
  {
    id: 9,
    icon: <MdPermContactCalendar />,
    label: "Contact",
    href: "#"
  }
];
