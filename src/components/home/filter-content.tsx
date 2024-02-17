import { getCharacters } from "@/lib/services";
import { CharacterContent } from "./character-content";
import { Search } from "./search";

export const FilterContent = async () => {
  const characters = await getCharacters();

  if (!characters?.results?.length) return null;

  return (
    <section className="flex h-full flex-col pt-8 px-4 md:px-5">
      <header className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl font-bold md:font-normal">
          Rick and Morty list
        </h1>
        <Search />
      </header>
      <div className="flex flex-col gap-5">
        <CharacterContent characters={characters?.results} />
      </div>
    </section>
  );
};
