import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Data } from "others/data";
import { LoadingContext } from "pages/_app";

gsap.registerPlugin(ScrollTrigger);

const Images = ({
  data,
  setActive,
  liked,
  like,
}: {
  data: Data;
  setActive: (value: number) => void;
  liked: number[];
  like: (value: number) => void;
}) => {
  const { setLoading } = useContext(LoadingContext);

  const [random] = useState<number>(Math.floor(Math.random() * 3));
  const [loaded, setLoaded] = useState<boolean>(false);

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current && loaded) {
      setLoading(false);
      gsap.fromTo(
        imageRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "center-=100 bottom",
            toggleActions: "restart none none reverse",
          },
        }
      );
    }
  }, [loaded]);

  return (
    <div ref={imageRef} className="cursor-pointer p-1 md:p-4">
      <div
        style={{
          paddingBottom: [125, 100, 75][random] + "%",
        }}
        className={`w-full h-0 overflow-hidden rounded-2xl shadow-[0px_3px_6px_rgba(0,0,0,.25)] relative`}
      >
        <Image
          src={`/images/${data.img}.jpg`}
          alt={data.name}
          layout="fill"
          objectFit="cover"
          sizes="(min-width: 768px) 35vw, 24vw"
          onLoadingComplete={() => {
            setLoaded(true);
          }}
          onClick={() => {
            setActive(data.id);
          }}
        />
        <span
          className={`block w-6 h-6 ${
            liked.includes(data.id)
              ? "bg-[url('/images/heartFill.svg')]"
              : "bg-[url('/images/heart.svg')]"
          }  bg-no-repeat bg-left-top absolute top-5 right-5 cursor-pointer`}
          onClick={() => {
            like(data.id);
          }}
        ></span>
      </div>
    </div>
  );
};

export default Images;
