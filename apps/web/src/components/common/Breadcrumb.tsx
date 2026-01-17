"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { Fragment } from "react";
import { FaChevronRight } from "react-icons/fa";
import { BreadcrumbNavItem } from "@/types/common";

interface BreadcrumbProps {
  className?: string;
  navItems: BreadcrumbNavItem[];
}
const Breadcrumb = ({ className, navItems }: BreadcrumbProps) => {
  return (
    <div
      className={classNames("flex gap-3 items-center capitalize", className)}
    >
      {navItems.map((item) => (
        <Fragment key={item.id}>
          {item.isActive ? (
            <p className="text-muted">{item.title}</p>
          ) : (
            <>
              <Link
                href={item.link}
                className="text-neutral-700 hover:text-neutral-800 !line-clamp-1"
              >
                {item.title}
              </Link>
              <FaChevronRight className="text-black text-sm" />
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
