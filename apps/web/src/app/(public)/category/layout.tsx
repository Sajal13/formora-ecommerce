import { Metadata } from "next";
import React, { Suspense } from "react";
import Loading from "./loading";
import CategoryFilterNav from "@/components/navbars/CategoryFilterNav";
import FilterSidebar from "@/components/navbars/FilterSidebar";

export const metadata: Metadata = {
  title: "Formora | Crafted Furniture for Modern Living",
  description:
    "Shop premium handcrafted furniture from Formora. Discover cozy sofas, elegant dining sets, and custom woodwork built by expert carpenters. Easy delivery, secure payment, and tailored comfort.",
  keywords: [
    "Formora",
    "furniture",
    "custom furniture",
    "wooden furniture",
    "living room furniture",
    "bedroom furniture",
    "home decor",
    "sofas",
    "dining table",
    "handcrafted",
    "furniture eCommerce",
    "Bangladesh furniture"
  ]
};

const CategoryLayout = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CategoryFilterNav />
        <div className="flex border-b border-b-gray-200">
          <FilterSidebar />
          <div className="flex-1 px-6 md:px-8 py-2">{children}</div>
        </div>
      </Suspense>
    </>
  );
};

export default CategoryLayout;
