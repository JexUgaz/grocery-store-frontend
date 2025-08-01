import type { Metadata } from "next";
import { Montserrat, Fredoka } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/shared/top-bar/TopBar";
import Footer from "@/components/shared/footer/Footer";

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
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
