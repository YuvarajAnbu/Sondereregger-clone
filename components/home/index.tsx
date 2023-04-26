import dynamic from "next/dynamic";
import Head from "next/head";
import Culture from "./subComponents/Culture";
import Expertise from "./subComponents/Expertise";
import Instagram from "./subComponents/Instagram";
import Projects from "./subComponents/Projects";
import Quote from "./subComponents/Quote";

const Landing = dynamic(() => import("./subComponents/Landing"), {
  ssr: false,
});

const Home = () => {
  return (
    <div>
      <Head>
        <title>Homepage | Sonderegger</title>
      </Head>
      <Landing />
      <Projects />
      <Expertise />
      <Quote />
      <Culture />
      <Instagram />
    </div>
  );
};

export default Home;
