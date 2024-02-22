"use client";

import { TYPE_DELAY } from "@/lib/constants";
import { useToggle } from "@/lib/hooks";
import {
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Filters } from "./filters";

export const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const { changeToggle, value } = useToggle();

  const handleSearch = useDebouncedCallback((name: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (name) {
      params.set("name", name);
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`);
  }, TYPE_DELAY);

  return (
    <div className="relative">
      <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="block w-full h-[52px] rounded-lg focus:border focus:border-gray-200 focus:outline-none py-[9px] pl-10 text-sm outline-2 bg-gray-100 placeholder:text-gray-500"
          placeholder={"Search or filter results"}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("name")?.toString()}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
        <button className="absolute right-4 top-[14px]">
          <AdjustmentsVerticalIcon
            className="h-[24px] w-[24px] text-primary-600"
            onClick={changeToggle}
          />
        </button>
      </div>
      {value && <Filters onClickClose={changeToggle} />}
    </div>
  );
};
