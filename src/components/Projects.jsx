import React from "react";
import Layout from "./Layout";
import ProjectCard from "./ProjectCard";
import data from "../data/data";
import Footer from "./Footer";
import Gallery from "./Gallery";
const Projects = (props) => {
  const [open, setOpen] = React.useState(false);
  const [imagesId, setImagesId] = React.useState();
  const [clickCount, setClickCount] = React.useState(0);
  const openGallery = (id) => {
    setOpen(true);
    setImagesId(id);
    setClickCount(clickCount + 1);
  };
  return (
    <Layout>
      <div className="projects__container">
        <h1 className="section__title__alt">Projects</h1>
        <p>
          Take a peek at some of my latest projects. Feel free to let me know
          what you think, I'm always looking for feedback.
        </p>
        <small>
          Short on time? Click on an image to view screenshots of the project.
        </small>
        <div className="project__cards">
          {data.map((item) => {
            return <ProjectCard data={item} openGallery={openGallery} />;
          })}
        </div>
        <Footer />
      </div>
      <Gallery open={open} imagesId={imagesId} clicked={clickCount} />
    </Layout>
  );
};

export default Projects;
