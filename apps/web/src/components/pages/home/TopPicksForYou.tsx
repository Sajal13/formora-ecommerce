"use client";
import { ProductItem } from "@/data/products";
import React, { useState } from "react";
import Image from "next/image";
import { currencyFormat } from "@/utils/helper";
import Rating from "@/components/base/Rating";
import Button from "@/components/base/Button";
import Link from "next/link";
import Swiper from "@/components/base/Swiper";
import { SwiperSlide } from "swiper/react";
import ProductCard from "@/components/cards/ProductCard";

interface TopPicksForYouProps {
  data: ProductItem[];
}

const TopPicksForYou = ({ data }: TopPicksForYouProps) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <section className="container mx-auto py-7 md:py-10 lg:py-14 px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12 xl:mb-16">
        <h4 className="font-medium text-2xl lg:text-4xl text-neutral-900 mb-3">
          Top Picks For You
        </h4>
        <p className="text-muted text-sm lg:text-base font-medium">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>

      <Swiper
        loop={false}
        autoplay={false}
        pagination={false}
        centerInsufficientSlides={true}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={4}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 4 }
        }}
        nextButtonClassName={`${isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        prevButtonClassName={`${isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        className="mb-10 md:mb-12 xl:mb-16"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard item={item} rating={true} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center">
        <Button className="relative group  max-h-[3.125rem] justify-start">
          <Link href={"#"}>
            <p className="mb-3">View More</p>
            <div className="h-0.5 w-2/3 absolute left-0 bottom-0 bg-neutral-900 transition-all duration-300 group-hover:w-full " />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default TopPicksForYou;
