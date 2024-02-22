import { FilterParamsType } from "@/lib/types/params";
import { getClient } from "../clientgql";
import {
  GET_CHARACTERS,
  GET_CHARACTERS_BY_ID,
  GET_TOTAL_PAGES,
} from "../queries";
import { CharacterQuery, CharactersQuery } from "../types/character";

export const getCharacters = async (
  filter: FilterParamsType
): Promise<CharactersQuery | undefined> => {
  try {
    const { data } = await getClient().query<CharactersQuery>({
      query: GET_CHARACTERS(filter),
    });

    return { ...data };
  } catch (error) {
    console.error(error);
  }
};

export const getCharactersById = async (
  id: string
): Promise<CharacterQuery | undefined> => {
  try {
    const { data } = await getClient().query<CharacterQuery>({
      query: GET_CHARACTERS_BY_ID(id),
      variables: {
        id,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getTotalPages = async (
  filter: FilterParamsType
): Promise<number> => {
  try {
    const { data } = await getClient().query<CharactersQuery>({
      query: GET_TOTAL_PAGES(filter),
    });

    return data?.characters?.info?.pages ?? 0;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
