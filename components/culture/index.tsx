import useTranslation from "next-translate/useTranslation";
import Intro from "../subComponents/Intro";
import Images from "./subComponents/Images";
import Story from "./subComponents/Story";

const Culture = () => {
  const { t } = useTranslation("culture");

  const introTitleArr: string[] = t("intro.title", {}, { returnObjects: true });
  const homeTitleArr: string[] = t("home.title", {}, { returnObjects: true });

  return (
    <div>
      <Intro
        span={t("intro.span")}
        title={introTitleArr}
        desc={t("intro.desc")}
        contentSpan={t("intro.iSpan")}
        content="culture:intro.intro"
      />
      <Images
        main="/images/cul1.jpg"
        images={Array.from({ length: 6 }, (v, i) => `/images/cul${i + 2}.jpg`)}
      />
      <Story />
      <div className=" pt-12 md:pt-40 pb-8">
        <Intro
          title={homeTitleArr}
          desc={t("home.desc")}
          contentSpan={t("home.iSpan")}
          content="culture:home.intro"
        />
      </div>
      <Images
        main="/images/cul8.jpg"
        images={Array.from({ length: 6 }, (v, i) => `/images/cul${i + 9}.jpg`)}
      />
    </div>
  );
};

export default Culture;
