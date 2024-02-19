import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CharacterDeletedState = {
  charactersDeleted: Array<string>;
};

export type ActionsCharacterDeleteType = {
  addCharacter: (id: string) => void;
  remove: () => void;
};

export const useCharacterDeleted = create(
  persist<CharacterDeletedState & ActionsCharacterDeleteType>(
    (set) => {
      return {
        charactersDeleted: [],
        addCharacter: (id: string) => {
          set(({ charactersDeleted }) => ({
            charactersDeleted: charactersDeleted.concat(id),
          }));
        },
        remove: () => {
          set(() => ({ charactersDeleted: [] }));
        },
      };
    },
    {
      name: "characters-delete",
    }
  )
);
