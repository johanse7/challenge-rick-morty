import { CharacterContentSkeleton, FilterContent } from "@/components";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<CharacterContentSkeleton />}>
        <FilterContent />
      </Suspense>

      <div className="hidden md:block flex-grow ">
        <h1 className="text-5xl h-screen flex items-center justify-center">
          Select a character to see its detail
        </h1>
      </div>
    </>
  );
}
