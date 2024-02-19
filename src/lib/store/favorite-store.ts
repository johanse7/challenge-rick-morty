import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FavoriteCharactersType = {
  favoriteList: Array<string>;
};

export type ActionsType = {
  setFavoriteCharacter: (id: string) => void;
};

export const useFavoriteCharacters = create(
  persist<FavoriteCharactersType & ActionsType>(
    (set) => ({
      favoriteList: [],
      setFavoriteCharacter: (id: string) => {
        set(({ favoriteList }) => {
          if (favoriteList.includes(id)) {
            return {
              favoriteList: favoriteList.filter(
                (favoriteId) => favoriteId !== id
              ),
            };
          }
          return {
            favoriteList: favoriteList.concat(id),
          };
        });
      },
    }),
    {
      name: "favorite-characters",
    }
  )
);
