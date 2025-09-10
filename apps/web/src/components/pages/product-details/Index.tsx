"use client";

import { Product } from "@/data/products";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";

interface ProductDetailsContainerProps {
  item: Product;
}

const ProductDetailsContainer = ({ item }: ProductDetailsContainerProps) => {
  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="py-6 md:py-8 flex items-center capitalize">
        <Link href="/" className="text-neutral-700 me-3">
          Home
        </Link>
        <FaChevronRight className="text-black text-sm me-3" />
        <Link href="/category" className="text-neutral-700 me-3">
          Category
        </Link>
        <FaChevronRight className="text-black text-sm me-3" />
        <Link
          href={`/category/${item.category}`}
          className="text-neutral-700 me-3"
        >
          {item.category}
        </Link>
        <FaChevronRight className="text-black text-sm me-3" />
        <p className="text-muted">{item.title}</p>
      </div>
      <div className="flex items-center flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-14">
        <ProductSlider images={item.images} />
        <ProductInfo item={item} />
      </div>
    </section>
  );
};

export default ProductDetailsContainer;
