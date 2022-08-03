import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
  const router = useRouter();

  const { t } = useTranslation("common");

  const [opened, setOpened] = useState<boolean>(false);
  const [hide, setHide] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const navLinks: string[] = [
    "works",
    "expertise",
    "culture",
    "team",
    "news",
    "contact",
  ];

  useEffect(() => {
    const html = document.documentElement;
    const header = document.querySelector("header");

    if (opened) {
      if (header)
        header.style.width =
          window.innerWidth -
          (window.innerWidth - document.documentElement.clientWidth) +
          "px";
      html.style.overflowY = "hidden";
    } else {
      if (header) header.style.width = "100%";
      html.style.overflowY = "auto";
    }
  }, [opened]);

  //scroll to top cuz gsap recalculates scroll start and end values on resize and the current position of header with position:fixed is taken as start and end values.
  // useEffect(() => {
  //   const top = () => {
  //     console.log(window.innerWidth);

  //     gsap.to(window, {
  //       scrollTo: 0,
  //       onComplete: () => {
  //         ScrollTrigger.refresh();
  //       },
  //     });
  //   };
  //   window.addEventListener("resize", top);
  //   () => {
  //     window.removeEventListener("resize", top);
  //   };
  // }, []);

  useEffect(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center start",
        onEnter: () => {
          setHide(true);
        },
        onLeaveBack: () => {
          setHide(false);
        },
      },
    });
  }, []);

  return (
    <header
      className={`fixed w-full z-50 ${
        opened ? "bg-def-white h-full" : "bg-transparent"
      }`}
    >
      <nav
        ref={containerRef}
        className={`flex text-center items-center justify-between pt-2 pb-5 px-4 h-[80px] md:pt-12 text-[1.7rem] transition-all duration-[330ms] delay-500 ease-out z-50 ${
          !hide && "md:pt-12 md:h-[130px]"
        }`}
      >
        <button
          type="button"
          aria-label={!opened ? "open menu" : "close menu"}
          className={`w-[50px] h-[50px] cursor-pointer rounded-full bg-def-white shadow-def hover:shadow-hov focus:shadow-none menu-transition ${
            opened
              ? "before:content-['✕'] mt-2 md:mt-0 md:w-[50px] md:h-[50px]"
              : "before:content-['☰'] md:before:content-[''] mt-0 md:w-[150px] md:h-[60px]"
          } ${hide && "before:!content-['☰'] !w-[50px] !h-[50px]"}`}
          onClick={() => {
            setOpened((prev) => !prev);
          }}
        >
          <span
            className={`hidden ${opened || hide ? "md:hidden" : "md:inline"}`}
          >
            Menu
          </span>
        </button>
        <Link href="/">
          <a
            aria-label="sonderegger"
            className={`nav absolute left-1/2 -translate-x-1/2 w-[186px] md:w-auto mt-2 md:mt-0 transition duration-[330ms] ease-out ${
              hide && !opened && "opacity-0"
            }`}
            onClick={() => {
              setOpened(false);
            }}
          >
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="288.346"
              height="27.355"
              viewBox="0 0 288.346 27.355"
            >
              <path
                d="M60.372,75.985c-6.765,0-10.9-3.253-10.9-8.169h5.36c0,2.181,1.811,3.734,5.545,3.734,2.957,0,4.954-1.331,4.954-3.438,0-1.848-1.109-2.736-3.7-3.216l-4.177-.813c-4.768-.887-7.393-3.438-7.393-7.431,0-4.509,3.734-7.984,10.092-7.984,5.212,0,10.24,2.218,10.24,8.1H65.178c0-2.662-2.181-3.771-5.1-3.771-2.81,0-4.584,1.256-4.584,3.179,0,1.737,1.072,2.7,3.919,3.253l4.214.776c4.916.961,7.208,3.586,7.208,7.763C70.834,73.1,66.25,75.985,60.372,75.985Z"
                transform="translate(-49.467 -48.667)"
                fill="#363636"
              ></path>
              <path
                d="M90.207,62.382c0-8.058,5.249-13.714,12.975-13.714s12.938,5.656,12.938,13.714c0,8.022-5.212,13.641-12.938,13.641S90.207,70.4,90.207,62.382Zm20.258,0c0-5.323-2.662-8.724-7.283-8.724-4.658,0-7.357,3.4-7.357,8.724s2.7,8.651,7.357,8.651C107.8,71.032,110.465,67.668,110.465,62.382Z"
                transform="translate(-65.106 -48.667)"
                fill="#363636"
              ></path>
              <path
                d="M140.247,49.267h5.323l11.2,18.04V49.267h5.212V75.883H156.7L145.5,58.25V75.883h-5.249Z"
                transform="translate(-84.315 -48.897)"
                fill="#363636"
              ></path>
              <path
                d="M185.366,75.883V49.267h9.722c8.318,0,13.382,5.471,13.382,13.308,0,7.948-5.064,13.308-13.382,13.308Zm5.286-4.657h4.14c5.028,0,8.132-3.364,8.132-8.8s-3.1-8.5-8.132-8.5h-4.14Z"
                transform="translate(-101.635 -48.897)"
                fill="#363636"
              ></path>
              <path
                d="M249.44,71.225v4.657H230.846V49.267H249v4.658H236.132v6.321h9.759v4.547h-9.759v6.432Z"
                transform="translate(-119.092 -48.897)"
                fill="#363636"
              ></path>
              <path
                d="M268.825,49.267H280.8c5.249,0,9.168,3.327,9.168,8.687,0,4.14-2.107,7.282-5.4,8.28l4.917,9.648h-5.952L279.1,66.937h-5.028v8.946h-5.249Zm11.127,13.2c2.92,0,4.473-1.553,4.473-4.325s-1.553-4.214-4.473-4.214h-5.877v8.539Z"
                transform="translate(-133.672 -48.897)"
                fill="#363636"
              ></path>
              <path
                d="M329.9,71.225v4.657H311.3V49.267h18.151v4.658H316.591v6.321h9.759v4.547h-9.759v6.432Z"
                transform="translate(-149.979 -48.897)"
                fill="#363636"
              ></path>
              <path
                d="M371.252,60.385V75.652h-4.436l-.444-3.216c-1.812,2.291-4.658,3.585-8.318,3.585-7.1,0-12.31-4.99-12.31-13.16,0-8.391,5.249-14.2,13.234-14.2,6.358,0,10.979,3.475,12.125,8.946h-5.878c-1.035-2.846-3.474-4.1-6.321-4.1-4.62,0-7.652,3.327-7.652,8.872,0,5.508,2.994,8.835,7.5,8.835,2.994,0,6.95-1.59,7.209-6.1l.333.037V64.71h-8.207V60.385Z"
                transform="translate(-163.197 -48.667)"
                fill="#363636"
              ></path>
              <path
                d="M420.032,60.385V75.652H415.6l-.444-3.216c-1.811,2.291-4.657,3.585-8.318,3.585-7.1,0-12.309-4.99-12.309-13.16,0-8.391,5.249-14.2,13.233-14.2,6.358,0,10.979,3.475,12.125,8.946h-5.878c-1.035-2.846-3.475-4.1-6.321-4.1-4.62,0-7.652,3.327-7.652,8.872,0,5.508,2.994,8.835,7.5,8.835,2.994,0,6.949-1.59,7.208-6.1l.333.037V64.71h-8.206V60.385Z"
                transform="translate(-181.924 -48.667)"
                fill="#363636"
              ></path>
              <path
                d="M463.757,71.225v4.657H445.163V49.267h18.151v4.658H450.449v6.321h9.759v4.547h-9.759v6.432Z"
                transform="translate(-201.362 -48.897)"
                fill="#363636"
              ></path>
              <path
                d="M483.143,49.267H495.12c5.249,0,9.168,3.327,9.168,8.687,0,4.14-2.107,7.282-5.4,8.28l4.917,9.648h-5.952l-4.436-8.946h-5.028v8.946h-5.249Zm11.127,13.2c2.921,0,4.473-1.553,4.473-4.325s-1.552-4.214-4.473-4.214h-5.878v8.539Z"
                transform="translate(-215.942 -48.897)"
                fill="#363636"
              ></path>
            </svg>
          </a>
        </Link>
        <div
          className={`nav flex items-center select-none gap-4 absolute md:static bottom-[10%] left-0 p-4 md:p-0 md:flex transition duration-[330ms] ease-out ${
            hide && "opacity-0"
          } ${opened ? "flex" : "hidden"}`}
        >
          <Link href={router.pathname} locale="de">
            <span
              className="bg-def-white rounded-full block w-16 p-3 shadow-def hover:shadow-hov transition duration-500 ease-out cursor-pointer"
              onClick={() => {
                setOpened(false);
              }}
            >
              de
            </span>
          </Link>
          <Link href={router.pathname} locale="fr">
            <span
              className="bg-def-white rounded-full block w-16 p-3 shadow-def hover:shadow-hov transition duration-500 ease-out cursor-pointer"
              onClick={() => {
                setOpened(false);
              }}
            >
              fr
            </span>
          </Link>
          <Link href={router.pathname} locale="en">
            <span
              className="bg-def-white rounded-full block w-16 p-3 shadow-def hover:shadow-hov transition duration-500 ease-out cursor-pointer"
              onClick={() => {
                setOpened(false);
              }}
            >
              en
            </span>
          </Link>
        </div>
      </nav>
      <ul
        className={`flex-col flex-wrap gap-1 my-12 px-6 md:flex-row md:justify-center md:content-center md:absolute md:top-1/2 md:-translate-y-3/4 md:left-1/2 md:-translate-x-1/2 max-w-screen-xl w-full ${
          opened ? "flex  z-50" : "hidden  z-0"
        }`}
      >
        {navLinks.map((el, i) => (
          <li key={i}>
            <Link href={"/" + el}>
              <a
                className={`block pr-8 md:py-4 md:px-6 text-5xl lg:text-[5rem] hover:text-[#9e8959] ${
                  router.route.includes(el) ? "text-black" : "text-current"
                } `}
                onClick={(e) => {
                  setOpened(false);
                  if (el === "contact" && window) {
                    e.preventDefault();
                    gsap.to(window, {
                      duration: 1,
                      ease: "power4.inOut",
                      scrollTo: { y: "footer", offsetY: 120 },
                    });
                  }
                }}
              >
                {t("header." + el)}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
