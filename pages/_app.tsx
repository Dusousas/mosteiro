import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/subc/Header";
import Footer from "@/components/subc/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}