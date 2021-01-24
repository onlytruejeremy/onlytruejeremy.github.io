import React from "react";
import ReactSimpleCarousel from "react-plain-carousel";
import data from "../../data/data";
import ProjectCard from "./ProjectCard";

const ProjectsCarousel = (props) => {
  const [carousel, setCarousel] = React.useState([]);
  const [index, setIndex] = React.useState(0);

  const next = () => {
    carousel.next();
  };

  const prev = () => {
    carousel.prev();
  };

  const moveTo = (index) => () => {
    carousel.moveTo(index);
  };

  const handleMount = (carousel) => {
    setCarousel(carousel);
    console.log(JSON.stringify(carousel));
  };

  const handleTransitionEnd = ({ index }) => {
    setIndex(index);
  };
  const renderItems = (data) => {};
  return (
    <>
      <ReactSimpleCarousel
        isInfinity
        className="carousel2"
        onMount={handleMount}
      >
        <div style={{ height: "80vh", width: "80vw" }}>
          <ProjectCard item={data[0]} />
        </div>
        <div style={{ height: "80vh", width: "80vw" }}>
          <ProjectCard item={data[1]} />
        </div>
        <div style={{ height: "80vh", width: "80vw" }}>
          <ProjectCard item={data[2]} />
        </div>
      </ReactSimpleCarousel>

      <div className="carousel__actions">
        <button className="btn__carousel darken" onClick={prev}>
          &#x2B05;
        </button>
        <button className="btn__carousel darken" onClick={next}>
          &#x27A1;
        </button>
      </div>
    </>
  );
};

export default ProjectsCarousel;
