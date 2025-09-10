import React, { useState } from "react";
import { type Swiper as SwiperType } from "swiper";
import Swiper from "@/components/base/Swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";

interface ProductSliderProps {
  images: string[];
}
const ProductSlider = ({ images }: ProductSliderProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="md:order-1 h-full">
        <Swiper
          slidesPerView={1}
          modules={[FreeMode, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={false}
          pagination={false}
          loop={false}
          className="max-w-[26.438rem]"
        >
          {images.map((image) => (
            <SwiperSlide key={image}>
              <div className="bg-tertiary rounded-2xl h-[31.25rem] w-[26.438rem] flex items-center">
                <Image src={image} alt="image" height={500} width={423} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-20">
        <Swiper
          direction="vertical"
          onSwiper={setThumbsSwiper}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          grabCursor={true}
          modules={[FreeMode, Thumbs]}
          navigation={false}
          pagination={false}
          loop={images.length > 4 ? true : false}
        >
          {images.map((image) => (
            <SwiperSlide
              key={image}
              className=" flex! items-center justify-center"
            >
              <Image
                src={image}
                alt="image"
                height={80}
                width={70}
                className="bg-tertiary rounded-2xl w-[80px] h-[70px] cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
