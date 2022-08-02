import useTranslation from "next-translate/useTranslation";
import Intro from "../subComponents/Intro";
import LongImage from "./subComponents/Image";
import Passion from "./subComponents/Passion";
import Quotes from "./subComponents/Quotes";
import Tabs from "./subComponents/Tabs";

const Expertise = () => {
  const { t } = useTranslation("expertise");

  const titleArr: string[] = t("intro.title", {}, { returnObjects: true });
  return (
    <div>
      <Intro
        span={t("intro.span")}
        title={titleArr}
        desc={t("intro.desc")}
        contentSpan={t("intro.iSpan")}
        content="expertise:intro.intro"
        contentLg
      />
      <LongImage />
      <Tabs />
      <Quotes />
      <Passion />
    </div>
  );
};

export default Expertise;
