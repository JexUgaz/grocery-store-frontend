const ProductCardSkeleton = () => {
  return (
    <div className="w-70 bg-white rounded-3xl overflow-hidden shadow-md flex flex-col animate-pulse">
      <div className="h-40 bg-gray-200 flex items-center justify-center" />

      <div className="flex flex-col justify-between flex-1 gap-2">
        <div className="p-4 flex flex-col gap-2">
          <div className="h-5 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="flex items-center gap-2">
            <div className="h-5 bg-gray-200 rounded w-16" />
            <div className="h-4 bg-gray-200 rounded w-12" />
          </div>
        </div>

        <div className="flex justify-center py-2 gap-1 mx-5">
          <div className="h-10 w-10 bg-gray-200 rounded-2xl" />
          <div className="h-10 w-10 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

const ProductsSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
      {Array.from({ length: 8 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
