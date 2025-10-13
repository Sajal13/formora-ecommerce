import { ProductItem } from "@/types/products";
import React from "react";
import { currencyFormat } from "@/utils/helper";
import Image from "next/image";
import Rating from "@/components/base/Rating";
import classNames from "classnames";
import Link from "next/link";

interface ProductCardProps {
  item: ProductItem;
  rating?: boolean;
  className?: string;
}

const ProductCard = ({ rating = false, className, item }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${item.id}`}
      className={classNames(
        "flex justify-center md:justify-start transition-all duration-500",
        className
      )}
    >
      <div className="">
        <Image
          src={item.thumbnail}
          alt="top picks"
          width={280}
          height={280}
          className="mb-3 group-hover:-translate-y-1"
        />
        <div>
          <h5 className="text-sm lg:text-base text-neutral-600 group-hover:text-neutral-900 mb-3 font-medium">
            {item.title}
          </h5>
          <h4
            className={classNames(
              "text-xl lg:text-2xl font-medium text-neutral-600 group-hover:text-neutral-900 mb-3",
              {
                "mb-3": rating
              }
            )}
          >
            {currencyFormat(item.price)}
          </h4>
          {rating && (
            <div>
              <Rating
                rating={item.rating}
                className="text-warning pointer-events-none rating"
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
