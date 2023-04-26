import useTranslation from "next-translate/useTranslation";
import Intro from "../subComponents/Intro";
import LongImage from "./subComponents/LongImage";
import Passion from "./subComponents/Passion";
import Quotes from "./subComponents/Quotes";
import Tabs from "./subComponents/Tabs";
import { useContext, useEffect } from "react";
import { LoadingContext } from "pages/_app";

const Expertise = () => {
  const { setLoading } = useContext(LoadingContext);
  const { t } = useTranslation("expertise");

  const titleArr: string[] = t("intro.title", {}, { returnObjects: true });

  useEffect(() => {
    setLoading(false);
  }, []);

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
