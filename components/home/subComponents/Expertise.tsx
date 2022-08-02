import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Intro from "../../subComponents/Intro";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const { t } = useTranslation("home");

  interface CardsArr {
    title: string;
    desc: string;
  }

  const titleArr: string[] = t("expertise.title", {}, { returnObjects: true });
  const cardsArr: CardsArr[] = t(
    "expertise.cards",
    {},
    { returnObjects: true }
  );

  useEffect(() => {
    var batchTarget = ".p-reveal-batch";

    gsap.set(batchTarget, { y: 20, opacity: 0 });

    ScrollTrigger.batch(batchTarget, {
      interval: 0.5,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.2, grid: [1, 3] },
          overwrite: true,
        }),
      onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.to(batch, { opacity: 0, y: 0, overwrite: true }),
    });

    const set = () => {
      gsap.set(batchTarget, { y: 0 });
    };

    ScrollTrigger.addEventListener("refreshInit", set);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", set);
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto pt-12 md:pt-[10rem] z-10 relative">
      <Intro
        span={t("expertise.span")}
        title={titleArr}
        desc={t("expertise.desc")}
      />

      <Swiper
        className="exp-swiper !py-8 !mt-4 !relative !px-0 md:!px-[15px]"
        modules={[Pagination]}
        slidesPerView={1.2}
        grabCursor
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          1000: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {cardsArr.map((el, i) => (
          <SwiperSlide key={i}>
            <div className="p-reveal-batch px-[15px] opacity-0">
              <Image
                className="rounded-2xl transition-all duration-[300ms] ease-in-out shadow-[0px_3px_6px_rgba(0,0,0,.25)"
                alt={el.title}
                src={`/images/exp${i + 1}.jpg`}
                width={600}
                height={488}
              />

              <h2 className=" mt-10 text-3xl pb-2 mb-2 border-b border-[#7a7a7a]">
                {el.title}
              </h2>
              <p className="leading-[22px]">{el.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/expertise">
        <a
          aria-label="expertise"
          className="text-center text-black-1 text-xl md:text-2xl whitespace-nowrap rounded-full py-2 px-6 mb-4 bg-def-white shadow-def hover:shadow-hov ml-[15px]"
        >
          {t("common:readMore")}
        </a>
      </Link>

      {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-4936827b-d725-4d1d-8bd4-7a1bb0cea7c5"></div> */}
    </div>
  );
};

export default Expertise;
