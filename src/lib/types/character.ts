export type CharactersQuery = {
  characters: {
    info: {
      count: 826;
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
