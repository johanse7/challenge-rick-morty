import { FilterParamsType } from "@/lib/types/params";
import { getKeyValues } from "@/lib/utils";
import { Suspense } from "react";
import { CharacterContentSkeleton } from "../skeletons";
import { CharactersResults } from "./characters-results";
import { Search } from "./search";

export const FilterContent = (props: FilterParamsType) => {
  return (
    <section className="w-full md:w-[350px] flex h-full flex-col md:px-5 px-4 py-8 md:overflow-y-auto md:bg-gray-50 md:bg-opacity-50">
      <header className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl font-bold md:font-normal">
          Rick and Morty list
        </h1>
        <Search />
      </header>
      <div className="flex flex-col gap-5">
        <Suspense
          key={getKeyValues(props)}
          fallback={<CharacterContentSkeleton />}
        >
          <CharactersResults {...props} />
        </Suspense>
      </div>
    </section>
  );
};
