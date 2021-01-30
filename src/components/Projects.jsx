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
        <h1 className="project__title">Projects</h1>
        <p>
          Go ahead and check out some of my work. Reach out to me and let me
          know what you think, I'm constantly learning and always seeking
          feedback.
        </p>
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
