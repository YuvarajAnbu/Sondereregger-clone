import Intro from "../subComponents/Intro";
import Cards from "./subComponents/Cards";

export interface Team {
  img1: number;
  img2: number;
  img3: number;
  name: string;
  post: string;
  email?: string;
  phone?: string;
}

const Team = () => {
  const team1: Team[] = [
    {
      img1: 1,
      img2: 2,
      img3: 1,
      name: "Dimitri Sonderegger",
      post: "COO",
      email: "ds",
      phone: "+41 71 913 27 21",
    },
    {
      img1: 3,
      img2: 4,
      img3: 2,
      name: "Thomas Wollenhaupt",
      post: "Administrative Officer",
      email: "tw",
      phone: "+41 71 913 27 23",
    },
    {
      img1: 5,
      img2: 6,
      img3: 3,
      name: "Marius Lindenmann",
      post: "Designer",
      email: "mal",
      phone: "+41 71 913 27 24",
    },
    {
      img1: 7,
      img2: 8,
      img3: 4,
      name: "Andrea Legazpi-Penas",
      post: "Administration",
      email: "al",
      phone: "+41 71 913 27 22",
    },
    {
      img1: 9,
      img2: 10,
      img3: 5,
      name: "Corinne Rogg",
      post: "Administration",
      email: "cr",
      phone: "+41 71 913 27 27",
    },
    {
      img1: 11,
      img2: 12,
      img3: 6,
      name: "Simone Allenspach",
      post: "Accounting",
      email: "sa",
      phone: "+41 71 913 27 22",
    },
  ];

  const team2: Team[] = [
    {
      img1: 13,
      img2: 14,
      img3: 7,
      name: "Zerajet Alimi",
      post: "Craft and machinist",
    },
    {
      img1: 15,
      img2: 16,
      img3: 8,
      name: "Julalak Braun",
      post: "Craft and machinist",
    },
    {
      img1: 17,
      img2: 18,
      img3: 9,
      name: "Marco Butz",
      post: "Cutting artist and expeditor",
    },
    {
      img1: 19,
      img2: 20,
      img3: 10,
      name: "Jozefin Bytyqi-Llukes",
      post: "Cutting artist and expeditor",
    },
    {
      img1: 21,
      img2: 22,
      img3: 11,
      name: "Angela Dietrich",
      post: "Laser operator",
    },
    {
      img1: 23,
      img2: 24,
      img3: 12,
      name: "Rahel Gosteli-Steffen",
      post: "Craft and machinist",
    },
  ];

  return (
    <>
      <Intro
        span="Team"
        title={["Meet", "our people"]}
        desc="Teamwork makes the dream work!"
      />
      <Cards title="Office" team={team1} />
      <div className=" pt-12 md:pt-40">
        <Cards title="Production" team={team2} />
      </div>
    </>
  );
};

export default Team;
