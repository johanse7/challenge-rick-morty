import { FilterContent } from "@/components";
import type { Metadata } from "next";
import { Signika } from "next/font/google";
import { Suspense } from "react";
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
        <div className="flex flex-col w-screen md:flex-row md:overflow-y-auto h-dvh">
          <Suspense>
            <FilterContent />
          </Suspense>
          {children}
        </div>
      </body>
    </html>
  );
}
