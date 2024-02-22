"use client";

import { CharacterDetailType } from "@/lib/types/character";
import { CommentForm } from "../detail/comment-form";
import { CommentList } from "../detail/commentList";
import { ImageCharacter } from "../detail/image-character";

import { useCharacterDeleted } from "@/lib/store";
import { NotFoundResults } from "../not-found-results";

export const DetailInfo = (props: CharacterDetailType) => {
  const { gender, image, name, species, status, id } = props;

  const charactersDeleted = useCharacterDeleted(
    (state) => state.charactersDeleted
  );

  if (charactersDeleted.includes(id)) return <NotFoundResults />;

  return (
    <section className="flex flex-col gap-5 pb-2">
      <header className="flex flex-col gap-2">
        <ImageCharacter id={id} image={image} name={name} />
        <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>
      </header>
      <ul role="list" className="divide-y divide-slate-200">
        <CardDetail label="Specie" value={species} />
        <CardDetail label="Status" value={status} />
        <CardDetail label="Gender" value={gender} />
      </ul>
      <div className="flex flex-col gap-8 pr-4 md:w-[450px] ">
        <CommentList />
        <CommentForm />
      </div>
    </section>
  );
};

type CardDetailTpe = {
  label: string;
  value: string;
};

const CardDetail = ({ label, value }: CardDetailTpe) => (
  <li className="py-3 flex flex-col">
    <span className="font-semibold text-base">{label}</span>
    <span className="font-medium text-base text-gray-500">{value}</span>
  </li>
);
