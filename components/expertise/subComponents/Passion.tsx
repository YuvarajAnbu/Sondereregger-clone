import useTranslation from "next-translate/useTranslation";
import Intro from "../../subComponents/Intro";
import SlideIn from "components/animations/SlideIn";
import FadeIn from "components/animations/FadeIn";

const Passion = () => {
  const { t } = useTranslation("expertise");

  const titleArr: any[] = t("passion.title", {}, { returnObjects: true });
  const contentArr: any[] = t("passion.content", {}, { returnObjects: true });

  return (
    <div className=" pt-12 md:pt-40 px-[15px] md:px-[30px] max-w-[1440px] mx-auto">
      <Intro title={titleArr} desc={t("passion.desc")} />
      {contentArr.map((el, i) => (
        <div key={i} className="exp-contents py-10 pt-6 flex">
          <div className="flex-[0_0_25%] overflow-hidden">
            <SlideIn top={true}>
              <h1 className="text-4xl md:text-9xl px-4">{i + 1}.</h1>
            </SlideIn>
          </div>
          <FadeIn>
            <div className="exp-contents-desc px-4">
              <p className="text-xs mb-2">{el.span}</p>
              <p className=" text-2xl md:text-3xl md:leading-[3rem] mb-9">
                {el.desc}
              </p>
            </div>
          </FadeIn>
        </div>
      ))}
    </div>
  );
};

export default Passion;
