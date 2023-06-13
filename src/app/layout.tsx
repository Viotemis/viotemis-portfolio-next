import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Bowang Lan",
  description:
    "Bowang Lan is a software engineer based in Seattle, WA and a student at University of Washington.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col items-stretch"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
