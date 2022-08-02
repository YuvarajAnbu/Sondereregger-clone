import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import useTranslation from "next-translate/useTranslation";
import FadeIn from "components/animations/FadeIn";

gsap.registerPlugin(ScrollTrigger);

const Culture = () => {
  const { t } = useTranslation("home");

  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        scale: 6,
      },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 66%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="pt-12 md:pt-40 pb-8 px-[15px] md:px-[30px] max-w-[1440px] mx-auto">
      <span className="before:content-['–'] mb-8 block">
        {t("culture.span")}
      </span>
      <h1
        ref={ref}
        className="mb-12 text-4xl leading-10 md:text-[7rem] md:leading-tight !origin-bottom-left whitespace-nowrap"
      >
        Ideas & people
      </h1>
      <FadeIn>
        <p className="mb-9 text-xl md:text-4xl max-w-[83%] md:max-w-[50%]">
          {t("culture.desc")}
        </p>
        <Link href="/team">
          <button className="text-center text-black-1 text-xl md:text-2xl whitespace-nowrap rounded-full py-2 px-6 mb-4 bg-def-white shadow-def hover:shadow-hov">
            {t("common:readMore")}
          </button>
        </Link>
      </FadeIn>
    </div>
  );
};

export default Culture;
