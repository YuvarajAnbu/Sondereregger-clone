import FadeIn from "components/animations/FadeIn";
import TransText from "next-translate/TransText";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Intro from "../subComponents/Intro";
import { useContext } from "react";
import { LoadingContext } from "pages/_app";

const News = () => {
  const { setLoading } = useContext(LoadingContext);
  const { t } = useTranslation("news");

  interface News {
    date: string;
    title: string;
    desc: string[];
    link?: string;
  }

  const titleArr: string[] = t("intro.title", {}, { returnObjects: true });
  const news: News[] = t("news", {}, { returnObjects: true });

  return (
    <>
      <Intro span={t("intro.span")} title={titleArr} desc={t("intro.desc")} />
      <div className="px-[15px] md:px-[30px] max-w-[1440px] mx-auto py-8">
        <div className="w-full">
          {news.map((el, i) => (
            <FadeIn key={i}>
              <div className="py-12 border-b-[1px] border-gray-1">
                <div className=" flex flex-wrap -mx-4">
                  <time className="flex-auto md:flex-[0_0_16.666667%] text-2xl px-4 mb-4">
                    {el.date}
                  </time>
                  <div className="flex-auto md:flex-[0_0_25%] px-4 mb-4 [&>span]:rounded-2xl [&>span]:shadow-img">
                    <Image
                      alt="mews"
                      src={`/images/news${i + 1}.jpg`}
                      objectFit="cover"
                      width={600}
                      height={280}
                      onLoadingComplete={() => {
                        setLoading(false);
                      }}
                    />
                  </div>
                  <div className="flex-1 md:ml-[8.33333%] flex gap-4 flex-col px-4 text-xs mb-4">
                    <h2 className=" text-xl md:text-4xl">{el.title}</h2>
                    {el.desc.map((e, k) => (
                      <TransText
                        key={k}
                        text={e}
                        components={[
                          <p key={1} />,
                          <a key={2} className="underline" href={e} />,
                          <p key={3} />,
                          <br key={4} />,
                          <a key={5} className="underline" href={el.link} />,
                        ]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
