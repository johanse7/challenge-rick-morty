import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useGetSearchParams = () => {
  const searchParams = useSearchParams();

  const params = useMemo(() => {
    const paramsResult = new URLSearchParams(searchParams);
    return Object.fromEntries(paramsResult);
  }, [searchParams]);

  return params;
};
