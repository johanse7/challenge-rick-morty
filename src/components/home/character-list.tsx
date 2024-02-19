"use client";

import { CharacterType } from "@/lib/types/character";
import { SortType, customSort } from "@/lib/utils";
import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { CardCharacter } from "./card-character";

type CharactersListType = {
  characters: Array<CharacterType>;
  title: string;
};

export const CharactersList = (props: CharactersListType) => {
  const { characters = [], title } = props;

  const [sortType, setSortype] = useState<SortType>("asc");

  const handleClickSort = () =>
    setSortype((value) => (value === "asc" ? "desc" : "asc"));

  const sortedCharacters = characters.sort(customSort("name", sortType));

  const renderSortButton = () => {
    if (characters.length <= 1) return null;

    return (
      <button title="Sort characters" onClick={handleClickSort}>
        {sortType === "asc" ? (
          <BarsArrowUpIcon className="h-[24px] w-[24px] text-primary-600" />
        ) : (
          <BarsArrowDownIcon className="h-[24px] w-[24px] text-primary-600" />
        )}
      </button>
    );
  };

  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-gray-400 font-bold text-sm">
          {title} ({characters.length})
        </h3>
        {renderSortButton()}
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-1 divide-y divide-slate-200"
      >
        {sortedCharacters.map((character) => (
          <CardCharacter key={character.id} {...character} />
        ))}
      </ul>
    </>
  );
};
