import React from "react";
import Layout from "./Layout";
import PeopleCard from "./PeopleCard";
import Me from "../assets/githubpic.PNG";
import Resume from "../assets/FR2021.pdf";
const About = (props) => {
  const data = [
    {
      id: 1,
      name: "Jeremy Barber",
      about:
        "I have worked on a multitude of web based projects for a range of clients providing web development services all the way from basic html to full stack applications. I have an extensive background in IT and turned my focus towards development, as I love watching ideas come to life.",
      image: Me,
      resume: Resume,
    },
  ];
  return (
    <Layout>
      <div className="about__container">
        <h1 className="about__title">About</h1>
        <p>
          I'm a full stack developer with a focus on React, Node and SQL. Don't
          tell anyone but I've been cheating on SQL-based databases with
          document-based ones lately. The other secret is that I've been diving
          more into React Native.
        </p>
        <div className="people__container">
          {data.map((item) => {
            return <PeopleCard data={item} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default About;
