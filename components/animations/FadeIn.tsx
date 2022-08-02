import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeIn = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);

  useEffect(() => {
    let t: any = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "restart none none none",
      },
    });
    return () => {
      t.kill();
    };
  }, []);

  return (
    <div ref={ref} className="opacity-0 translate-y-8">
      {children}
    </div>
  );
};

export default FadeIn;
