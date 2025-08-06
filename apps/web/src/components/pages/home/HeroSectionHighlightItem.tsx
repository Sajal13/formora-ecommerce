import Button from "@/components/base/Button";
import { HighlightItem } from "@/data/products";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const HeroSectionHighlightItem = ({
  highlightItem
}: {
  highlightItem: HighlightItem;
}) => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center place-content-center gap-4 lg:gap-6 px-4 md:px-6 xl:px-8 text-center md:text-start">
      <div className="flex flex-col items-center md:items-start">
        <h4 className="text-3xl md:text-4xl lg:text-6xl font-medium text-neutral-900 leading-normal">
          {highlightItem.title}
        </h4>
        <Button className="relative group max-w-[7.563rem] max-h-[3.125rem] justify-start">
          <Link href={"#"}>
            <p className="mb-3">Shop Now</p>
            <div className="h-0.5 w-2/3 absolute left-0 bottom-0 bg-neutral-900 transition-all duration-300 group-hover:w-full " />
          </Link>
        </Button>
      </div>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={highlightItem.thumbnail}
          alt="ThumnailImage"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default HeroSectionHighlightItem;
