import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
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
      <div ref={ref} className="w-full aspect-video overflow-hidden">
        <Image
          className="long-img"
          width={1920}
          height={33480}
          src="/images/long.jpg"
          alt="Shaping the impossible"
        />
      </div>
    </div>
  );
};

export default LongImage;
