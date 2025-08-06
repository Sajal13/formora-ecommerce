import { Route } from "@/data/navitems";
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import IconButton from "../base/IconButton";
import Link from "next/link";

interface MobileMenuItemProps {
  item: Route;
}

const MobileMenuItem = ({ item }: MobileMenuItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {item.icon && <span className="text-2xl">{item.icon}</span>}
          <Link
            href={item.href || "#"}
            className="py-2 block text-nowrap line-clamp-1"
            onClick={(e) => item.pages && e.preventDefault()}
          >
            {item.label}
          </Link>
        </div>
        {item.pages && (
          <IconButton
            className={`transition-transform duration-300 w-fit pe-0! ${open ? "rotate-180" : "rotate-0"}`}
            onClick={() => setOpen(!open)}
            icon={<IoChevronDownSharp className="w-5 h-5" />}
          />
        )}
      </div>

      {item.pages && open && (
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
