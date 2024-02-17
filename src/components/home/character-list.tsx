import { CharacterType } from "@/lib/types/character";
import { CardCharacter } from "./card-character";

type CharactersListType = {
  characters: Array<CharacterType>;
};

export const CharactersList = (props: CharactersListType) => {
  const { characters = [] } = props;
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-1 divide-y divide-slate-200"
    >
      {characters.map((character) => (
        <CardCharacter key={character.id} {...character} />
      ))}
    </ul>
  );
};
