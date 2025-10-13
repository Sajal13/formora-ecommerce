"use client";

import React, { ChangeEvent } from "react";

interface ProductQuantityProps {
  value: number;
  onChange: (value: number) => void;
}

const ProductQuantity = ({ value, onChange }: ProductQuantityProps) => {
  const increase = () => onChange(value + 1);

  const decrease = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "") {
      onChange(0);
    } else {
      const parsed = Number(value);
      onChange(parsed < 1 ? 1 : parsed);
    }
  };

  return (
    <div className="flex items-center border rounded-lg md:p-2 w-[8rem]">
      <button
        type="button"
        onClick={decrease}
        disabled={value < 1}
        className="text-lg font-medium px-2 hover:text-red-500 cursor-pointer"
      >
        −
      </button>
      <input
        type="number"
        name="quantity"
        min={1}
        value={value}
        onChange={handleChange}
        className="w-full text-center outline-0 py-2"
      />
      <button
        type="button"
        onClick={increase}
        className="text-lg font-medium px-2 hover:text-green-500 cursor-pointer"
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
