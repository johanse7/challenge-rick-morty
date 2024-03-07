"use client";

import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { CharactersResults } from "./characters-results";
import { Search } from "./search";

export const FilterContent = () => {
  const path = usePathname();

  return (
    <section
      className={clsx(
        "w-full md:max-w-[380px] flex h-full flex-col md:px-5 px-4 py-8 md:overflow-y-auto md:bg-gray-50 md:bg-opacity-50",
        {
          "hidden md:block": path.includes("detail"),
        }
      )}
    >
      <header className="flex flex-col gap-4 mb-8">
        <h1 className="text-2xl font-bold md:font-normal">
          Rick and Morty list
        </h1>
        <Search />
      </header>
      <ApolloProvider client={apolloClient}>
        <div className="flex flex-col gap-5">
          <CharactersResults />
        </div>
      </ApolloProvider>
    </section>
  );
};
