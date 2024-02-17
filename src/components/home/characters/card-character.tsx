import { useFavoriteCharacters } from "@/lib/store";
import { CharacterType } from "@/lib/types/character";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";

export const CardCharacter = (props: CharacterType) => {
  const { image, name, species, id } = props;

  const favoriteList = useFavoriteCharacters((state) => state.favoriteList);
  const setFavorite = useFavoriteCharacters(
    (state) => state.setFavoriteCharacter
  );

  const isFavorite = favoriteList.includes(id);

  const handleClickSetFavorite = () => {
    setFavorite(id);
  };

  return (
    <li className="group py-4 px-2  bg-white flex items-center hover:rounded-lg  justify-between  hover:bg-primary-100">
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
      <button onClick={handleClickSetFavorite}>
        <HeartIcon
          className={clsx(
            "h-[24px] w-[24px] text-gray-300 group-hover:text-gray-400 ",
            {
              hidden: isFavorite,
            }
          )}
        />
        <HeartIconSolid
          className={clsx(
            "h-[30px] w-[30px] group-hover:rounded-full p-1 group-hover:bg-white text-secondary-600",
            {
              hidden: !isFavorite,
            }
          )}
        />
      </button>
    </li>
  );
};
