"use client";

import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { categories, ProductItem } from "@/data/products";
import { debounce } from "lodash";
import { categoryFilter, currencyFormat, productFilter } from "@/utils/helper";
import { getAllProducts } from "@/utils/products";
import Button from "../base/Button";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

type Tab = "category" | "product";

interface SearchProps {
  variant?: "modal" | "navbar";
}

const Search = ({ variant = "navbar" }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>("product");

  const handleSearch = useMemo(
    () =>
      debounce((searchTerm: string) => {
        if (!searchTerm.trim()) {
          setFilteredCategories([]);
          setFilteredProducts([]);
          return;
        }

        const categoryResults = categoryFilter(searchTerm, categories);
        const productResults = productFilter(searchTerm, products);

        setFilteredCategories(categoryResults);
        setFilteredProducts(productResults);
      }, 300),
    [products]
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  useEffect(() => {
    const getProductsData = async () => {
      const data = await getAllProducts();
      setProducts(data.products);
    };
    getProductsData();
  }, []);

  return (
    <div className="relative">
      <input
        type="search"
        value={searchQuery}
        onChange={onChange}
        placeholder="Search Items"
        className={classNames(
          `rounded-lg border border-gray-300 py-2 ps-12 pe-4  outline-0 
          focus:border-gray-700 text-lg transition-all duration-500`,
          {
            "md:w-[20rem] lg:w-[30rem]": variant === "navbar",
            "w-full": variant === "modal"
          }
        )}
      />
      <div className="absolute left-5 top-1/2 -translate-y-[53%]">
        <BsSearch className="text-gray-500" />
      </div>

      {searchQuery.trim().length > 0 &&
        (filteredCategories.length > 0 || filteredProducts.length > 0) && (
          <div
            className={classNames(
              `absolute bg-white h-[30rem] pb-6 rounded-b-lg overflow-y-auto 
              shadow-lg z-50 border-gray-700 border-t-0`,
              {
                "md:w-[20rem] lg:w-[30rem]": variant === "navbar",
                "w-full": variant === "modal"
              }
            )}
          >
            {/* Categories */}
            <div
              className="sticky top-0 bg-slate-100 py-3 mb-2 px-3 rounded-t-lg"
              role="tab"
            >
              <div className="flex items-center gap-4">
                {(["product", "category"] as Tab[]).map((item) => (
                  <button
                    key={item}
                    className={classNames(
                      `text-lg md:text-sm lg:text-lg font-medium flex items-center justify-center 
                      px-4 py-2 md:px-6 md:py-2.5 lg:px-8 text-neutral-800 border rounded-lg 
                      border-neutral-800 hover:text-white hover:bg-neutral-800 cursor-pointer`,
                      {
                        "bg-neutral-800 text-white": activeTab === item
                      }
                    )}
                    onClick={() => setActiveTab(item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div role="tablist" className="px-6">
              {activeTab === "product" && (
                <ul>
                  {filteredProducts.slice(0, 8).map((item) => (
                    <li key={item.id} className="py-2 border-b-gray-700">
                      <Link
                        href="/products"
                        className="flex gap-3 items-center "
                      >
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          height={60}
                          width={60}
                        />
                        <div>
                          <p className="text-sm text-neutral-900 mb-1 font-medium">
                            {item.title}
                          </p>
                          <p className="text-gray-700 font-bold">
                            {currencyFormat(item.price)}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                  {filteredProducts.length > 8 && (
                    <li className="">
                      <Button variant="outline" className="w-full">
                        <Link href="/">See More Products</Link>
                      </Button>
                    </li>
                  )}
                </ul>
              )}
              {activeTab === "category" && (
                <ul>
                  {filteredCategories.slice(0, 8).map((item) => (
                    <li key={item.id} className="py-2 border-b-gray-700">
                      {item.name}
                    </li>
                  ))}
                  {filteredCategories.length > 8 && (
                    <li className="">
                      <Button variant="outline" className="w-full">
                        <Link href="/">See More Categories</Link>
                      </Button>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        )}
    </div>
  );
};

export default Search;
