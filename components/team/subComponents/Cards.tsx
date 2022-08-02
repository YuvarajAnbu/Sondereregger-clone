import FadeIn from "components/animations/FadeIn";
import { Team } from "..";
import Card from "./Card";

const Cards = ({ title, team }: { title: string; team: Team[] }) => {
  return (
    <FadeIn>
      <div className="px-[15px] md:px-[30px] max-w-[1440px] mx-auto">
        <p className=" text-2xl mb-4">{title}</p>
        <div className="py-8 flex flex-wrap -mx-4">
          {team.map((el, i) => (
            <Card el={el} key={i} />
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Cards;
