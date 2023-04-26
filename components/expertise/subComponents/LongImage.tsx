import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import longImage from "../../../public/images/long.jpg";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const LongImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // https://codepen.io/GreenSock/pen/mdVEpKK
    const frameCount = 30;
    ScrollTrigger.matchMedia({
      "(min-width: 767px)": function () {
        gsap.to(".long-img", {
          y: () => (ref.current ? -ref.current?.offsetHeight * frameCount : 0),
          ease: `steps(${frameCount})`,
          duration: 4,
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      },
      "(max-width: 766px)": function () {
        gsap.to(".long-img", {
          y: () => (ref.current ? -ref.current?.offsetHeight * frameCount : 0),
          ease: `steps(${frameCount})`,
          duration: 4,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
            end: "bottom 50%",
            scrub: 1,
            pin: false,
            invalidateOnRefresh: true,
          },
        });
      },
    });

    return () => {
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  return (
    <div className=" my-9">
      <div ref={ref} className="w-full re aspect-video overflow-hidden">
        <Image
          className="long-img"
          src={longImage}
          layout="responsive"
          quality={100}
          sizes="100vw"
          priority
          // width={1920}
          // height={33480}
          // sizes="100vw"
          // layout="responsive"
          // quality={100}
          // src="/images/long.jpg"
          // alt=""
          // priority={true}
          // unoptimized={true}
          // onLoadingComplete={() => {
          //   setLoading(false);
          // }}
        />
      </div>
    </div>
  );
};

export default LongImage;
