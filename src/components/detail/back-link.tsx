"use client";

import { ArrowleftIcon } from "@/components/icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const BackLink = () => {
  const searchParams = useSearchParams();

  const queryString = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return params.toString();
  }, [searchParams]);

  return (
    <Link href={`/?${queryString}`} className="block md:hidden pl-4 pt-4">
      <ArrowleftIcon />
    </Link>
  );
};
