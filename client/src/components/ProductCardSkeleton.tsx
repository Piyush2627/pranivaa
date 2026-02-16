function ProductCardSkeleton() {
  return (
    <div className="group flex animate-pulse flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg dark:border-white/10 dark:bg-white/5">
      <div className="relative overflow-hidden bg-gray-200 pt-[100%] dark:bg-gray-700"></div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-1 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-3 mt-2 h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-8 w-full rounded bg-gray-200 dark:bg-gray-700"></div>
        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
          <div className="flex flex-col">
            <div className="mb-1 h-4 w-16 rounded bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
