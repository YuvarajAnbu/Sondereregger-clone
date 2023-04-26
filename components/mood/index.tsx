import ImageContainer from "../works/subComponents/ImageContainer";
import data, { Data } from "../../others/data";
import { useContext, useEffect, useState } from "react";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Link from "next/link";
import { LoadingContext } from "pages/_app";

const Mood = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  const { t } = useTranslation("mood");
  const [fData, setFData] = useState<Data[]>([]);
  const [changed, setChanged] = useState<boolean>(false);

  const LinkComp = (props: any) => (
    <Link href="/works">
      <a className="underline underline-offset-8" {...props} />
    </Link>
  );

  useEffect(() => {
    let store = localStorage.getItem("data");

    if (store) {
      setFData(() =>
        data.filter((e, i) => {
          if (store) return JSON.parse(store).includes(i);
          else return false;
        })
      );
    }
  }, [changed]);

  return (
    <div className=" tracking-tight">
      <div className="py-10 text-xl md:text-2xl text-center">
        <p className="mb-6">❤️ {t("share")}</p>
        <p className="text-center mb-6">⚡️ {t("dis")}</p>
      </div>
      {fData.length < 1 ? (
        <div className="max-w-[1440px] px-4 md:px-8 mx-auto min-h-[350px] ml-4 text-lg">
          <Trans
            i18nKey="mood:noRes"
            components={[
              <h3 key={1} className="text-2xl md:text-4xl md:ml-10" />,
              <br key={2} />,
              <LinkComp key={3} />,
            ]}
          />
        </div>
      ) : (
        <ImageContainer data={fData} setChanged={setChanged} />
      )}
    </div>
  );
};

export default Mood;
