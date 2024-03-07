import { BackLink, DetailCharacterContent, DetailSkeleton } from "@/components";
import {
  DetailParams,
  FilterParamsType,
  SearchParamsType,
} from "@/lib/types/params";
import { notFound } from "next/navigation";

import { Suspense } from "react";

export default function DetailPage(
  props: SearchParamsType<FilterParamsType, DetailParams>
) {
  const { params } = props;

  if (!params?.id) return notFound();

  const { id } = params;
  return (
    <div className="pl-5 md:pl-14 pt-7 w-full">
      <Suspense>
        <BackLink />
      </Suspense>
      <Suspense fallback={<DetailSkeleton />}>
        <DetailCharacterContent id={id} />
      </Suspense>
    </div>
  );
}
