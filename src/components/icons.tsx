import { HeartIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export const HeartFavoriteIcon = ({ className }: { className?: String }) => {
  return (
    <HeartIcon
      className={clsx("h-[30px] w-[30px]  text-secondary-600", className)}
    />
  );
};
