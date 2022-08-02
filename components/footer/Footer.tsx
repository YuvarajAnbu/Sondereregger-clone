import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="relative z-30 bg-[#363636] rounded-t-[3rem] text-[#ddd] text-xl md:text-[2rem] leading-2 md:leading-10">
      <div className="pt-[6vh] px-[15px] md:px-[30px] max-w-[1440px] mx-auto flex flex-col sm:flex-row">
        <div className="w-full sm:flex-[50%] sm:max-w-[50%]">
          <p className="mb-5">{t("footer.p1")}</p>
          <p className="mb-5">{t("footer.p2")}</p>
          <p className="mb-5">{t("footer.p3")}</p>
        </div>
        <div className="w-full sm:flex-[50%] sm:max-w-[50%] mt-9 sm:ml-[8.5%]">
          <p className="mb-5">
            Sonderegger SA
            <br />
            Gebenloostrasse 2<br />
            CH-9552 Bronschhofen, Switzerland
            <br />
            <a
              className="hover:text-[#fafafa] cursor-pointer"
              href="https://www.sbb.ch/en/station-services/at-the-station/railway-stations/station.6188.bronschhofen-amp.html"
              target="_blank"
              rel="noreferrer"
            >
              Bronschhofen AMP
            </a>
          </p>
          <p className="mb-5 hover:text-[#fafafa] cursor-pointer">
            made@sonderegger.ch
            <br />
            +41 71 913 27 27
          </p>
          <div className="flex flex-row sm:flex-col md:flex-row gap-2">
            <a
              className="self-start mb-5 w-auto inline-block border-[1px] border-[#fafafa] hover:bg-[#fafafa] hover:text-[#363636] whitespace-nowrap py-2 px-6 rounded-full text-xl md:text-base transition duration-500 ease-out"
              href="https://www.instagram.com/sondereggerag/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="self-start mb-5 block mr-1 border-[1px] border-[#fafafa] hover:bg-[#fafafa] hover:text-[#363636] whitespace-nowrap py-2 px-6 rounded-full text-xl md:text-base transition duration-500 ease-out"
              href="https://goo.gl/maps/P2EQeWAWy2GiYpRKA"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>
          </div>

          <p className="text-base mb-5 pb-[3vh] pt-[9vh]">
            ©2021 Sonderegger / Design&nbsp;
            <a
              className="hover:text-[#fafafa] font-bold text-lg"
              href="https://twks.ch/"
              target="_blank"
              rel="noreferrer"
            >
              TWKS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
