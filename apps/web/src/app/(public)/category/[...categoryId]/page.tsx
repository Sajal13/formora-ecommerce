import React from "react";
import ProductList from "@/components/pages/category/ProductList";

interface Props {
  params: {
    categoryId: string[];
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params, searchParams }: Props) => {
  const { categoryId } = await params;
  const [category, subCategory] = categoryId;
  const query = searchParams;
  return (
    <div className="container mx-auto py-3">
      <ProductList
        category={category}
        subCategory={subCategory}
        searchParams={query}
      />
    </div>
  );
};

export default Page;
