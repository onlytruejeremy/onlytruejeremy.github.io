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
                From simple websites to full-blown applications, I've got the
                skills to breathe life into your product or service.
              </p>
              <Link to="/services" className="btn btn__primary">
                Learn More
              </Link>
            </div>
            <div className="card">
              <h2 className="card__title">Projects</h2>
              <p className="card__paragraph">
                Take a peek at some of the projects I've whipped together to
                continue my education and demonstrate some of the skills I have.
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
                There's always someone out there with an idea but that doesn't
                matter. What does matter is the ability to bring that idea to
                fruition. With an arsenal of development technologies in my
                toolbelt I'll help you bridge that gap from mere thought into
                reality. Don't wait and start executing.
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
