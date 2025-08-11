import type { Metadata } from "next";
import { Montserrat, Fredoka } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/shared/top-bar/TopBar";
import { Toaster } from "sonner";

export const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grocery Store",
  description:
    "Grocery Store offers fresh groceries, fruits, and cleaning products. Shop online with confidence and enjoy fast delivery and great deals every day.",
  keywords: [
    "Grocery store",
    "Online grocery",
    "Fresh fruits",
    "Cleaning products",
    "Supermarket Peru",
    "Buy groceries online",
  ],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      {
        url: "/favicon/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${fredoka.variable} antialiased`}
      >
        <Toaster position="bottom-right" richColors closeButton />
        <TopBar />
        {children}
      </body>
    </html>
  );
}
