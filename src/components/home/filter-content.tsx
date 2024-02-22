import { getTotalPages } from "@/lib/services";
import { FilterParamsType } from "@/lib/types/params";
import { getKeyValues } from "@/lib/utils";
import { Suspense } from "react";
import { Pagination } from "../pagination";
import { CharacterContentSkeleton } from "../skeletons";
import { CharactersResults } from "./characters-results";
import { Search } from "./search";

export const FilterContent = async (props: FilterParamsType) => {
  const totalPages = await getTotalPages(props);

  return (
    <section className="w-full md:w-[380px] flex h-full flex-col md:px-5 px-4 py-8 md:overflow-y-auto md:bg-gray-50 md:bg-opacity-50">
      <header className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl font-bold md:font-normal">
          Rick and Morty list
        </h1>
        <Suspense>
          <Search />
        </Suspense>
        <Suspense>
          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </Suspense>
      </header>
      <Suspense
        key={getKeyValues(props)}
        fallback={<CharacterContentSkeleton />}
      >
        <div className="flex flex-col gap-5">
          <CharactersResults {...props} />
        </div>
      </Suspense>
      <Suspense>
        {totalPages > 1 && (
          <Pagination className="mt-3" totalPages={totalPages} />
        )}
      </Suspense>
    </section>
  );
};
