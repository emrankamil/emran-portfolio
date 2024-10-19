import type { Metadata } from "next";
// import { Nunito } from 'next/font/google'
import "./globals.css";

import { Poppins } from "next/font/google";

// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Emran Kamil- Full-Stack developer Online Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-zinc-950`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
