import { Route } from "@/data/navitems";
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import IconButton from "../base/IconButton";
import Link from "next/link";
import { ProductCategory } from "@/types/products";

interface MobileMenuItemProps {
  toggleMenu?: () => void;
  item: Route;
  categories?: ProductCategory[];
}

const MobileMenuItem = ({
  item,
  categories,
  toggleMenu
}: MobileMenuItemProps) => {
  const [open, setOpen] = useState(false);

  // For sub-category dropdowns
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const isProducts = item.label === "Products";

  return (
    <li>
      {/* Main Menu Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.icon && <span className="text-2xl">{item.icon}</span>}
          <Link
            href={item.href || "#"}
            onClick={toggleMenu}
            className="py-2 block text-nowrap line-clamp-1"
          >
            {item.label}
          </Link>
        </div>
        {(item.pages || isProducts) && (
          <IconButton
            className={`transition-transform duration-300 w-fit pe-0! ${
              open ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setOpen(!open)}
          >
            <IoChevronDownSharp className="w-5 h-5" />
          </IconButton>
        )}
      </div>

      {/* If it's "Products", show categories */}
      {isProducts && open && (
        <ul className="pl-2.5 space-y-2">
          {categories &&
            categories.map((cat) => (
              <li key={cat.id}>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/category/${cat.slug}`}
                    onClick={toggleMenu}
                    className="block py-2 text-sm font-medium"
                  >
                    {cat.name}
                  </Link>
                  {cat.subCategories?.length > 0 && (
                    <IconButton
                      className={`transition-transform duration-300 w-fit pe-0! ${
                        openCategory === cat.id ? "rotate-180" : "rotate-0"
                      }`}
                      onClick={() =>
                        setOpenCategory(openCategory === cat.id ? null : cat.id)
                      }
                    >
                      <IoChevronDownSharp className="w-4 h-4" />
                    </IconButton>
                  )}
                </div>

                {openCategory === cat.id && (
                  <ul className="pl-4 space-y-1">
                    {cat.subCategories.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          href={`/category/${cat.slug}/${sub.slug}`}
                          onClick={toggleMenu}
                          className="block py-1 text-sm text-gray-700 hover:text-green-600"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      )}

      {/* Default behavior for normal menu items */}
      {!isProducts && item.pages && open && (
        <ul className="pl-2.5">
          {item.pages.map((sub) => (
            <MobileMenuItem key={sub.id} item={sub} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MobileMenuItem;
