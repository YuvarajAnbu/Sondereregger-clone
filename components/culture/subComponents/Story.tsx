import FadeIn from "components/animations/FadeIn";
import LineFill from "components/animations/LineFill";
import SlideIn from "components/animations/SlideIn";
import useTranslation from "next-translate/useTranslation";
import Intro from "../../subComponents/Intro";

const Story = () => {
  const { t } = useTranslation("culture");

  const titleArr: string[] = t("story.title", {}, { returnObjects: true });
  const yearsArr: any[] = t("story.years", {}, { returnObjects: true });

  return (
    <div className="bg-black-1 mt-40 rounded-2xl text-def-white py-[10vh]">
      <Intro title={titleArr} desc={t("story.desc")} />
      {yearsArr.map((el, i) => (
        <div
          key={i}
          className="py-5 md:py-9 px-[15px] md:px-[30px] max-w-[1440px] mx-auto"
        >
          <div className="mt-9 flex flex-wrap">
            <div className="w-full mb-3">
              <LineFill />
            </div>
            <div className="flex-[0_0_50%] -mt-2 md:-mt-4 overflow-hidden">
              <SlideIn top={true}>
                <h1 className="text-4xl md:text-9xl px-4">{el.year}</h1>
              </SlideIn>
            </div>
            <div className="flex-[0_0_50%] text-xl md:text-4xl pt-3 md:pt-6">
              <FadeIn>
                <p>{el.desc}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Story;
