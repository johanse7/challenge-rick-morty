import { useGetFavorite } from "@/lib/hooks";
import { useCharacterDeleted, useFavoriteCharacters } from "@/lib/store";
import { CharacterType } from "@/lib/types/character";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { HeartFavoriteIcon } from "../icons";

export const CardCharacter = (props: CharacterType) => {
  const { image, name, species, id } = props;

  const { id: idParam } = useParams();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const { getIsFavorite } = useGetFavorite();
  const deleteCharacter = useCharacterDeleted((state) => state.addCharacter);

  const setFavorite = useFavoriteCharacters(
    (state) => state.setFavoriteCharacter
  );

  const isFavorite = getIsFavorite(id);

  const isSelected = idParam === id;

  const handleClickSetFavorite = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    setFavorite(id);
  };

  const handleClickDelete = (
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    ev.preventDefault();
    deleteCharacter(id);
  };

  const getIcon = () => {
    return !isFavorite ? (
      <HeartIcon
        className={clsx(
          "h-[24px] w-[24px] text-gray-300 group-hover:text-gray-400",
          {
            "text-gray-400": isSelected,
          }
        )}
      />
    ) : (
      <HeartFavoriteIcon
        className={clsx("group-hover:rounded-full p-1 group-hover:bg-white", {
          "bg-white rounded-full": isSelected,
        })}
      />
    );
  };

  return (
    <li
      className={clsx("group hover:rounded-lg hover:bg-primary-100", {
        "bg-primary-100 rounded-lg": isSelected,
      })}
    >
      <Link
        href={`/detail/${id}?${params.toString()}`}
        className="flex justify-between py-3 px-2"
        scroll={false}
        
        
      >
        <div className=" flex items-start flex-col gap-[2px]">
          <button
            className="self-start md:invisible md:group-hover:visible"
            title="Delete"
            onClick={handleClickDelete}
          >
            <TrashIcon className="h-[15px] w-[15px] text-primary-700 " />
          </button>
          <div className="flex gap-4">
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1 justify-center">
              <span className="text-base md:text-sm  font-semibold">
                {name}
              </span>
              <span className="text-base md:text-sm text-gray-500">
                {species}
              </span>
            </div>
          </div>
        </div>
        <button onClick={handleClickSetFavorite}>{getIcon()}</button>
      </Link>
    </li>
  );
};
