import React from "react";
import Layout from "./Layout";
import PeopleCard from "./PeopleCard";
import Me from "../assets/githubpic.PNG";
import Resume from "../assets/JeremyB2021.pdf";
import Footer from "./Footer";
import { Link, useHistory } from "react-router-dom";
const About = (props) => {
  const history = useHistory();
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 1000);
  });

  return (
    <Layout>
      <div class="about__container">
        <div class="about__top">
          <h1 class="section__title__alt">About</h1>
          <div class="section__paragraph">
            My goal is to create a positive impact by bringing ideas and
            concepts to life. I am constantly building projects in order to
            explore and better understand new technologies. My passion is
            revealed in the way I work with others, the projects I build, and
            the results I produce.
          </div>
        </div>
        <div class="about__bottom wrapme">
          <div
            className={`about__bottom__left ${isActive ? "active" : ""} shadow`}
          >
            <img src={Me} alt="" />
          </div>

          <div class="about__bottom__right">
            <h2>Full Stack Developer</h2>
            <p>
              An experienced, sprightly and detail-oriented Web Developer with a
              track record of optimizing workflow and driving client
              satisfaction. Possessing a background in IT, sales and
              intelligence operations. Skilled in effectively transforming
              business requirements into websites and applications.
            </p>

            <p>
              Whether you need someone with front end or back end skills, I'm
              ready to take on the challenge and help you better serve your
              clients.
            </p>
            <div class="three__btn">
              <Link
                class="btn shadow btn__primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(Resume);
                }}
              >
                Resume
              </Link>
              <Link
                to={{
                  pathname: "/",
                  state: "contact",
                }}
                className="btn shadow btn__primary"
              >
                Contact
              </Link>
              <Link to="/services" className="btn shadow btn__primary">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;
