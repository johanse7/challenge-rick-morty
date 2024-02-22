import {
  BackLink,
  DetailCharacterContent,
  DetailSkeleton,
  FilterContent,
} from "@/components";
import {
  DetailParams,
  FilterParamsType,
  SearchParamsType,
} from "@/lib/types/params";

import { Suspense } from "react";

export default function DetailPage(
  props: SearchParamsType<FilterParamsType, DetailParams>
) {
  const { params, searchParams } = props;

  if (!params?.id) return null;

  const { id } = params;
  return (
    <>
      <BackLink />
      <div className="hidden md:block">
        <FilterContent {...searchParams} />
      </div>
      <Suspense fallback={<DetailSkeleton />}>
        <div className="pl-5 md:pl-14 md:pt-7 w-full">
          <DetailCharacterContent id={id} />
        </div>
      </Suspense>
    </>
  );
}
