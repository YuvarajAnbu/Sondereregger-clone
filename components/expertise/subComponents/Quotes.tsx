import useTranslation from "next-translate/useTranslation";
import { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Quotes = () => {
  const { t } = useTranslation("expertise");

  const quotesArr: string[] = t("quotes", {}, { returnObjects: true });

  return (
    <div className="text-center text-white-1 bg-black-1 !pb-16 !pt-20">
      <Swiper
        className="quotes-swiper !px-2 max-w-full sm:max-w-[67%] md:max-w-[50%]"
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1500}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
      >
        {quotesArr &&
          quotesArr.map((el, i) => (
            <SwiperSlide className="bg-black-1" key={i}>
              <p className="py-9 text-xl md:text-3xl mb-5 md:mb-9">{el}</p>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Quotes;
