import React from "react";
import Layout from "./Layout";
import PeopleCard from "./PeopleCard";
import Me from "../assets/githubpic.PNG";
import Resume from "../assets/JeremyB2021.pdf";
import Footer from "./Footer";
const About = (props) => {
  const data = [
    {
      id: 1,
      name: "Jeremy Barber",
      about: `My goal is to create a positive impact by bringing ideas and concepts to life. I am constantly building new projects in order to explore and better understand new technologies. My passion is revealed in the way I work with others, the projects I build and the results I produce.`,
      image: Me,
      resume: Resume,
    },
  ];
  return (
    <Layout>
      <div className="about__container">
        <h1 className="about__title">About</h1>
        <p></p>
        <div className="people__container">
          {data.map((item) => {
            return <PeopleCard data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
