import Banners from "@/components/common/Banners";
import React from "react";
import Image1 from "@/assets/images/backgrounds/auth_bg.webp";
import CheckoutItemCard from "@/components/cards/CheckoutItemCard";

const checkoutItem = [
  {
    id: 1,
    image: Image1,
    title: "Powder canister",
    quantity: 1,
    category: "beauty",
    color: "black",
    price: 200
  }
];

const Page = () => {
  return (
    <>
      <Banners title="Checkout" />
      <section className="container mx-auto px-4 md:px-6 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="lg:order-1">
          <div className="py-2 border-b-1 border-b-gray-200 mb-4 md:mb-6">
            <h5 className="text-lg md:text-xl font-medium text-neutral-700">
              Review you orders
            </h5>
          </div>
          {checkoutItem.map((item) => (
            <CheckoutItemCard key={item.id} {...item} />
          ))}
        </div>
        <div className="xl:col-span-2">hello</div>
      </section>
    </>
  );
};

export default Page;
