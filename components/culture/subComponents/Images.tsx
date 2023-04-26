import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FImage from "next/future/image";
import Image from "next/image";
import { LoadingContext } from "pages/_app";
import { useContext, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Images = ({ main, images }: { main: string; images: string[] }) => {
  const { setLoading } = useContext(LoadingContext);

  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      imagesRef.current,
      {
        x: "80vw",
      },
      {
        xPercent: -120,
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: imagesRef.current
            ? "+=" + (window.innerHeight + imagesRef.current.offsetWidth)
            : "bottom top",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className=" pt-9 pb-44 relative">
      <div className="img h-[70vh] w-full relative [&>span]:rounded-[3rem]">
        <Image
          src={main}
          alt="building"
          layout="fill"
          objectFit="cover"
          priority={true}
          onLoadingComplete={() => {
            setLoading(false);
          }}
          // width={2560}
          // height={1440}
        />
      </div>
      <div ref={imagesRef} className="absolute bottom-0 flex gap-5 my-5">
        {images.map((el, i) => (
          <FImage
            key={i}
            className="rounded-2xl shadow-img h-[35vh] max-w-none"
            alt="surrounding"
            src={el}
            // width={650}
            // height={448}
            sizes="430px"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
