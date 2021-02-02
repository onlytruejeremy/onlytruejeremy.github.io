import React from "react";
import { Link, withRouter } from "react-router-dom";
import Contact from "./Contact";
import Layout from "./Layout";
import Typed from "react-typed";
import Footer from "./Footer";
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
        <div className="home__container">
          <div className="hero__container">
            <div className="hero__tab">
              <h3>Full Stack Development</h3>

              <h1>
                <Typed
                  strings={["Have an Idea?", "Let's build it!"]}
                  typeSpeed={60}
                  loop={true}
                />
              </h1>
            </div>
          </div>
          <div className="home__cards">
            <div className="card">
              <h2 className="card__title">Services</h2>
              <p className="card__paragraph">
                If you're in need of a developer, I'll bring the skills and
                tools if you bring the idea.
              </p>
              <Link to="/services" className="btn btn__primary">
                Learn More
              </Link>
            </div>
            <div className="card">
              <h2 className="card__title">Projects</h2>
              <p className="card__paragraph">
                Wander over to my projects and take a look at a few of the
                things I've built to help me keep growing as a developer.
              </p>
              <Link to="/projects" className="btn btn__primary">
                View Projects
              </Link>
            </div>
            <div className="card">
              <h2 className="card__title">Clients</h2>
              <p className="card__paragraph">
                Curious who I've worked with? Check out some of my previous
                clientele.
              </p>
              <Link to="/clients" className="btn btn__primary">
                View Clients
              </Link>
            </div>
          </div>
          <div className="home__about">
            <div className="home__about__inner">
              <h1 className="section__title">About</h1>
              <br />
              <p>
                Welcome to my site. I'm a full stack developer with a background
                in IT, sales and intelligence operations. Working with
                technology has always been a passion of mine, the only thing
                that has changed over time is what I focus my attention on
                learning.
                <br />
                <br />
                Here's a quick list of the technologies I use when developing
                depending on the needs of the project:
                <br />
                <br />
                Front-End: HTML5, CSS3, SCSS, Vanilla JavaScript, jQuery,
                ReactJS, Axios, Yup, Formik, Ajax
                <br />
                <br />
                Middle-Tier: NodeJS, and ExpressJS, Tedious/MSSQL, MySQL,
                Mongoose, BCRYPT, JWT, Joi
                <br />
                <br />
                Back-End: MSSQL, MySQL, MongoDB Atlas
              </p>

              <br />
              <Link to="/about" className="btn btn__primary">
                Learn More
              </Link>
            </div>
          </div>
          <div ref={contactRef}>
            <Contact />
            <Footer />
          </div>
        </div>
      </Layout>
      <section></section>
    </>
  );
};

export default withRouter(Home);
