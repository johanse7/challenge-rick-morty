"use client";

import { useFavoriteCharacters } from "@/lib/store";
import { CharacterType } from "@/lib/types/character";
import { useMemo } from "react";
import { CharactersList } from "./characters/character-list";

type CharacterContentType = {
  characters: Array<CharacterType>;
};

export const CharacterContent = (props: CharacterContentType) => {
  const { characters = [] } = props;

  const favoriteList = useFavoriteCharacters((state) => state.favoriteList);

  const { charactersAll, favoriteListResult } = useMemo(() => {
    const favoriteListResult = characters.filter(({ id }) =>
      favoriteList.includes(id)
    );
    const charactersAll = characters.filter(
      ({ id }) => !favoriteList.includes(id)
    );
    return {
      favoriteListResult,
      charactersAll,
    };
  }, [favoriteList, characters]);

  return (
    <>
      <h3 className="text-gray-400 font-bold text-xs md:text-sm">
        Starred Characters ({favoriteList.length})
      </h3>
      <CharactersList characters={favoriteListResult} />

      <h3 className="text-gray-400 font-bold text-xs md:text-sm">
        Characters ({characters?.length})
      </h3>
      <CharactersList characters={charactersAll} />
    </>
  );
};
