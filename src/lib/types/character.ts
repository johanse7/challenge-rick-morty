export type CharactersQuery = {
  characters: {
    info: {
      count: number;
      pages: number;
    };
    results: Array<CharacterType>;
  };
};

export type CharacterQuery = {
  character: CharacterDetailType;
};

export type CharacterType = {
  id: string;
  name: string;
  image: string;
  species: string;
};

export type CharacterDetailType = CharacterType & {
  status: string;
  gender: string;
};

export type FilterType = "status" | "species" | "gender" | "name";
export type OptionType = {
  label: string;
  value: string;
};
