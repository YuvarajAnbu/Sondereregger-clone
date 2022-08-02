import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Tabs = () => {
  const { t } = useTranslation("expertise");

  interface TabsArr {
    title: string;
    content: string;
    img: string[];
  }

  const tabsArr: TabsArr[] = t("tabs", {}, { returnObjects: true });
  const containerRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLUListElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const expX = -100 / tabsArr.length;
    const expTime = 2;

    ScrollTrigger.matchMedia({
      "(min-width: 767px)": function () {
        if (titlesRef.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 10%",
              pin: true,
              scrub: 2,
              anticipatePin: 1,
              pinSpacing: "margin",
            },
          });

          tl.to(lineRef.current, { width: 0, duration: 0 })
            .to(tabsRef.current, { x: 0, duration: 0 })
            .fromTo(
              titlesRef.current.children[0],
              { opacity: 0.5 },
              { opacity: 1, duration: 0 }
            )
            .addLabel("key1")
            .to(tabsRef.current, {
              xPercent: expX,
              delay: expTime,
              duration: expTime / 2,
            })
            .fromTo(
              titlesRef.current.children[1],
              { opacity: 0.5 },
              { opacity: 1, duration: 1 },
              "key1+=1"
            )
            .fromTo(
              titlesRef.current.children[0],
              { opacity: 1 },
              { opacity: 0.5, duration: 1 },
              "key1"
            )
            .addLabel("key2")
            .to(tabsRef.current, {
              xPercent: expX * 2,
              delay: expTime,
              duration: expTime / 2,
            })
            .fromTo(
              titlesRef.current.children[2],
              { opacity: 0.5 },
              { opacity: 1, duration: 1 },
              "key2+=1"
            )
            .fromTo(
              titlesRef.current.children[1],
              { opacity: 1 },
              { opacity: 0.5, duration: 1 },
              "key2"
            )
            .addLabel("key3")
            .to(tabsRef.current, {
              xPercent: expX * 3,
              delay: expTime,
              duration: expTime / 2,
            })
            .to(tabsRef.current, { xPercent: expX * 3, duration: expTime })
            .fromTo(
              titlesRef.current.children[3],
              { opacity: 0.5 },
              { opacity: 1, duration: 1 },
              "key3+=1"
            )
            .fromTo(
              titlesRef.current.children[2],
              { opacity: 1 },
              { opacity: 0.5, duration: 1 },
              "key3"
            )
            .addLabel("keyEnd")
            .to(lineRef.current, { width: "100%", duration: 16 }, "0");
        }
      },

      "(max-width: 766px)": function () {
        if (titlesRef.current) {
          const vwt = window.innerWidth;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 10%",
              end: "+=7000",
              pin: true,
              scrub: 2,
              anticipatePin: 1,
              pinSpacing: "margin",
            },
          });

          tl.to(lineRef.current, { width: 0, duration: 0 })
            .to(tabsRef.current, { x: 0, duration: 0 })
            .fromTo(
              titlesRef.current.children[0],
              { opacity: 0.5 },
              { opacity: 1, duration: 0 }
            )
            .addLabel("key1") //key1
            .to(tabsRef.current, {
              xPercent: expX,
              delay: expTime,
              duration: expTime / 2,
            })
            .fromTo(
              titlesRef.current.children[1],
              { opacity: 0.5 },
              { opacity: 1, duration: 1 },
              "key1+=1"
            )
            .fromTo(
              titlesRef.current.children[0],
              { opacity: 1 },
              { opacity: 0.5, duration: 1 },
              "key1"
            )
            .to(
              titlesRef.current,
              {
                x: -0 * vwt,
                delay: expTime,
                duration: expTime / 2,
              },
              "key1"
            )
            .addLabel("key2") //key2
            .to(tabsRef.current, {
              xPercent: expX * 2,
              delay: expTime,
              duration: expTime / 2,
            })
            .fromTo(
              titlesRef.current.children[2],
              { opacity: 0.5 },
              { opacity: 1, duration: 1 },
              "key2+=1"
            )
            .fromTo(
              titlesRef.current.children[1],
              { opacity: 1 },
              { opacity: 0.5, duration: 1 },
              "key2"
            )
            .to(
              titlesRef.current,
              {
                x: -0.33 * vwt,
                delay: expTime,
                duration: expTime / 2,
              },
              "key2"
            )
            .addLabel("key3") //key3
            .to(tabsRef.current, {
              xPercent: expX * 3,
              delay: expTime,
              duration: expTime / 2,
            })
            .to(tabsRef.current, { xPercent: expX * 3, duration: expTime })
            .fromTo(
              titlesRef.current.children[3],
              { opacity: 0.5 },
              { opacity: 1, duration: 1 },
              "key3+=1"
            )
            .fromTo(
              titlesRef.current.children[2],
              { opacity: 1 },
              { opacity: 0.5, duration: 1 },
              "key3"
            )
            .to(
              titlesRef.current,
              {
                x: -0.5 * vwt,
                delay: expTime,
                duration: expTime / 2,
              },
              "key3"
            )
            .addLabel("keyEnd") //keyEnd
            .to(lineRef.current, { width: "100%", duration: 16 }, "0");
        }
      },
    });

    // if (titlesRef.current)
    //   tl.to(lineRef.current, { width: 0, duration: 0 })
    //     .to(tabsRef.current, { x: 0, duration: 0 })
    //     .fromTo(
    //       titlesRef.current?.children[0],
    //       { opacity: 0.5 },
    //       { opacity: 1, duration: 0 }
    //     );

    // tabsArr.forEach((el, i) => {
    //   const duration = 1;
    //   const delay = 2;
    //   if (i) {
    //     tl.addLabel(`key${i}`);

    //     tl.to(tabsRef.current, {
    //       xPercent: (-100 / tabsArr.length) * i,
    //       delay,
    //       duration,
    //     });

    //     if (i === 3)
    //       tl.to(tabsRef.current, {
    //         xPercent: (-100 / tabsArr.length) * i,
    //         duration: delay,
    //       });

    //     if (titlesRef.current) {
    //       tl.fromTo(
    //         titlesRef.current.children[i],
    //         { opacity: 0.5 },
    //         { opacity: 1, duration },
    //         `key${i}+=1`
    //       );
    //       tl.fromTo(
    //         titlesRef.current.children[i - 1],
    //         { opacity: 1 },
    //         { opacity: 0.5, duration },
    //         `key${i}`
    //       );
    //     }
    //   }
    // });

    // tl.addLabel("keyEnd").to(
    //   lineRef.current,
    //   {
    //     width: "100%",
    //     duration: tabsArr.length * 2,
    //   },
    //   "0"
    // );
    return () => {
      ScrollTrigger.clearMatchMedia();
    };
  }, [tabsArr]);

  return (
    <div
      ref={containerRef}
      className="px-[15px] md:px-[30px] py-[30px] max-w-[1440px] mx-auto"
    >
      <div>
        <ul ref={titlesRef} className="flex mx-[-15px]">
          {tabsArr.map((el, i) => (
            <li
              className="flex-1 px-[15px] text-2xl md:text-3xl mb-3 opacity-50"
              key={i}
            >
              {el.title}
            </li>
          ))}
        </ul>
        <div className="my-5 w-full">
          <div className="w-full h-[1px] bg-black-1">
            <div
              ref={lineRef}
              className="w-0 h-[5px] bg-black-1 rounded-2xl -translate-y-2/4"
            ></div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div ref={tabsRef} className={`flex w-[400%]`}>
          {tabsArr.map((el, i) => (
            <div key={i} className="w-full px-4">
              <p className=" max-w-xl mb-16 pt-5">{el.content}</p>
              <div className="-mx-4">
                <div
                  className={`px-4 w-full md:w-2/4 inline-block md:inline-block [&>span]:shadow-img [&>span]:rounded-3xl`}
                >
                  <Image
                    src={`/images/${el.img[0]}.jpg`}
                    alt="tab"
                    width={900}
                    height={600}
                    priority={true}
                  />
                </div>
                <div
                  className={`px-4 w-2/4 hidden md:inline-block [&>span]:shadow-img [&>span]:rounded-3xl`}
                >
                  <Image
                    src={`/images/${el.img[1]}.jpg`}
                    alt="tab"
                    width={900}
                    height={600}
                    priority={true}
                    onLoadingComplete={() => {
                      if (!i) ScrollTrigger.refresh();
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
