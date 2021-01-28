import React from "react";
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";
import data from "../data/data";
import Footer from "./Footer";
const Projects = (props) => {
  return (
    <Layout>
      <div className="projects__container">
        <h1 className="project__title">Projects</h1>
        <p>
          If you have a few minutes then go ahead and check out some of my
          projects. Feel free to reach out to me and let me know what you think,
          I'm constantly learning and always open to feedback.
        </p>
        <div className="project__cards">
          {data.map((item) => {
            return <ProjectCard data={item} />;
          })}
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Projects;
