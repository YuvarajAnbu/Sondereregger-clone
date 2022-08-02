import FadeIn from "components/animations/FadeIn";
import LineFill from "components/animations/LineFill";
import SlideIn from "components/animations/SlideIn";
import Trans from "next-translate/Trans";

const Intro = ({
  span,
  title,
  desc,
  contentSpan,
  content,
  contentLg,
}: {
  span?: string;
  title: string[];
  desc: string;
  contentSpan?: string;
  content?: string;
  contentLg?: boolean;
}) => {
  return (
    <div className="px-[15px] md:px-[30px] max-w-[1440px] mx-auto">
      {span && <span className="before:content-['–'] mb-8 block">{span}</span>}
      <div>
        <h1 className="overflow-x-hidden text-[2.5rem] md:text-[7rem] leading-[1.3em] md:leading-[1.15em]">
          {title.map((e, i) => (
            <div key={i} className="overflow-y-hidden">
              <SlideIn>{e}</SlideIn>
            </div>
          ))}
        </h1>
        <p className="text-2xl my-8 font-serif leading-[3.5rem]">
          <LineFill />
          {desc}
          <LineFill />
        </p>
      </div>
      {content && (
        <FadeIn>
          <div className="flex justify-between gap-8">
            <span>{contentSpan}</span>
            <Trans
              i18nKey={content}
              components={[
                <p
                  key={1}
                  className={`text-xl md:max-w-[50%] mb-4 ${
                    contentLg && "md:text-4xl"
                  }`}
                />,
                <br key={2} />,
              ]}
            />
          </div>
        </FadeIn>
      )}
    </div>
  );
};

export default Intro;
