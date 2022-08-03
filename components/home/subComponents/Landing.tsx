import { useEffect, useRef } from "react";
import Images from "./Images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      xPercent: -140,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 2,
        start: "top 200px",
        end: "80% bottom",
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div ref={containerRef}>
      <h1
        ref={textRef}
        className="fixed w-auto left-[50vh] top-[30vh] text-[10rem] whitespace-nowrap py-[15px] z-[1]"
      >
        Shaping the impossible
      </h1>

      <div className="flex flex-wrap mb-[-150px] mx-[-10vw]">
        {Array.apply(null, Array(16)).map((e, i) => {
          return (
            <Images
              key={i}
              {...{
                containerRef: containerRef,
                i,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
