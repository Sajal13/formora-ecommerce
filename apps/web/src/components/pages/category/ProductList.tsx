"use client";

import React, { useEffect, useState } from "react";
import { getAllProducts } from "@/utils/products";
import { ProductItem } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
import { useCategoryFilterStore } from "@/utils/stores/categoryStore";
import { max } from "lodash";

interface ProductListProps {
  category?: string;
  subCategory?: string;
  searchParams: { [key: string]: string | string[] | undefined };
}

const ProductList = ({
  category,
  subCategory,
  searchParams
}: ProductListProps) => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const { setTotalItems, setMaxPrice } = useCategoryFilterStore();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      let filtered: ProductItem[] = data.products;

      const priceMin = Number(searchParams?.priceMin) || 0;
      const priceMax = Number(searchParams?.priceMax) || Infinity;

      filtered = filtered.filter(
        (p: ProductItem) => p.price >= priceMin && p.price <= priceMax
      );

      const prices: number[] = data.products.map(
        (item: ProductItem) => item.price
      );
      const maxPrice = max(prices) ?? 0;
      setMaxPrice(maxPrice > 0 ? maxPrice : 1000); // default fallback
      setTotalItems(filtered.length);
      setProducts(filtered);
    };

    fetchProducts();
  }, [
    searchParams?.priceMin,
    searchParams?.priceMax,
    setTotalItems,
    setMaxPrice
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          item={product}
          className="border border-transparent group"
        />
      ))}
    </div>
  );
};

export default ProductList;
