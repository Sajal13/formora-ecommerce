import React from "react";

interface Props {
  params: {
    productId: number;
  };
}

const Page = async ({ params }: Props) => {
  const product = await params;
  const { productId } = product;
  console.log(productId);
  return <div>{productId}</div>;
};

export default Page;
