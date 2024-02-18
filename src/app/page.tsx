import { FilterContent } from "@/components";
import { FilterParamsType, SearchParamsType } from "@/lib/types/params";

export default function HomePage(props: SearchParamsType<FilterParamsType>) {
  const { searchParams } = props;
  return (
    <>
      <FilterContent {...searchParams} />
      <div className="hidden md:block flex-grow">
        <h1 className="text-4xl h-screen flex items-center justify-center">
          Select a character to see its detail
        </h1>
      </div>
    </>
  );
}
