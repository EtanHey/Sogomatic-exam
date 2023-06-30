import { LayoutProps } from "@/types";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sogomatic exam",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scrollbar-none h-screen overflow-hidden bg-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
