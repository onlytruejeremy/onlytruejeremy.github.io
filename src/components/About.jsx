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
      about: `I'm a developer with a background in IT and intelligence operations. I have been tinkering with electronics and software ever since I was young. After I joined the Army I got to experience places all over the country and world. During this time I got even more exposure to various technology, and more hands on experience. After some deliberation I decided that software development was the right path for me and now here I am.`,
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
