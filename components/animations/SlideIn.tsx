import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlideIn = ({ children, top }: { children: ReactNode; top?: boolean }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        yPercent: top ? -100 : 100,
      },
      {
        yPercent: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [top]);

  return <div ref={ref}>{children}</div>;
};

export default SlideIn;
