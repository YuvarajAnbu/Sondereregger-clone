import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { createContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Head from "next/head";
import { log } from "console";

export const LoadingContext = createContext<{
  loading: boolean;
  setLoading: (loading: boolean) => void;
}>({
  loading: true,
  setLoading: (loading: boolean) => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false); //for fading in the page

  // loading on initial load
  //cant use loading = true condition because loading sets to false so fast and timeout clears before the given time
  useEffect(() => {
    setLoaded(false);
    let timeout = setTimeout(() => {
      setLoaded(true);
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
      //reset loaded whenever loading on different route
      setLoaded(false);
      setTimeout(() => {
        setLoaded(true);
      }, 800);
    };
    const handleComplete = () => {
      ScrollTrigger.refresh();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {/* <div className="w-[100vw] h-[100vh] absolute z-50"> */}
      <div
        className={`${
          loading || !loaded ? "opacity-70" : "opacity-0"
        } absolute top-[20vh] left-[calc(50%-120px)] w-28 h-28 origin-bottom-right transition-opacity duration-[400ms] animate-[spin_1.3s_ease-in-out_infinite] z-50`}
      >
        <Image src="/images/loader.svg" alt="" layout="fill" />
      </div>
      {/* </div> */}
      {/* to fadein the page after loading ends */}
      <div
        className={`${
          loading && !loaded
            ? "opacity-0 duration-[0s]"
            : "opacity-100 delay-500 duration-[800ms]"
        } transition-opacity z-10 relative w-full`}
      >
        <Head>
          <title>
            {router.route[1]
              ? router.route[1].toUpperCase() + router.route.substring(2)
              : ""}{" "}
            | Sonderegger
          </title>
        </Head>
        <Header />
        <div className="pt-[80px] md:pt-[200px] pb-[5vh]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </LoadingContext.Provider>
  );
}

export default MyApp;
