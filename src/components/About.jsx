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
          <h1 class="section__title__alt">ABOUT</h1>
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
              I have a background in IT, sales and intelligence operations.
              While deliberating over what I wanted to pursue in technology I
              came across web development and I started tinkering. After working
              on a team of developers, building out applications and sites, I
              realized that development is where I should have been.
            </p>
            <p>
              Now I have experience in developing RESTful APIs, databases,
              responsive websites and full stack applications. Using my
              knowledge and experience, I can help you tackle your next
              challenge.
            </p>
            <p>
              You can find more information about what I am capable of and my
              experience in the services section of my site.
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
