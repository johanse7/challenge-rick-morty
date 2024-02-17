import { DetailCharacter, DetailSkeleton } from "@/components";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from "react";

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
<<<<<<< HEAD
    <main className="flex flex-col gap-6">
      <Link href="/">
        <ArrowLeftIcon className="block md:hidden w-28px] h-[28px] text-primary-600 " />
=======
    <>
      <Link href="/">
        <ArrowLeftIcon className="block md:hidden w-28px] h-[28px] text-primary-600 mb-6 " />
>>>>>>> c99d54d (add detail page)
      </Link>
      <Suspense fallback={<DetailSkeleton />}>
        <DetailCharacter id={params.id} />
      </Suspense>
<<<<<<< HEAD
    </main>
=======
    </>
>>>>>>> c99d54d (add detail page)
  );
}
