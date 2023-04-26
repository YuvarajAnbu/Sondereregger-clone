import LineFill from "components/animations/LineFill";
import gsap from "gsap";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { Team } from "..";
import { LoadingContext } from "pages/_app";

const Card = ({ el }: { el: Team }) => {
  const { setLoading } = useContext(LoadingContext);
  const imageRef = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  useEffect(() => {
    if (imageRef.current)
      tl.current = gsap
        .timeline({ paused: true })
        .set(imageRef.current.children, { transformPerspective: 600 })
        .to(imageRef.current.children[2], {
          duration: 0.5,
          opacity: 0,
          rotationX: 4,
          rotationY: -11,
          rotationZ: 2,
          scaleX: 1.05,
          scaleY: 0.92,
          ease: "none",
        })
        .to(
          imageRef.current.children[1],
          {
            duration: 0.5,
            rotationX: 4,
            rotationY: -11,
            rotationZ: 2,
            scaleX: 1.05,
            scaleY: 0.92,
            ease: "none",
          },
          "-=.5"
        )
        .to(imageRef.current.children[0], {
          duration: 0.25,
          opacity: 1,
          ease: "none",
        });

    return () => {
      if (tl.current) tl.current.kill();
    };
  }, []);

  return (
    <div
      className="flex-[0_0_50%] sm:flex-[0_0_33.3333333%] md:flex-[0_0_25%] mt-8"
      onMouseOver={() => {
        if (tl.current) tl.current.play();
      }}
      onMouseOut={() => {
        if (tl.current) tl.current.reverse();
      }}
    >
      <div ref={imageRef} className="relative">
        <div className="opacity-0">
          <Image
            src={`/images/teamt${el.img3}.png`}
            alt=""
            width={480}
            height={640}
          />
        </div>
        <div className="absolute bottom-0 w-[84%] right-[8.333%] max-w-full [&>span]:rounded-2xl [&>span]:shadow-img origin-[right_90%]">
          <Image
            src={`/images/team${el.img1}.png`}
            alt={el.name}
            width={480}
            height={720}
            onLoadingComplete={() => {
              setLoading(false);
            }}
          />
        </div>
        <div className="absolute bottom-0 w-[84%] right-[8.333%] max-w-full [&>span]:rounded-2xl [&>span]:shadow-img origin-[right_90%]">
          <Image
            src={`/images/team${el.img2}.png`}
            alt={el.name}
            width={480}
            height={720}
          />
        </div>
      </div>
      <div className="w-[84%] text-sm md:text-lg leading-6 mx-auto">
        <p className="leading-9 my-4">
          {el.name}
          {/* <span className="block h-[1px] w-full bg-gray-1"></span> */}
          <LineFill />
        </p>

        <p>{el.post}</p>
        {el.email && (
          <a
            href={`mailto:${el.email}.sonderegger.ch`}
            className="block underline hover:text-black"
          >
            {el.email}.sonderegger.ch
          </a>
        )}
        {el.phone && (
          <a
            href={`tel:${el.phone.replace("+", "%2B").replaceAll(" ", "")}`}
            className="block underline hover:text-black"
          >
            {el.phone}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
