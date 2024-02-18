import { DetailCharacter, DetailSkeleton, FilterContent } from "@/components";
import { ArrowleftIcon } from "@/components/icons";
import {
  DetailParams,
  FilterParamsType,
  SearchParamsType,
} from "@/lib/types/params";

import Link from "next/link";
import { Suspense } from "react";

export default function DetailPage(
  props: SearchParamsType<FilterParamsType, DetailParams>
) {
  const { params, searchParams } = props;

  if (!params?.id) return null;

  return (
    <>
      <Link href="/" className="block md:hidden pl-4 pt-4">
        <ArrowleftIcon />
      </Link>
      <div className="hidden md:block">
        <FilterContent {...searchParams} />
      </div>
      <div className="pl-5 md:pl-14 md:pt-7 w-full">
        <Suspense fallback={<DetailSkeleton />}>
          <DetailCharacter id={params.id} />
        </Suspense>
      </div>
    </>
  );
}
