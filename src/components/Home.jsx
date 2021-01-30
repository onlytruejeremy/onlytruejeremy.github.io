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
              <h3>Innovative Development</h3>

              <h1>
                <Typed
                  strings={["Bring Your Idea to Life"]}
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
                Wander over to my projects and take a look at some of the
                personal projects I've built to help me keep growing as a
                developer.
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
                I have worked on various web projects for a range of clients
                providing front end development (HTML, CSS, SCSS, JS, jQuery,
                Bootstrap), middle tier development (NodeJS, ExpressJS, BCRYPT,
                JWT, Joi, Mongoose), and back end development (MSSQL, MySQL,
                MongoDB, FireBase Firestore). Every time I code there's always
                challenges to overcome and new things to learn, but that's what
                keeps it exciting. If you're looking for someone who doesn't
                only possess the skills you need but also the ability to
                communicate technical jargon to people technical and
                non-technical alike then you've found the developer for you.
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
