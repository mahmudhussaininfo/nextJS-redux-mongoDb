"use client";
import { Provider } from "react-redux";
import Store from "@/store/store";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={Store}>{children}</Provider>
      </body>
    </html>
  );
}
