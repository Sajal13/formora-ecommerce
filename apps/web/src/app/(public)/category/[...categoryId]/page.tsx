import React from "react";

interface Props {
  params: {
    categoryId: string[];
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params, searchParams }: Props) => {
  const [category, subCategory] = params.categoryId;
  const { priceMin, priceMax, size, availability } = searchParams;
  console.log(category, subCategory);
  console.log(priceMin, priceMax, size, availability);
  return <div>Category Page {category}</div>;
};

export default Page;
