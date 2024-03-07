import { LABEL_FILTER, LABEL_FILTER_PLURAL } from "@/lib/constants";
import { useGetSearchParams } from "@/lib/hooks";
import { GET_CHARACTERS, GET_TOTAL_PAGES } from "@/lib/queries";
import { CharactersQuery } from '@/lib/types/character';
import { FilterParamsType } from "@/lib/types/params";
import { getCountFilterParams } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { Pagination } from "../pagination";
import { CharacterContentSkeleton } from "../skeletons";
import { CharacterContent } from "./character-content";

export const CharactersResults = () => {
  const searchParams = useGetSearchParams();
  const { data: result, loading } = useQuery<CharactersQuery>(
    GET_CHARACTERS(searchParams as FilterParamsType)
  );

  const { data } = useQuery<CharactersQuery>(
    GET_TOTAL_PAGES(searchParams as FilterParamsType)
  );

  const { characters } = result ?? {};
  const totalPages = data?.characters?.info?.pages ?? 0;

  const renderCountFilters = () => {
    const countFilters = getCountFilterParams(searchParams);

    if (!countFilters) return null;

    return (
      <div className="flex justify-between">
        <h4 className="text-base font-semibold text-tertiary-300">
          {characters?.info?.count} Results
        </h4>
        <span className="text-sm py-[2px] px-3 bg-opacity-20 bg-secondary-600 rounded-xl text-secondary-400 font-semibold">
          {`${countFilters} ${
            countFilters > 1 ? LABEL_FILTER_PLURAL : LABEL_FILTER
          }`}
        </span>
      </div>
    );
  };

  const renderPaginator = () => {
    if (!totalPages) return null;

    return <Pagination className="mt-3" totalPages={totalPages} />;
  };

  return (
    <>
      {renderCountFilters()}
      {renderPaginator()}
      {loading ? (
        <CharacterContentSkeleton />
      ) : (
        <CharacterContent characters={characters?.results ?? []} />
      )}
    </>
  );
};
