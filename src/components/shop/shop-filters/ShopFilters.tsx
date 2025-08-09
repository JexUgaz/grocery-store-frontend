"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "@/data/categories";
import { CheckboxInput, TextInput } from "@/components/shared/inputs";
import { useFilterState } from "@/components/shop/hooks/useFilterState";
import {
  attrIsEmpty,
  FilterProps,
  validateMax,
  validateMin,
} from "@/components/shop/validations";
import { useCallback } from "react";
import FilterButtons from "./components/FilterButtons";
import FiltersIcon from "@/components/icons/FiltersIcon";

interface Props {
  initFilters: FilterProps;
}

const ShopFilters: React.FC<Props> = ({ initFilters }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initEmpty = Object.values(initFilters).every(attrIsEmpty);

  const {
    values: filter,
    setFilter,
    reset,
    clearAll,
    isEmpty,
    isDirty,
  } = useFilterState(initFilters);

  const resetSearchParams = (data: FilterProps) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log({ data });

    Object.entries(data).forEach(([key, value]) => {
      if (attrIsEmpty(value)) {
        return params.delete(key);
      }
      const paramValue = typeof value === "boolean" ? String(value) : value;
      params.set(key, paramValue ?? "");
    });

    router.push(`?${params.toString()}`);
  };

  const applyFilters = useCallback(() => resetSearchParams(filter), [filter]);

  const clearFilters = () => {
    clearAll();
    resetSearchParams({ category: null, max: null, min: null, sale: false });
  };

  return (
    <div className="flex flex-col bg-white p-5 rounded-4xl">
      <h2 className="flex items-center justify-center text-xl gap-1 font-bold mb-3">
        <FiltersIcon className="size-5" />
        Filter Options{" "}
      </h2>
      <div className="flex flex-col gap-2 mb-5">
        <h3 className="font-bold text-lg text-secondary"> Categories</h3>
        <ul className="flex flex-col space-y-1 text-base">
          <li>
            <CheckboxInput
              label="All Categories"
              name="categories"
              checked={!filter.category}
              onChange={(e) => setFilter("category", null)}
            />
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <CheckboxInput
                label={cat.title}
                name={cat.id}
                value={cat.id}
                checked={filter.category === cat.id}
                onChange={(e) => setFilter("category", e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <h3 className="font-bold">Price</h3>
        <div className="flex gap-1">
          <TextInput
            type="number"
            name="min"
            placeholder="Min"
            value={filter.min ?? ""}
            min={0}
            onChange={(e) => setFilter("min", e.target.value)}
            onBlur={() => {
              const minValue = validateMin(filter.min, filter.max);
              setFilter("min", minValue);
            }}
            className="w-[50%]"
          />
          <TextInput
            type="number"
            placeholder="Max"
            name="max"
            value={filter.max ?? ""}
            min={0}
            onChange={(e) => setFilter("max", e.target.value)}
            onBlur={() => {
              const maxValue = validateMax(filter.max, filter.min);
              setFilter("max", maxValue);
            }}
            className="w-[50%]"
          />
        </div>
      </div>

      <CheckboxInput
        label="On Sale Only 🏷️"
        name="sale"
        className="mb-5"
        checked={filter.sale ?? false}
        onChange={(e) => setFilter("sale", e.target.checked)}
      />
      <FilterButtons
        initEmpty={initEmpty}
        isDirty={isDirty}
        isEmpty={isEmpty}
        onApplyFilter={applyFilters}
        onClear={clearFilters}
        onReset={reset}
      />
    </div>
  );
};

export default ShopFilters;
