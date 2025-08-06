"use client";

import React, { Suspense } from "react";
import { type HighlightItem } from "@/data/products";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroSectionHighlightItem from "./HeroSectionHighlightItem";
import Swiper from "@/components/base/Swiper";

const HeroSection = ({ data }: { data: HighlightItem[] }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <section className="min-h-[40rem] bg-slate-100 flex items-center py-16 relative">
        <Swiper>
          {data.slice(0, 5).map((highlightItem) => (
            <SwiperSlide key={highlightItem.id} className="z-0">
              <HeroSectionHighlightItem highlightItem={highlightItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Suspense>
  );
};

export default HeroSection;
