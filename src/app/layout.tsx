import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Particles from "@/components/Particles";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ display: "swap", subsets: ["latin"] });

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
      <body
        className={raleway.className + " grid h-screen max-w-screen"}
        style={{
          gridTemplateRows: "auto 1fr auto",
        }}
      >
        <div className="z-20">
          <Header />
        </div>
        {children}
        <Footer />
        <Analytics />
        <Particles />
      </body>
    </html>
  );
}
