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
      <CharactersList
        title=" Starred Characters"
        characters={favoriteListResult}
      />
      <CharactersList title="Characters" characters={charactersAll} />
    </>
  );
};
