import { ProductItem } from "@/data/products";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoriesProps {
  data: ProductItem[];
}

const Categories = ({ data }: CategoriesProps) => {
  const uniqueCategories = Array.from(
    data.reduce((map, item) => {
      if (!map.has(item.category)) {
        map.set(item.category, {
          id: item.id,
          category: item.category,
          thumbnail: item.thumbnail
        });
      }
      return map;
    }, new Map<string, { id: number; category: string; thumbnail: string }>())
  ).map(([, value]) => value);

  return (
    <section className="py-7 md:py-10 lg:py-14 px-4 md:px-6 container mx-auto">
      <div className="text-center mb-8 md:mb-12 xl:mb-16">
        <h4 className="font-medium text-2xl lg:text-4xl text-neutral-900 mb-3">
          Shop by Category
        </h4>
        <p className="text-muted text-sm lg:text-base font-medium">
          From cozy sofas to smart storage, find what fits your space and style.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 place-items-center place-content-center gap-4 md:gap-6 lg:gap-8">
        {uniqueCategories.map((item) => (
          <Link href="#" key={item.id} className="group text-center">
            <Image
              src={item.thumbnail}
              alt="categoryItem"
              width={150}
              height={150}
              className="group-hover:scale-110 transition-transform duration-300 mb-2"
            />
            <h5 className="text-neutral-800 hover:text-neutral-950 text-lg md:text-xl font-medium capitalize">
              {item.category}
            </h5>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
