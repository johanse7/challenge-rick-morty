import { LABEL_FILTER, LABEL_FILTER_PLURAL } from "@/lib/constants";
import { getCharacters } from "@/lib/services";
import { FilterParamsType } from "@/lib/types/params";
import { CharacterContent } from "./character-content";

export const CharactersResults = async (props: FilterParamsType) => {
  const { gender, name, species, status } = props;

  const result = await getCharacters({ gender, name, species, status });

  const { characters } = result ?? {};

  const countFilters = Object.keys(props).length;

  return (
    <>
      <div className="flex justify-between">
        {!!countFilters && (
          <>
            <h4 className="text-base font-semibold text-tertiary-300">
              {characters?.info?.count} Results
            </h4>
            <span className="text-sm py-[2px] px-3 bg-opacity-20 bg-secondary-600 rounded-xl text-secondary-400 font-semibold">
              {`${countFilters} ${
                countFilters > 1 ? LABEL_FILTER_PLURAL : LABEL_FILTER
              }`}
            </span>
          </>
        )}
      </div>
      <CharacterContent characters={characters?.results ?? []} />
    </>
  );
};
