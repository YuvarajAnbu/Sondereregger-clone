import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LineFill = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      width: "100%",
      duration: 2,
      ease: "Power2.easeInOut",
      scrollTrigger: {
        trigger: ref.current,
        end: "top center",
        scrub: 2,
      },
    });
  }, []);

  return <span ref={ref} className="h-[1px] w-0 bg-gray-1 block"></span>;
};

export default LineFill;
