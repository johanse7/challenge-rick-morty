import { useCallback } from "react";
import { useFavoriteCharacters } from "../store";

export const useGetFavorite = () => {
  const favoriteList = useFavoriteCharacters((state) => state.favoriteList);

  const getIsFavorite = useCallback(
    (id: string) => favoriteList.includes(id),
    [favoriteList]
  );

  return {
    getIsFavorite,
  };
};
