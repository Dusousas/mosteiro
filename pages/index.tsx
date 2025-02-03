import { Geist, Geist_Mono } from "next/font/google";
import Main from "@/components/Main";
import About from "@/components/About";
import Missa from "@/components/Missa";
import OurMission from "@/components/OurMission";
import Services from "@/components/Services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Missa />
      <OurMission />
      <Services />
    </>
  );
}
