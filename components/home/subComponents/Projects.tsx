import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import FadeIn from "components/animations/FadeIn";

const Projects = () => {
  const { t } = useTranslation("home");

  return (
    <FadeIn>
      <div className="w-[100%] md:w-[80%] max-w[1000px] text-center mx-auto pb-12 md:pb-[25vh] px-[3%] md:px-0">
        <h2 className="md:text-[2.2rem] max-w-screen-lg mx-auto text-[1.3rem] md:leading-[3rem] leading-8 mb-[1.5em]">
          {t("projects.desc")}
        </h2>
        <Link href="/works">
          <a className=" mb-[calc(1em + 1rem)] rounded-full bg-def-white px-12 py-3 text-xl md:text-2xl whitespace-nowrap shadow-def hover:shadow-hov">
            {t("projects.btn")}
          </a>
        </Link>
      </div>
    </FadeIn>
  );
};

export default Projects;
