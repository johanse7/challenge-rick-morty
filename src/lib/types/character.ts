export type CharacterQuery = {
  characters: {
    info: {
      count: 826;
    };
    results: Array<CharacterType>;
  };
}

export type CharacterType = {
  id: string;
  name: string;
  image: string;
  species: string;
}
