"use client";

import Button from "@/components/base/Button";
import Swiper from "@/components/base/Swiper";
import ProductCard from "@/components/cards/ProductCard";
import { ProductItem } from "@/types/products";
import { getAllProducts } from "@/utils/products";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";

interface RelatedItemsProps {
  category: string;
}

const RelatedItems = ({ category }: RelatedItemsProps) => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const getAllItems = async () => {
      const data = await getAllProducts();
      const allProducts: ProductItem[] = data.products;
      const filteredData = allProducts.filter(
        (item) => item.category === category
      );
      setProducts(filteredData);
    };

    getAllItems();
  }, [products, category]);

  return (
    <section className="container mx-auto pt-7 md:pt-10 lg:pt-14 px-4 md:px-6">
      <div className="mb-8 md:mb-12 xl:mb-16">
        <h4 className="font-medium text-xl md:text-2xl lg:text-3xl text-neutral-900 mb-3">
          Related Products
        </h4>
      </div>

      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={false}
        centerInsufficientSlides={true}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 4 }
        }}
        className="mb-10 md:mb-12 xl:mb-16"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} rating={true} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <Button className="relative group  max-h-[3.125rem] justify-start">
          <Link href={`/category/${category}`}>
            <p className="mb-3">View More</p>
            <div className="h-0.5 w-2/3 absolute left-0 bottom-0 bg-neutral-900 transition-all duration-300 group-hover:w-full " />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default RelatedItems;
