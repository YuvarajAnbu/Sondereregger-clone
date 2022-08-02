import useTranslation from "next-translate/useTranslation";
import Head from "next/head";

const FourNotFour = () => {
  const { t } = useTranslation("common");

  return (
    <div className="px-[15px] md:px-[30px]">
      <Head>
        <title>404 | Sonderegger</title>
      </Head>
      <p className=" mb-8">- {t("notFound")}</p>
      <h1 className="text-5xl md:text-9xl">404</h1>
    </div>
  );
};

export default FourNotFour;
