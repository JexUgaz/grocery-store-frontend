"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks";
import { TextInput } from "@/components/shared/inputs";
import CloseIcon from "@/components/icons/CloseIcon";

interface Props {
  query?: string;
}

const ShopSearchBar: React.FC<Props> = ({ query = "" }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(query);
  const debounceSearch = useDebounce(searchTerm, 500);

  const clearSearch = () => {
    setSearchTerm("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("query");
    router.push(`/shop?${params.toString()}`);
  };

  useEffect(() => {
    if (debounceSearch.trim() === "") return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("query", debounceSearch);
    router.push(`/shop?${params.toString()}`);
  }, [debounceSearch, router]);

  return (
    <div className="relative flex items-center justify-center">
      <TextInput
        name="query-products"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
      />
      {searchTerm && (
        <button
          type="button"
          className="absolute top-[50%] -translate-y-[50%] right-2 text-secondary rounded-full p-1 hover:bg-secondary hover:text-white"
          onClick={clearSearch}
        >
          <CloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
};

export default ShopSearchBar;
