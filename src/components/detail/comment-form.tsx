"use client";

import { useCharacterComments } from "@/lib/store";
import { DetailParams } from "@/lib/types/params";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../button";

const CommentFormSchema = z.object({
  comment: z.string().min(1),
});

type CommentFormType = z.infer<typeof CommentFormSchema>;

export const CommentForm = () => {
  const { register, handleSubmit, formState, reset } = useForm<CommentFormType>(
    {
      resolver: zodResolver(CommentFormSchema),
      mode: "onChange",
    }
  );

  const { id } = useParams<DetailParams>();

  const addComment = useCharacterComments((state) => state.addComment);

  const onSubmit: SubmitHandler<CommentFormType> = ({ comment }) => {
    addComment(id, comment);
    reset();
  };

  return (
    <form
      className="flex gap-2 flex-col items-end"
      onSubmit={handleSubmit(onSubmit)}
    >
      <textarea
        id="comment"
        placeholder="Write a comment..."
        className="w-full bg-gray-100 rounded border border-gray-300 leading-normal resize-none h-20 py-2 px-3 font-medium placeholder:text-gray-500 focus:outline-none focus:bg-white"
        {...register("comment")}
      />

      <Button
        type="submit"
        disabled={!formState.isValid}
        className="gap-2 group "
      >
        <span>Save</span>
        <PaperAirplaneIcon className="h-[20px] w-[20px] text-tertiary-300 group-hover:text-white" />
      </Button>
    </form>
  );
};
