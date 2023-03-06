import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/search.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
