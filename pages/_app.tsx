import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // loading
  useEffect(() => {
    setLoaded(true);
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setLoaded(false);
      setLoading(true);
    };
    const handleComplete = () => {
      setLoaded(true);
      ScrollTrigger.refresh();
      setTimeout(() => {
        setLoading(false);
      }, 1000);
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
    <>
      {loading && (
        // <div className="w-[100vw] h-[100vh] absolute z-50">
        <div className="absolute top-[20vh] left-[calc(50%-120px)] w-28 h-28 origin-bottom-right opacity-70 animate-[spin_1.3s_ease-in-out_infinite] z-50">
          <Image
            src="/images/loader.svg"
            alt="loading"
            layout="fill"
            priority
          />
        </div>
        // </div>
      )}
      <div
        className={`${
          !loaded
            ? "opacity-0 duration-[0s]"
            : "opacity-100 delay-500 duration-[800ms]"
        } transition  z-10 relative w-full`}
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
    </>
  );
}

export default MyApp;
