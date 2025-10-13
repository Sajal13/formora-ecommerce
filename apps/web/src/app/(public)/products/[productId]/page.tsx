import React from "react";
import { getProductById } from "@/utils/products";
import ProductDetailsContainer from "@/components/pages/product-details/Index";

interface Props {
  params: {
    productId: number;
  };
}

const Page = async ({ params }: Props) => {
  const product = await params;
  const { productId } = product;
  const data = await getProductById(productId);
  return (
    <>
      <ProductDetailsContainer item={data} />
    </>
  );
};

export default Page;
