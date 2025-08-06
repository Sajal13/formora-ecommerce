import React from "react";
import { whyUs } from "@/data/common";
import Image from "next/image";

const WhyFormora = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center place-content-center gap-4 md:gap-6 lg:gap-8">
        {whyUs.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-200 rounded-lg h-full flex flex-col justify-between items-center"
          >
            <Image
              src={item.image}
              alt={item.label}
              width={200}
              height={200}
              className="mb-5"
            />
            <div className="">
              <h5 className="text-xl lg:text-2xl text-neutral-900 text-center mb-3 grow">
                {item.label}
              </h5>
              <p className="text-muted font-light text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyFormora;
