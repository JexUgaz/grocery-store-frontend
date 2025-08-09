"use client";

import { PaginationMetadata } from "@/types/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import PaginationButton from "./PaginationButton";
import ArrowIcon from "@/components/icons/ArrowIcon";
type Props = {
  metadata: PaginationMetadata;
};

const Pagination: React.FC<Props> = ({ metadata }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    totalPages,
    page: currentPage,
    hasNextPage,
    hasPreviousPage,
  } = metadata;

  const setPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {hasPreviousPage && (
        <PaginationButton onClick={() => setPage(currentPage - 1)}>
          <ArrowIcon className="size-5 rotate-270" />
        </PaginationButton>
      )}

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <PaginationButton
            key={page}
            onClick={() => setPage(page)}
            selected={currentPage === page}
          >
            {page}
          </PaginationButton>
        );
      })}

      {hasNextPage && (
        <PaginationButton onClick={() => setPage(currentPage + 1)}>
          <ArrowIcon className="size-5 rotate-90" />
        </PaginationButton>
      )}
    </div>
  );
};

export default Pagination;
