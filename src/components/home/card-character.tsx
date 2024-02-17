import { useFavoriteCharacters } from "@/lib/store";
import { CharacterType } from "@/lib/types/character";
import { HeartIcon } from "@heroicons/react/24/outline";
<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
=======
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
>>>>>>> c99d54d (add detail page)
import { HeartFavoriteIcon } from "../icons";

export const CardCharacter = (props: CharacterType) => {
  const { image, name, species, id } = props;

<<<<<<< HEAD
=======
  const { id: idParam } = useParams();

>>>>>>> c99d54d (add detail page)
  const favoriteList = useFavoriteCharacters((state) => state.favoriteList);
  const setFavorite = useFavoriteCharacters(
    (state) => state.setFavoriteCharacter
  );

  const isFavorite = favoriteList.includes(id);
<<<<<<< HEAD
=======
  const isSelected = idParam === id;
>>>>>>> c99d54d (add detail page)

  const handleClickSetFavorite = () => {
    setFavorite(id);
  };

  const getIcon = () => {
    return !isFavorite ? (
<<<<<<< HEAD
      <HeartIcon className="h-[24px] w-[24px] text-gray-300 group-hover:text-gray-400" />
    ) : (
      <HeartFavoriteIcon className="group-hover:rounded-full p-1 group-hover:bg-white" />
=======
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
>>>>>>> c99d54d (add detail page)
    );
  };

  return (
<<<<<<< HEAD
    <li className="group py-4 px-2 bg-white flex items-center hover:rounded-lg justify-between  hover:bg-primary-100">
=======
    <li
      className={clsx(
        `group py-4 px-2 bg-white flex items-center hover:rounded-lg justify-between  hover:bg-primary-100`,
        {
          "bg-primary-100 rounded-lg": isSelected,
        }
      )}
    >
>>>>>>> c99d54d (add detail page)
      <Link href={`/detail/${id}`} className="flex-grow-[1]">
        <div className="flex gap-4">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1 justify-center">
            <span className="text-xs md:text-sm  font-semibold">{name}</span>
            <span className="text-xs md:text-sm text-gray-500">{species}</span>
          </div>
        </div>
      </Link>
      <button onClick={handleClickSetFavorite}>{getIcon()}</button>
    </li>
  );
};
