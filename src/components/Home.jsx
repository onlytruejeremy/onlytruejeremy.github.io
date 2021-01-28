import React from "react";
import { Link, withRouter } from "react-router-dom";
import Contact from "./Contact";
import Layout from "./Layout";
import Typed from "react-typed";
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
              From the front-end to the back-end, I've got you covered. Whether
              you need a simple website or a full stack application, you're in
              good hands.
            </p>
            <Link to="/services" className="btn btn__primary">
              Read More
            </Link>
          </div>
          <div className="card">
            <h2 className="card__title">Projects</h2>
            <p className="card__paragraph">
              Take a look at some of the things I'm working on to continue my
              education.
            </p>
            <Link to="/projects" className="btn btn__primary">
              Read More
            </Link>
          </div>
          <div className="card">
            <h2 className="card__title">Clients</h2>
            <p className="card__paragraph">
              Check out who I've worked with already.
            </p>
            <Link to="/clients" className="btn btn__primary">
              Read More
            </Link>
          </div>
        </div>
        <div className="home__about">
          <div className="home__about__inner">
            <h1 className="section__title">About</h1>
            <br />
            <p>
              If you're looking for a developer who knows how to be a part of a
              team and is ready to help you bring that next project to life,
              then look no further. With experience in development, IT and
              sales, I have an array of skills that will bring you closer to
              your goal.
            </p>
            <br />

            <Link to="/about" className="btn btn__primary">
              Read More
            </Link>
          </div>
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(Home);
