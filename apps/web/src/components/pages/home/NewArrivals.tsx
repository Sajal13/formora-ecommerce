"use client";

import Button from "@/components/base/Button";
import Swiper from "@/components/base/Swiper";
import { ProductItem } from "@/data/products";
import Image from "next/image";
import React from "react";
import { SwiperSlide } from "swiper/react";

interface NewArrivalsProps {
  data: ProductItem[];
}

const NewArrivals = ({ data }: NewArrivalsProps) => {
  return (
    <section className="bg-tertiary py-6 md:py-10 min-h-[35rem] px-4 md:px-6 flex justify-center items-center">
      <div className="container mx-auto">
        <Swiper slidesPerView={1} navigation={false} pagination={false}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center">
                <div className="">
                  <Image
                    src={item.thumbnail}
                    alt="product"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="text-center">
                  <h5 className="text-neutral-900 text-lg md:text-xl lg:text-2xl font-medium">
                    New Arrivals
                  </h5>
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5 lg:mb-8 leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex justify-center">
                    <Button variant="outline">Order Now</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
