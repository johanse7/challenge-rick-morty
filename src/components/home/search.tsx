import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export const Search = () => {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-lg border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={"Search or filter results"}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
      <AdjustmentsVerticalIcon className="absolute right-4 top-2  h-[24px] w-[24px] text-primary-600" />
    </div>
  );
};
