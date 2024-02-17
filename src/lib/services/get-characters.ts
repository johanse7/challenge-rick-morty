import { getClient } from "../clientgql";
import { GET_CHARACTERS, GET_CHARACTERS_BY_ID } from "../queries";
import { CharacterQuery, CharactersQuery } from "../types/character";

export const getCharacters = async () => {
  try {
    const { data } = await getClient().query<CharactersQuery>({
      query: GET_CHARACTERS,
    });

    return data?.characters;
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
      // variables: {
      //   id,
      // },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
