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
      about: `I'm a full stack developer with a background in IT and intelligence operations. I've traveled the world while in the Army, met all sorts of amazing people, and became exposed to all kinds of technology along the way. This exposure is what fueled my drive to constantly learn more. Now here I am building out full blown applications!`,
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
