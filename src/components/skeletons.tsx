const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export const CharacterContentSkeleton = () => {
  return (
    <div className={`${shimmer} relative flex h-full flex-col  md:w-[320px]`}>
      <div className="grid grid-cols-1 gap-1">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="w-[40%] rounded-md bg-gray-200 mb-5 h-5 my-4" />
      <div className="grid grid-cols-1 gap-1">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export const CardSkeleton = () => {
  return (
    <article
      className={`${shimmer}  justify-between relative overflow-hidden rounded-lg  py-4 px-2 bg-gray-100 p-2 shadow-sm flex items-center `}
    >
      <div className="flex gap-4">
        <div className="h-[32px] w-[32px] rounded-full bg-gray-200" />
        <div className="flex flex-col gap-1">
          <div className="h-4 w-[100px] rounded-md bg-gray-200" />
          <div className="h-5 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="h-[24px] w-[24px] rounded-full bg-gray-200" />
    </article>
  );
};

export const DetailSkeleton = () => {
  return (
    <div className={`${shimmer} flex h-full flex-col pt-8 px-4`}>
      <div className="flex flex-col gap-2">
        <div className="h-[75px] w-[75px] rounded-full bg-gray-200" />
        <div className="h-5 w-[60%] rounded-md bg-gray-200" />
      </div>
      <ul className="divide-y divide-slate-200">
        <CardDetailSkelton />
        <CardDetailSkelton />
        <CardDetailSkelton />
      </ul>
    </div>
  );
};

export const CardDetailSkelton = () => (
  <li className={` ${shimmer}  py-3 flex flex-col gap-2 `}>
    <div className="h-5 w-14 rounded-md bg-gray-200" />
    <div className="h-5 w-14 rounded-md bg-gray-200 " />
  </li>
);
