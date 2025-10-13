import React, { useMemo, useState } from "react";
import { productAdditionalInformation } from "@/data/products";
import classNames from "classnames";
import Description from "./Description";
import {
  Product,
  ProductAdditionalInformation,
  ProductTabContent,
  ProductTabHeader
} from "@/types/products";
import AdditionalInformation from "./AdditionalInformation";
import Reviews from "./Reviews";

const tabHeaders: ProductTabHeader[] = [
  {
    id: "description",
    label: "Description"
  },
  {
    id: "additional",
    label: "Additional Information"
  },
  {
    id: "reviews",
    label: "Reviews"
  }
];

const generateTabContent = (
  item: Product,
  additionalInfo: ProductAdditionalInformation
): ProductTabContent[] => {
  return [
    {
      id: 1,
      key: "description",
      content: (
        <Description
          description={item.description}
          additionalImage={item.images}
        />
      )
    },
    {
      id: 2,
      key: "additional",
      content: (
        <AdditionalInformation item={additionalInfo} category={item.category} />
      )
    },
    {
      id: 3,
      key: "reviews",
      content: <Reviews reviews={item.reviews} />
    }
  ];
};

interface ProductTabProps {
  item: Product;
}

const ProductTab = ({ item }: ProductTabProps) => {
  const [value, setValue] = useState("description");

  const tabContents = useMemo(
    () => generateTabContent(item, productAdditionalInformation),
    [item]
  );
  return (
    <div className="p-6 md:p-8 lg:p-12">
      <div className="flex justify-center items-center gap-6 md:gap-10 mb-4 md:mb-6 lg:mb-8">
        {tabHeaders.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setValue(tab.id)}
            type="button"
            className={classNames(
              "border-0 py-2 text-neutral-700 text-nowrap cursor-pointer transition-all duration-100",
              {
                "font-medium": tab.id === value
              }
            )}
          >
            {tab.label} {tab.label === "Reviews" && `[${item.reviews.length}]`}
          </button>
        ))}
      </div>
      <div>
        {tabContents.map((tab) => (
          <div
            key={tab.id}
            className={classNames({ hidden: tab.key !== value })}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTab;
