"use client";

import { useRouter, useSearchParams } from "next/navigation";
import SelectInput from "../shared/inputs/SelectInput";
import { attrIsEmpty } from "./validations";
import { ShopSortOptions } from "@/types/ShopSortOptions";

const sortOptions: { value: ShopSortOptions; label: string }[] = [
  { value: ShopSortOptions.PRICE_ASC, label: "Price: Low to High" },
  { value: ShopSortOptions.PRICE_DESC, label: "Price: High to Low" },
] as const;

interface Props {
  sort?: ShopSortOptions;
}

const ShopSort: React.FC<Props> = ({ sort = "" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (attrIsEmpty(value)) {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <SelectInput
      label="Sort by"
      name="sort"
      value={sort}
      onChange={(e) => onChange(e.target.value)}
      options={sortOptions}
      placeholder="Default"
    />
  );
};

export default ShopSort;
