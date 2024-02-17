import { getCharacters } from "@/lib/services";
import { FilterParamsType } from "@/lib/types/params";
import { CharacterContent } from "./character-content";

export const CharactersResults = async (props: FilterParamsType) => {
  const { gender, name, species, status } = props;

  const characters = await getCharacters({ gender, name, species, status });

  return (
    <>
      <CharacterContent characters={characters?.results ?? []} />
    </>
  );
};
