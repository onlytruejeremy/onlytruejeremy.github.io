import React from "react";
import Layout from "./Layout";
import PeopleCard from "./PeopleCard";
import Me from "../assets/githubpic.PNG";
import Resume from "../assets/FR2021.pdf";
import Footer from "./Footer";
const About = (props) => {
  const data = [
    {
      id: 1,
      name: "Jeremy Barber",
      about: `I'm a developer with a background in IT and intelligence operations. I've worked with various technologies and eventually decided that development was the path for me. Coming up with an idea or working on an existing one and watching your work come to life keeps me excited and wanting to learn me. There's always something that comes up blocking the path forward but persisting through to find solutions is one of the things I pride myself in.`,
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
