import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

const Quote = () => {
  return (
    <div className=" py-[10vh]">
      <Swiper
        className="text-center text-white-1 bg-black-1"
        slidesPerView={2}
        modules={[Autoplay]}
        speed={2000}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
      >
        {[
          {
            quote:
              "Talent wins games, but teamwork and intelligence wins championships.",
            author: "Michael Jordan",
          },
          {
            quote: "Why so serious?",
            author: "The Joker",
          },
          {
            quote: "To infinity and beyond!",
            author: "Buzz Lightyear",
          },
        ].map((el, i) => (
          <SwiperSlide key={i}>
            <div className=" flex flex-col items-center max-w-2xl mx-auto py-[5vh]">
              <p className="text-xl md:text-3xl mb-5 md:mb-9">{el.quote}</p>
              <h3 className="text-lg">{el.author}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Quote;
