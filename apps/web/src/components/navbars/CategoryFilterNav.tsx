"use client";

import React, { useState, useEffect } from "react";
import Banners from "@/components/common/Banners";
import { useCategoryFilterStore } from "@/utils/stores/categoryStore";
import { FaFilter } from "react-icons/fa";
import FormSelect from "../base/FormSelect";
import classNames from "classnames";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryFilterNav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get the initial sortBy value from the URL
  const initialSortBy = searchParams.get("sortBy") || "";

  // 1. Use local state to manage the select's value
  const [currentSortBy, setCurrentSortBy] = useState(initialSortBy);

  // You can still use your Zustand store if needed, but the primary source of truth
  // for the select field's value should be this local state for instant updates.
  const { showFilter, toggleFilter } = useCategoryFilterStore();

  // 2. Add a useEffect to sync local state with URL changes.
  // This is important for when the user navigates back/forward or modifies the URL manually.
  useEffect(() => {
    const urlSortBy = searchParams.get("sortBy") || "";
    if (urlSortBy !== currentSortBy) {
      setCurrentSortBy(urlSortBy);
    }
  }, [searchParams, currentSortBy]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    // Update the local state first for immediate UI feedback
    setCurrentSortBy(value);

    // Create a new URLSearchParams instance
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("sortBy", value);
    } else {
      params.delete("sortBy");
    }

    // Update the URL without a full page reload
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Banners title="Formora" />
      <div className="flex justify-between items-center w-full px-4 py-2 bg-white border-b border-gray-200">
        <div>
          <button
            onClick={toggleFilter}
            className={classNames(
              "flex items-center gap-2 text-gray-700 bg-indigo-50 py-2 px-4 rounded-lg hover:text-green-600 cursor-pointer",
              { "text-green-600": showFilter }
            )}
          >
            <FaFilter />
            <span className="hidden sm:block">
              {showFilter ? "Hide" : "Show"} Filter
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-gray-700 font-medium me-2 hidden md:block">
            32 results
          </p>

          <FormSelect
            fieldSize="sm"
            value={currentSortBy} // Now controlled by local state
            onChange={handleSortChange}
            className="pe-6 border border-gray-300 rounded"
          >
            <option value="">Default</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="newest">Newest</option>
          </FormSelect>
        </div>
      </div>
    </>
  );
};

export default CategoryFilterNav;
