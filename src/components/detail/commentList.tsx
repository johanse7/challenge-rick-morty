"use client";

import { useCharacterComments } from "@/lib/store/comments-store";
import { DetailParams } from "@/lib/types/params";
import { useParams } from "next/navigation";

export const CommentList = () => {
  const { id } = useParams<DetailParams>();

  const characterComments = useCharacterComments((state) => state.comments);

  const comments = characterComments[id];

  if (!comments?.length) return null;

  return (
    <div className="md:max-h-64 h-full md:overflow-y-auto">
      <h2 className="text-base md:text-lg  font-semibold">Comments</h2>
      <ul
        role="list"
        className="grid grid-cols-1 gap-1 divide-y divide-slate-200"
      >
        {comments.map((comment, index) => (
          <li className="p-4" key={`${comment}-comment-${index}`}>
            <p className="text-gray-500 text-sm md:text-base">{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
