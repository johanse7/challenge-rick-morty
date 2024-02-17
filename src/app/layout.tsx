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
        <div className="flex flex-col md:flex-row md:overflow-hidden px-4 py-8 md:overflow-y-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
