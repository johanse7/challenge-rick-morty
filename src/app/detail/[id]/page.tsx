import { DetailCharacter, DetailSkeleton } from "@/components";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Link href="/">
        <ArrowLeftIcon className="block md:hidden w-28px] h-[28px] text-primary-600 mb-6 " />
      </Link>
      <Suspense fallback={<DetailSkeleton />}>
        <DetailCharacter id={params.id} />
      </Suspense>
    </>
  );
}
