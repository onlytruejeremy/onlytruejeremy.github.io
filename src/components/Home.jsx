import React from "react";
import { Link, withRouter } from "react-router-dom";
import Contact from "./Contact";
import Layout from "./Layout";
import Typed from "react-typed";
import Footer from "./Footer";
import WebDev from "../assets/webdev.svg";
import AppPic from "../assets/app.svg";
const Home = (props) => {
  const contactRef = React.useRef();
  React.useEffect(() => {
    if (props.location.state === "contact") {
      setTimeout(() => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  });
  return (
    <>
      <Layout>
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__left">
              <small>Jeremy Barber</small>
              <h1>Full Stack Developer</h1>
              <p>
                <Typed
                  strings={[
                    "I take ideas and transform them into websites and applications.",
                    "I take ideas and transform them into reality.",
                  ]}
                  typeSpeed={40}
                  loop
                  smartBackspace
                />
              </p>
              <Link
                to={{
                  pathname: "/",
                  state: "contact",
                }}
                className="btn btn__primary"
              >
                Get In Touch
              </Link>
            </div>
            <div className="hero__right">
              <img src={WebDev} alt />
            </div>
          </div>
        </section>
        <section className="explanation">
          <div className="explanation__inner">
            <h2>Why Work With Me</h2>
            <div className="explanation__features">
              <div className="explanation__feature">
                <i className="fas fa-check" />
                <p>Responsive Design</p>
              </div>
              <div className="explanation__feature">
                <i className="fas fa-check" />
                <p>Relational Databases</p>
              </div>
              <div className="explanation__feature">
                <i className="fas fa-check" />
                <p>Document-Based Databases</p>
              </div>
              <div className="explanation__feature">
                <i className="fas fa-check" />
                <p>RESTful APIs</p>
              </div>
            </div>
          </div>
        </section>
        <section className="explanation__long">
          <div className="explanation__long__inner">
            <div className="explanation__long__inner__left">
              <img src={AppPic} alt />
            </div>
            <div className="explanation__long__inner__right">
              <div className="explanation__top">
                <h2>Development with a purpose</h2>
                <p>Leverage my skills to build solutions to your problems.</p>
              </div>
              <div className="explanation__bottom">
                <div className="simple__card">
                  <h4>Engagement:</h4>
                  <p>Experiences that will keep your clients coming back.</p>
                </div>
                <div className="simple__card">
                  <h4>Security:</h4>
                  <p>
                    With a background in cybersecurity, I'll ensure your
                    customer data is safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="explanation alt">
          <div className="explanation__inner">
            <h2>Tech I Use</h2>
            <div className="explanation__features alt">
              <div className="explanation__feature alt">
                <i className="fas fa-file-code" />
                <ul>
                  <li>
                    <h4>Front End:</h4>
                  </li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>ReactJS</li>
                  <li>Formik</li>
                  <li>Yup</li>
                  <li>Axios</li>
                </ul>
              </div>
              <div className="explanation__feature alt">
                <i className="fas fa-server" />
                <ul>
                  <li>
                    <h4>Middle Tier:</h4>
                  </li>
                  <li>NodeJS</li>
                  <li>ExpressJS</li>
                  <li>Joi</li>
                  <li>JWT</li>
                  <li>BCRYPT</li>
                  <li>CORS</li>
                  <li>Helmet</li>
                </ul>
              </div>
              <div className="explanation__feature alt">
                <i className="fas fa-database" />
                <ul>
                  <li>
                    <h4>Back End:</h4>
                  </li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>FireBase</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="explore__more">
          <div className="explore__more__inner">
            <div className="explore__title">
              <h2>Explore More</h2>
            </div>
            <div className="explore__items">
              <div className="explore__item">
                <h3>About</h3>
                <p>
                  Take a deeper dive into my experience and learn a bit more
                  about how I can help you.
                </p>
                <Link to="/about" className="btn btn__primary">
                  About
                </Link>
              </div>
              <div className="explore__item">
                <h3>Services</h3>
                <p>
                  I have the skills and tools required to build fully responive
                  and immersive applications designed for internal and external
                  customers.
                </p>
                <Link to="/services" className="btn btn__primary">
                  View Services
                </Link>
              </div>
              <div className="explore__item">
                <h3>Projects</h3>
                <p>
                  Take a look at some of the projects I've built that
                  demonstrate my constant drive to learn and innovate using new
                  technology.
                </p>
                <Link to="/projects" className="btn btn__primary">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div ref={contactRef}>
          <Contact />
          <Footer />
        </div>
      </Layout>
      <section></section>
    </>
  );
};

export default withRouter(Home);
