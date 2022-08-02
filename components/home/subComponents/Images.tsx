import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Images = ({
  containerRef,
  i,
}: {
  containerRef: { current: HTMLDivElement | null };
  i: number;
}) => {
  const [random] = useState<number>(Math.floor(Math.random() * 3));
  const [randomMar] = useState<number[]>([
    randomGen(50, 171),
    randomGen(50, 171),
    randomGen(5, 171),
    randomGen(5, 171),
  ]);
  const imageRef = useRef(null);

  useEffect(() => {
    if (containerRef.current)
      gsap.to(imageRef.current, {
        y: -800,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 2,
          start: "top 200px",
          end: `${100 - random * 10}% bottom`,
        },
      });
  }, [containerRef, random]);

  function randomGen(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div
      ref={imageRef}
      style={{
        margin: `${randomMar[0]}px ${randomMar[1]}px ${randomMar[2]}px ${randomMar[3]}px`,
        zIndex: random,
      }}
      className="flex flex-[0_0_35vw] md:flex-[0_0_18vw] items-center"
    >
      <div
        style={{ paddingBottom: [145, 100, 66][random] + "%" }}
        className={`w-full h-0 relative overflow-hidden rounded-2xl shadow-img`}
      >
        <Image
          src={`/images/${i + 1}.jpg`}
          alt=""
          layout="fill"
          objectFit="cover"
          // width={1300}
          // height={870}
          priority={true}
          quality={100}
          sizes="(min-width: 768px) 50vw, 24vw"
          onLoadingComplete={() => {
            if (i === 15) {
              //scrollTrigger sets height before image loads, so refreshing it on loading last image
              ScrollTrigger.refresh();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Images;
