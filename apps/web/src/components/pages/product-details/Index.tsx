"use client";

import { Product } from "@/types/products";
import React from "react";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";
import ProductTab from "./ProductTab";
import Breadcrumb from "@/components/common/Breadcrumb";
import { navItems } from "@/utils/helper";
import RelatedItems from "./RelatedItems";

interface ProductDetailsContainerProps {
  item: Product;
}
const ProductDetailsContainer = ({ item }: ProductDetailsContainerProps) => {
  const breadcrumbItems = navItems(item);
  return (
    <section className="container mx-auto px-4 md:px-6">
      <Breadcrumb navItems={breadcrumbItems} className="py-6 md:py-8" />
      <div className="flex items-center flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
        <ProductSlider images={item.images} />
        <ProductInfo item={item} />
      </div>
      <hr className="text-gray-300" />
      <ProductTab item={item} />
      <hr className="text-gray-300" />
      <RelatedItems category={item.category} />
    </section>
  );
};

export default ProductDetailsContainer;
