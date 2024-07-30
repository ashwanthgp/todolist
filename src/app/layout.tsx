import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To Do List",
  description: "Enter your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <footer className="flex items-center justify-center w-full py-4 bg-gray-800 text-white fixed bottom-0">
          &copy;{new Date().getFullYear()} For educational purposes only </footer>
      </body>
    </html>
  );
}
