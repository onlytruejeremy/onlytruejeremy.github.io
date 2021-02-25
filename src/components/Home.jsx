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
                I have the skills and tools at the ready to build fully
                responive and immersive applications designed for either
                internal or external customers.
              </p>
              <Link to="/services" className="btn btn__primary">
                Learn More
              </Link>
            </div>
            <div className="card">
              <h2 className="card__title">Projects</h2>
              <p className="card__paragraph">
                Take a look at some of the projects I've put together to that
                demonstrate my constant drive to learn and innovate using new
                technology.
              </p>
              <Link to="/projects" className="btn btn__primary">
                View Projects
              </Link>
            </div>
            <div className="card">
              <h2 className="card__title">Clients</h2>
              <p className="card__paragraph">
                Each project, website and application I create is designed to
                meet the desired end state a client has in mind. Behind the
                development of all successful projects stands rock solid
                communication.
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
                Welcome to my site, I'm a full stack developer ready to work
                with you to build out a project, site or service. Click the link
                below to get a bit more information about my experience and how
                I can help you.
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
