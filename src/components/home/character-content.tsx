"use client";

import { useGetFavorite } from "@/lib/hooks";
import { CharacterType } from "@/lib/types/character";
import { useMemo } from "react";
import { CharactersList } from "./character-list";

type CharacterContentType = {
  characters: Array<CharacterType>;
};

export const CharacterContent = (props: CharacterContentType) => {
  const { characters = [] } = props;

  const { getIsFavorite } = useGetFavorite();

  const { charactersAll, favoriteListResult } = useMemo(() => {
    const favoriteListResult = characters.filter(({ id }) => getIsFavorite(id));
    const charactersAll = characters.filter(({ id }) => !getIsFavorite(id));
    return {
      favoriteListResult,
      charactersAll,
    };
  }, [getIsFavorite, characters]);

  return (
    <>
      <h3 className="text-gray-400 font-bold text-xs md:text-sm">
        Starred Characters ({favoriteListResult.length})
      </h3>
      <CharactersList characters={favoriteListResult} />

      <h3 className="text-gray-400 font-bold text-xs md:text-sm">
        Characters ({charactersAll?.length})
      </h3>
      <CharactersList characters={charactersAll} />
    </>
  );
};
