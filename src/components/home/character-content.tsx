"use client";

import { useGetFavorite } from "@/lib/hooks";
import { useCharacterDeleted } from "@/lib/store";
import { CharacterType } from "@/lib/types/character";
import { useMemo } from "react";
import { CharactersList } from "./character-list";

type CharacterContentType = {
  characters: Array<CharacterType>;
};

export const CharacterContent = (props: CharacterContentType) => {
  const { characters = [] } = props;

  const { getIsFavorite } = useGetFavorite();

  const charactersDeleted = useCharacterDeleted(
    (state) => state.charactersDeleted
  );

  const remove = useCharacterDeleted((state) => state.remove);

  const handleClickUndoDelete = () => remove();

  const { charactersAll, favoriteListResult } = useMemo(() => {
    const favoriteListResult = characters.filter(
      ({ id }) => getIsFavorite(id) && !charactersDeleted.includes(id)
    );
    const charactersAll = characters.filter(
      ({ id }) => !getIsFavorite(id) && !charactersDeleted.includes(id)
    );
    return {
      favoriteListResult,
      charactersAll,
    };
  }, [getIsFavorite, characters, charactersDeleted]);

  return (
    <>
      {!!charactersDeleted?.length && (
        <button
          className="text-tertiary-300 font-medium underline text-xs md:text-sm self-start"
          onClick={handleClickUndoDelete}
        >
          Undo delete characters
        </button>
      )}
      <CharactersList
        title=" Starred Characters"
        characters={favoriteListResult}
      />
      <CharactersList title="Characters" characters={charactersAll} />
    </>
  );
};
