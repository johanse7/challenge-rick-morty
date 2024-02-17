import { CharacterContentSkeleton } from "@/components/skeletons";
import type { Metadata } from "next";
import { Signika } from "next/font/google";
import { Suspense } from "react";
import { FilterContent } from "../components";
import "./globals.css";

const signika = Signika({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Frontend Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <div className="flex flex-col md:flex-row md:overflow-hidden">
          <div className="w-full md:w-[350px]">
            <Suspense fallback={<CharacterContentSkeleton />}>
              <FilterContent />
            </Suspense>
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
