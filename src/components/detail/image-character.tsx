"use client";

import { useGetFavorite } from "@/lib/hooks";
import Image from "next/image";
import { HeartFavoriteIcon } from "../icons";

export type ImageCharacterType = {
  id: string;
  image: string;
  name: string;
};

export const ImageCharacter = (props: ImageCharacterType) => {
  const { id, image, name } = props;

  const { getIsFavorite } = useGetFavorite();

  const isFavorite = getIsFavorite(id);

  return (
    <div className="relative w-[75px] h-[75px]">
      <Image
        width={75}
        height={75}
        alt={`character ${name}`}
        src={image}
        className="rounded-full"
      />
      {isFavorite && (
        <HeartFavoriteIcon className="absolute right-0 top-[60%] p-1 rounded-full bg-white" />
      )}
    </div>
  );
};
