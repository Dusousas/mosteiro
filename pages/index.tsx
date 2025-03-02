import { Geist, Geist_Mono } from "next/font/google";
import Main from "@/components/Main";
import About from "@/components/About";
import Missa from "@/components/Missa";
import OurMission from "@/components/OurMission";
import Slides from "@/components/Slides";
import Calander from "@/components/Calander";
import Contact from "@/components/Contact";
import Capela from "@/components/Capela";

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
      <Slides />
      {/* <Calander /> */}
      <Capela />
      <Contact />
    </>
  );
}
