"use client";

import React, { PropsWithChildren, useRef } from "react";
import {
  Swiper as ReactSwiper,
  SwiperProps as ReactSwiperProps
} from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { NavigationOptions, PaginationOptions } from "swiper/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import classNames from "classnames";

interface SwiperProps extends ReactSwiperProps {
  navigationPosition?: React.CSSProperties;
  centeredSlides?: boolean;
  nextButtonClassName?: string;
  prevButtonClassName?: string;
  className?: string;
}

const Swiper = ({
  navigation = true,
  pagination = true,
  navigationPosition,
  centeredSlides,
  nextButtonClassName,
  prevButtonClassName,
  children,
  className,
  ...rest
}: PropsWithChildren<SwiperProps>) => {
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={classNames(
        "swiper-theme-container w-full h-full relative",
        className
      )}
    >
      {/* Navigation Buttons */}
      {navigation && (
        <div className="swiper-nav z-10">
          <button
            ref={navigationPrevRef}
            className={classNames(
              "rounded-full z-50 swiper-button-prev p-2 text-neutral-900 absolute left-2 top-1/2 -translate-y-1/2 md:text-lg lg:text-xl",
              prevButtonClassName
            )}
            style={navigationPosition}
          >
            <FaChevronLeft />
          </button>
          <button
            ref={navigationNextRef}
            className={classNames(
              "rounded-full z-50 swiper-button-next p-2 text-neutral-900 absolute right-2 top-1/2 -translate-y-1/2 md:text-lg lg:text-xl",
              nextButtonClassName
            )}
            style={navigationPosition}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      {/* Custom Pagination */}
      {pagination && (
        <div
          ref={paginationRef}
          className="custom-swiper-pagination absolute top-full left-0 w-full flex justify-center gap-2"
        ></div>
      )}

      <ReactSwiper
        loop={true}
        centeredSlides={centeredSlides}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-3 h-3 rounded-full block"></span>`;
          }
        }}
        modules={[Navigation, Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as NavigationOptions;
            navigation.prevEl = navigationPrevRef.current;
            navigation.nextEl = navigationNextRef.current;
          }
          if (swiper.params.pagination) {
            const pagination = swiper.params.pagination as PaginationOptions;
            pagination.el = paginationRef.current;
          }
        }}
        {...rest}
      >
        {children}
      </ReactSwiper>
    </div>
  );
};

export default Swiper;
