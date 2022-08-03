import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useTranslation from "next-translate/useTranslation";

gsap.registerPlugin(ScrollTrigger);

const Instagram = () => {
  const { t } = useTranslation("home");
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current)
      gsap.fromTo(
        ref.current.children,
        {
          y: -60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: -0.06,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 96%",
            toggleActions: "restart none restart none",
          },
        }
      );
  }, []);

  return (
    <div className="pt-12 md:pt-40 pb-8 px-[15px] md:px-[30px] max-w-[1440px] mx-auto">
      <span className="before:content-['–'] mb-8 block">Instagram</span>
      <h2
        ref={ref}
        className="text-4xl leading-10 md:text-[7rem] md:leading-none"
      >
        {t("insta.title")
          .split("")
          .map((el, i) => {
            return el === "." ? (
              <br key={i} />
            ) : (
              <div
                key={i}
                className="ins-title whitespace-pre-wrap relative inline-block"
              >
                {el}
              </div>
            );
          })}
      </h2>
      <div className="pt-[10vh]">
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        <div className="elfsight-app-4936827b-d725-4d1d-8bd4-7a1bb0cea7c5"></div>
      </div>
    </div>
  );
};

export default Instagram;
