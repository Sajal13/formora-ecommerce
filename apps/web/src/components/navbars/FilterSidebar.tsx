"use client";

import { FilterData, filterData } from "@/data/filter-data";
import { useCategoryFilterStore } from "@/utils/stores/categoryStore";
import classNames from "classnames";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import ReactRange from "../base/ReactRange";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface FilterFormValues {
  availability: string[];
  categories: string[];
  size: string[];
  price: number[];
}

interface AccordionItemProps {
  item: FilterData;
  isOpen: boolean;
  onToggle: () => void;
  register: ReturnType<typeof useForm<FilterFormValues>>["register"];
}

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  register
}: AccordionItemProps) => (
  <div className="mb-4">
    <button
      type="button"
      className="flex justify-between items-center w-full pb-3 text-left font-medium"
      onClick={onToggle}
    >
      {item.label}
      <FaChevronDown
        className={classNames("transition-transform cursor-pointer", {
          "rotate-180": isOpen
        })}
      />
    </button>

    {isOpen && (
      <div className="ps-2">
        {item.fields.map((field) => (
          <div key={field.key} className="mb-2">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={field.key}
                {...register(field.name as keyof FilterFormValues)}
                className="mr-2"
              />
              <span className="text-gray-700 hover:text-gray-900">
                {field.placeholder}
              </span>
            </label>
          </div>
        ))}
      </div>
    )}
  </div>
);

const FilterSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const { showFilter, toggleFilter, setShowFilter, maxPrice } =
    useCategoryFilterStore();

  const [values, setValues] = useState<number[]>([0, maxPrice]);

  const { register, setValue, watch } = useForm<FilterFormValues>({
    defaultValues: {
      availability: [],
      categories: [],
      size: [],
      price: values
    }
  });

  const filters = watch();

  const initialOpenItems = useMemo(() => filterData.map((item) => item.id), []);
  const [openItems, setOpenItems] = React.useState<number[]>(initialOpenItems);

  const showCategoriesAccordion = useMemo(
    () => pathName === "/category",
    [pathName]
  );

  const handleToggle = useCallback((id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setShowFilter(true);
    }
  }, [setShowFilter]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const appendArrayParam = (key: keyof typeof filters) => {
      const value = filters[key];
      params.delete(key);
      if (Array.isArray(value) && value.length > 0) {
        params.set(key, value.join(","));
      }
    };

    (["availability", "size"] as (keyof FilterFormValues)[]).forEach(
      appendArrayParam
    );

    if (showCategoriesAccordion) {
      appendArrayParam("categories");
    }

    if (Array.isArray(filters.price) && filters.price.length === 2) {
      params.set("priceMin", String(filters.price[0]));
      params.set("priceMax", String(filters.price[1]));
    } else {
      params.delete("priceMin");
      params.delete("priceMax");
    }

    router.push(`${pathName}?${decodeURIComponent(params.toString())}`, {
      scroll: false
    });
  }, [
    filters,
    router,
    searchParams,
    pathName,
    showCategoriesAccordion,
    values
  ]);

  useEffect(() => {
    if (maxPrice > 0) {
      setValues([0, maxPrice]);
      setValue("price", [0, maxPrice]);
    }
  }, [maxPrice, setValue]);

  return (
    <div
      className={classNames(
        `fixed xl:static top-0 left-0 h-screen xl:h-auto transition-all
        z-50 xl:z-0 bg-white border-r border-gray-200 overflow-hidden`,
        {
          "translate-x-0 w-64": showFilter,
          "-translate-x-full w-0": !showFilter
        }
      )}
    >
      <div className="px-4 py-6">
        {/* Header for mobile */}
        <div className="flex xl:hidden items-center justify-between mb-4">
          <h2 className="text-lg text-gray-700 font-semibold">Filters</h2>
          <button
            onClick={toggleFilter}
            className="text-gray-700 hover:text-gray-700 xl:hidden"
            aria-label="Close filters"
          >
            <GrClose className="text-xl" />
          </button>
        </div>

        {/* Filter Accordions */}
        <div>
          {filterData.map((filter) => {
            if (filter.key === "categories" && !showCategoriesAccordion)
              return null; // hide categories if not on /category
            return (
              <AccordionItem
                key={filter.id}
                item={filter}
                isOpen={openItems.includes(filter.id)}
                onToggle={() => handleToggle(filter.id)}
                register={register}
              />
            );
          })}

          <div className="mt-2">
            <p className="pb-3 font-medium">Price</p>
            <ReactRange
              values={values}
              max={maxPrice || 1000}
              onChange={(val) => {
                setValues(val);
              }}
              onFinalChange={(val) => {
                setValues(val);
                setValue("price", val, { shouldDirty: true });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
