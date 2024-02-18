import { ArrowLeftIcon as ArrowLeftOutlineIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

type IconType = {
  className?: String;
};
export const HeartFavoriteIcon = ({ className }: IconType) => {
  return (
    <HeartIcon
      className={clsx("h-[30px] w-[30px]  text-secondary-600", className)}
    />
  );
};
export const ArrowleftIcon = ({ className }: IconType) => {
  return (
    <ArrowLeftOutlineIcon
      className={clsx("w-[28px]  text-primary-600 mb-6", className)}
    />
  );
};
