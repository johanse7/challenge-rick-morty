import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CharacterCommentType = {
  [key: string]: Array<string>;
};

export type CharacterCommentsState = {
  comments: CharacterCommentType;
};

export type ActionsCommentsType = {
  addComment: (characterId: string, comment: string) => void;
};

export const useCharacterComments = create(
  persist<CharacterCommentsState & ActionsCommentsType>(
    (set) => {
      return {
        comments: {},
        addComment: (characterId: string, comment: string) => {
          set(({ comments }) => {
            const commentsClone = structuredClone(comments);
            if (commentsClone[characterId]) {
              commentsClone[characterId].push(comment);
            } else {
              commentsClone[characterId] = [comment];
            }
            return {
              comments: commentsClone,
            };
          });
        },
      };
    },
    {
      name: "characters-comments",
    }
  )
);
