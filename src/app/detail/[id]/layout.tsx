import { CharacterContentSkeleton, FilterContent } from "@/components";
import { Suspense } from "react";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden md:block">
        <Suspense fallback={<CharacterContentSkeleton />}>
          <FilterContent />
        </Suspense>
      </div>
      <div className="md:pl-14 w-full">{children}</div>
    </>
  );
}
