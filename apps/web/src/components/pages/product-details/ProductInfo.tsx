import { Product } from "@/types/products";
import { currencyFormat } from "@/utils/helper";
import Rating from "@/components/base/Rating";
import React, { useState } from "react";
import Radio from "@/components/base/Radio";
import ProductQuantity from "@/components/common/ProductQuantity";
import IconButton from "@/components/base/IconButton";
import { usePathname } from "next/navigation";
import * as yup from "yup";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaRegHeart
} from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ProductInfoProps {
  item: Product;
}

interface ProductInfoFormValues {
  size: string;
  quantity: number;
}

const ProductInfoFormSchema: yup.ObjectSchema<ProductInfoFormValues> =
  yup.object({
    size: yup.string().required("Size is required."),
    quantity: yup
      .number()
      .min(1, "Quantity must be at least 1.")
      .required("Quantity is required.")
  });

const ProductInfo = ({ item }: ProductInfoProps) => {
  const [copied, setCopied] = useState(false);
  const [tooltipText, setTooltipText] = useState("Add to whitelist");
  const pathName = usePathname();
  const { control, handleSubmit } = useForm<ProductInfoFormValues>({
    resolver: yupResolver(ProductInfoFormSchema),
    defaultValues: {
      size: "l",
      quantity: 1
    }
  });
  const handleCopy = async () => {
    try {
      const fullUrl = `${window.location.origin}${pathName}`;
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleFormSubmit = (data: ProductInfoFormValues) => {
    console.log(data);
  };

  const handleWhitelist = () => {
    setTooltipText("Item added to whitelist");

    setTimeout(() => setTooltipText("Add to whitelist"), 2000);
  };
  return (
    <div>
      <form
        className="border-b border-b-gray-300 mb-7 md:mb-10"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-700 leading-relaxed">
          {item.title}
        </h2>
        <h4 className="font-medium text-muted md:text-xl lg:text-2xl leading-relaxed mb-3">
          {currencyFormat(item.price)}
        </h4>
        <div className="flex items-center mb-3">
          <Rating
            rating={item.rating}
            className="text-primary-200 pointer-events-none rating pe-4"
          />
          <div className="ps-4 border-l border-l-gray-300 text-muted">
            {item.reviews.length} Customer Review
          </div>
        </div>
        <p className="text-neutral-700 mb-6">{item.description}</p>
        <p className="text-muted mb-4">Sizes</p>
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <Controller
            name="size"
            control={control}
            render={({ field }) => (
              <>
                {["l", "xl", "xs"].map((size) => (
                  <div key={size}>
                    <Radio
                      checked={field.value === size}
                      name={field.name}
                      label={size}
                      value={size}
                      className="uppercase"
                      handleChange={(e) => field.onChange(e.target.value)}
                    />
                  </div>
                ))}
              </>
            )}
          />
        </div>
        <div className="flex gap-4 items-center mb-10 md:mb-14">
          <Controller
            name="quantity"
            control={control}
            render={({ field }) => (
              <ProductQuantity value={field.value} onChange={field.onChange} />
            )}
          />
          <button
            className={`h-[2.7rem] md:h-[3.55rem] w-[9rem] md:w-[13.438rem] flex 
        justify-center items-center border border-neutral-900 
        hover:bg-neutral-900 hover:text-white rounded-xl cursor-pointer`}
          >
            Add to Cart
          </button>
        </div>
      </form>
      <div>
        <table className="text-muted">
          <tbody>
            <tr>
              <td className="w-[5.75rem] pb-3">SKU</td>
              <td className="w-4 pb-3">:</td>
              <td className="w-[11.875rem] pb-3">{item.sku}</td>
            </tr>
            <tr>
              <td className="pb-3">Category</td>
              <td className="pb-3">:</td>
              <td className="pb-3 capitalize">{item.category}</td>
            </tr>
            <tr>
              <td className="pb-3">Tags</td>
              <td className="pb-3">:</td>
              <td className="pb-3 capitalize">{item.tags.join(", ")}</td>
            </tr>
            <tr>
              <td className="pb-3">Share</td>
              <td className="pb-3">:</td>
              <td className="relative pb-3">
                <div className="flex items-center justify-between gap-2 md:gap-4 mb-2">
                  <div className="flex items-center gap-2 md:gap-4">
                    <IconButton
                      size="sm"
                      className="w-fit h-fit"
                      onClick={handleCopy}
                    >
                      <FaFacebook />
                    </IconButton>
                    <IconButton
                      size="sm"
                      className="w-fit h-fit"
                      onClick={handleCopy}
                    >
                      <FaWhatsapp />
                    </IconButton>
                    <IconButton
                      size="sm"
                      className="w-fit h-fit"
                      onClick={handleCopy}
                    >
                      <FaInstagram />
                    </IconButton>
                  </div>
                  <IconButton
                    size="sm"
                    className="group relative w-fit h-fit hover:!bg-transparent text-red-500 hover:text-red-800"
                    onClick={handleWhitelist}
                  >
                    <FaRegHeart className=" " />
                    <span
                      className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 
                         whitespace-nowrap rounded-md bg-gray-800 px-3 py-1 text-sm text-white 
                         opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {tooltipText}
                    </span>
                  </IconButton>
                </div>
                {copied && (
                  <span className="text-sm text-green-600 ml-2 absolute -bottom-3">
                    Copied!
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductInfo;
