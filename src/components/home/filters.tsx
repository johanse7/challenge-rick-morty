import { ArrowleftIcon } from "@/components/icons";
import { FILTERS } from "@/lib/constants";
import { FilterParamsType } from "@/lib/types/params";
import { useClickAway } from "@uidotdev/usehooks";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { Button } from "../button";

export type FiltersType = {
  onClickClose: () => void;
};

export const Filters = ({ onClickClose }: FiltersType) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  const [filters, setFilters] = useState<FilterParamsType | Object>(() =>
    params ? (Object.fromEntries(params) as FilterParamsType) : {}
  );

  const ref = useClickAway<HTMLDivElement>(() => {
    onClickClose();
  });

  const handleChangeFilter = (filterName: string, value: string) => () => {
    setFilters((filter) => {
      const currentValue = filter?.[filterName as keyof typeof filter];
      if (currentValue === value) {
        const { [filterName as keyof typeof filter]: remove, ...rest } = filter;
        return {
          ...rest,
        };
      }
      return {
        ...filter,
        [filterName]: value,
      };
    });
  };
  const handleClickFilter = () => {
    for (const filterName in FILTERS) {
      const value = filters[filterName as keyof typeof filters];
      if (value) params.set(filterName, value);
      else params.delete(filterName);
    }

    replace(`${pathname}?${params.toString()}`);
    onClickClose();
  };

  return (
    <RemoveScroll className="md:overflow-y-auto">
      <div
        ref={ref}
        className=" flex flex-col gap-2 md:border md:top-16 md:border-gray-100 md:rounded-lg fixed left-0 top-0  md:shadow-xl w-full h-dvh z-50 bg-white p-6 md:absolute md:h-auto "
      >
        <header className="flex md:hidden">
          <div className="flex-grow-[0.5]">
            <button className="w-[28px]" onClick={onClickClose}>
              <ArrowleftIcon />
            </button>
          </div>
          <h4 className="font-semibold">Filters</h4>
        </header>
        <div className="flex flex-col flex-grow">
          {Object.entries(FILTERS).map(([filterName, values]) => {
            return (
              <div className="mb-7" key={filterName}>
                <span className="font-medium text-gray-500 text-base capitalize">
                  {filterName}
                </span>
                <div className="flex gap-2 mt-5 flex-wrap">
                  {values.map(({ label, value }) => (
                    <button
                      key={label}
                      className={clsx(
                        "py-[12px] px-[10px] rounded-lg border border-gray-200 min-w-24 md:min-w-20 hover:bg-primary-100 hover:bottom-0",
                        {
                          "bg-primary-100 border-transparent":
                            filters?.[filterName as keyof typeof filters] ===
                            value,
                        }
                      )}
                      onClick={handleChangeFilter(filterName, value)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Button onClick={handleClickFilter}>Filter</Button>
      </div>
    </RemoveScroll>
  );
};
