import { DetailCharacter, DetailSkeleton, FilterContent } from "@/components";
import {
  DetailParams,
  FilterParamsType,
  SearchParamsType,
} from "@/lib/types/params";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export default function DetailPage(
  props: SearchParamsType<FilterParamsType, DetailParams>
) {
  const { params, searchParams } = props;

  if (!params?.id) return null;

  return (
    <>
      <Link href="/">
        <ArrowLeftIcon className="block md:hidden w-28px] h-[28px] text-primary-600 mb-6 " />
      </Link>
      <div className="hidden md:block">
        <FilterContent {...searchParams} />
      </div>
      <div className="md:pl-14 w-full">
        <Suspense fallback={<DetailSkeleton />}>
          <DetailCharacter id={params.id} />
        </Suspense>
      </div>
    </>
  );
}
