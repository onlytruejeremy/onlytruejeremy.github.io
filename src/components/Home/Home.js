import React from "react";
import Profile from "../../assets/ProfilePic.jpg";
import Code from "../../assets/codeimage.jpg";
import ProjectsCarousel from "../projects/ProjectsCarousel";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import Resume from "../../assets/FRJeremy.pdf";
const Home = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const triggerActive = () => {
    setIsActive(!isActive);
  };
  const navigateTo = (name) => {
    let item = document.getElementById(name);

    item.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section>
        <div
          className="hero__container"
          style={{ backgroundImage: `url(${Profile})` }}
          id="home"
        >
          <div className={`nav__container ${isActive ? "active" : null}`}>
            <div className="nav__inner">
              <h3 className="nav__logo">Jeremy Barber</h3>
              <i
                className="fas fa-2x fa-bars"
                style={{ position: "absolute", top: 20, right: 0 }}
                onClick={() => {
                  triggerActive();
                }}
              />
              <ul className={`nav__items ${isActive ? "active" : null}`}>
                <li className="nav__item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("home");
                      triggerActive();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("about");
                      triggerActive();
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("projects");
                      triggerActive();
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav__item">
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("contact");
                      triggerActive();
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="two__col">
            <div className="left__col">
              <p>
                I develop full stack applications that help businesses grow.
              </p>
              <div className="actions__container">
                <button
                  className="btn btn__primary darken"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(Resume);
                  }}
                >
                  Resume
                </button>
                <div className="social__container">
                  <a
                    className="hover__grow"
                    target="_blank"
                    href="https://linkedin.com/in/barber-jeremy"
                    referrerPolicy="noreferrer"
                  >
                    {" "}
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a
                    className="hover__grow"
                    target="_blank"
                    href="https://github.com/onlytruejeremy"
                    referrerPolicy="noreferrer"
                  >
                    {" "}
                    <i class="fab  fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="right__col">
              <p />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about__container" id="about">
          <div className="about__inner">
            <h2 className="container__title">About</h2>

            <div className="two__col">
              <div className="left__col">
                <div className="image__container">
                  <img src={Code} alt="" />
                </div>
              </div>
              <div className="right__col">
                <div className="top__col">
                  <p>
                    Welcome to my portfolio. I'm a full stack developer with a
                    focus on React, Node and SQL. I have exposure to
                    document-based databases as well. I enjoy tackling
                    challenging problems and watching a project come to life. My
                    other areas of expertise include IT and intelligence
                    analysis.
                  </p>
                </div>
                <div className="bottom__col">
                  <p>
                    When I'm not coding you just might find me out on a hike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="projects__container" id="projects">
          <div className="projects__inner">
            <h2 className="container__title">Projects</h2>
            <div className="projects__carousel">
              <ProjectsCarousel />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default Home;
