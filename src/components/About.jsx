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
      about:
        "I have worked on a multitude of web based projects for a range of clients providing development services all the way from basic websites to full stack applications. I have an extensive background in IT and turned my focus completely towards full stack development. Whether your project is big or small, I've got the skills you need.",
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
