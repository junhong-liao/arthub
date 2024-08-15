import type { Metadata } from "next";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthub web app",
  description: "arthub_beta_1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header/>
          {children}
        </Provider>
        </body>
    </html>
  );
}
