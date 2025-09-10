"use client";

import React, { ChangeEvent, useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState<number | string>(1);

  const increase = () => setQuantity((prev) => (Number(prev) || 0) + 1);

  const decrease = () =>
    setQuantity((prev) => (Number(prev) > 1 ? Number(prev) - 1 : 1));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity("");
    } else if (/^\d+$/.test(value)) {
      setQuantity(Number(value));
    }
  };

  const handleBlur = () => {
    if (quantity === "" || Number(quantity) < 1) {
      setQuantity(1);
    }
  };

  return (
    <div className="flex items-center border rounded-lg md:p-2 w-[8rem]">
      <button
        onClick={decrease}
        className="text-lg font-medium px-2 hover:text-red-500 cursor-pointer"
      >
        −
      </button>
      <input
        type="number"
        name="quantity"
        value={quantity}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full text-center outline-0 py-2"
      />
      <button
        onClick={increase}
        className="text-lg font-medium px-2 hover:text-green-500 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
