import BasketIcon from "@/components/icons/BasketIcon";

interface Props {
  query?: string;
}

const EmptyResult: React.FC<Props> = ({ query }) => (
  <div className="w-280 h-full flex flex-col items-center justify-center gap-5 text-secondary">
    <BasketIcon className="size-50" />
    <p className="text-3xl font-semibold">No Results in Products</p>
    <p className="text-gray-500 text-base max-w-lg text-center">
      {query ? (
        <>
          No results for the term <span className="font-bold">"{query}"</span>{" "}
          in our product catalog. You can try another search term similar to
          this one.
        </>
      ) : (
        <>
          No products found with the selected filters. Try adjusting your
          search.
        </>
      )}
    </p>
  </div>
);

export default EmptyResult;
