import { getClient } from "../clientgql";
import { GET_CHARACTERS } from "../queries";
import { CharacterQuery } from "../types/character";

export const getCharacters = async () => {
  try {
    const { data } = await getClient().query<CharacterQuery>({
      query: GET_CHARACTERS,
    });

    return data?.characters;
  } catch (error) {
    console.error(error);
  }
};
