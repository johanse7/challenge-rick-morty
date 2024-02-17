<<<<<<< HEAD
import { CharacterContentSkeleton } from "@/components/";
=======
>>>>>>> c99d54d (add detail page)
import type { Metadata } from "next";
import { Signika } from "next/font/google";
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
        {/* <div className="w-full md:w-[350px]">
            <Suspense fallback={<CharacterContentSkeleton />}>
              <FilterContent />
            </Suspense>
<<<<<<< HEAD
          </div>
          <div className="flex-grow p-6 md:py-4 md:overflow-y-auto md:px-16">
            {children}
          </div>
=======
          </div> */}

        <div className="flex flex-col md:flex-row md:overflow-hidden px-4 py-8  md:overflow-y-auto">
          {children}
>>>>>>> c99d54d (add detail page)
        </div>
      </body>
    </html>
  );
}
