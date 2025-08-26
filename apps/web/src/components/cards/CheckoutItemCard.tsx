"use client";

import Image, { StaticImageData } from "next/image";
import { currencyFormat } from "@/utils/helper";
import classNames from "classnames";

interface CheckoutItemCardProps {
  id: number;
  image: StaticImageData | string;
  title: string;
  color: string;
  quantity: number;
  category: string;
  price: number;
  className?: string;
}

const CheckoutItemCard = (props: CheckoutItemCardProps) => {
  const { image, title, color, quantity, category, price, className } = props;

  return (
    <div
      className={classNames(
        "border-1 border-gray-200 p-4 md:p-6 bg-slate-100 rounded-lg flex justify-between gap-4",
        className
      )}
    >
      <div className="border-1 border-muted p-1 rounded-lg h-fit">
        <Image src={image} alt={title} height={80} width={80} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between gap-2 items-center mb-2">
          <h4 className="md:text-lg text-neutral-700 font-medium">{title}</h4>
          <h5 className="text-sm md:text-base font-medium text-neutral-700">
            {currencyFormat(price)}
          </h5>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="min-w-[100px]">
                <p className="text-sm md:text-base mb-1">Color :</p>
              </td>
              <td className="w-6">
                <p className="text-sm md:text-base mb-1">:</p>
              </td>
              <td className="">
                <p className="text-sm md:text-base mb-1 font-medium capitalize">
                  {color}
                </p>
              </td>
            </tr>
            <tr>
              <td className="min-w-[100px]">
                <p className="text-sm md:text-base mb-1">Category</p>
              </td>
              <td className="w-6">
                <p className="text-sm md:text-base mb-1">:</p>
              </td>
              <td className="">
                <p className="text-sm md:text-base mb-1 font-medium capitalize">
                  {category}
                </p>
              </td>
            </tr>
            <tr>
              <td className="min-w-[100px]">
                <p className="text-sm md:text-base mb-1">Quantity</p>
              </td>
              <td className="w-6">
                <p className="text-sm md:text-base mb-1">:</p>
              </td>
              <td className="">
                <p className="text-sm md:text-base mb-1 font-medium">
                  {quantity}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CheckoutItemCard;
