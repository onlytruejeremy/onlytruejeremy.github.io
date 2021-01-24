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

  return (
    <>
      <div className="projects__carousel__inner">
        <ReactSimpleCarousel
          isInfinity
          className="carousel2"
          onMount={handleMount}
        >
          <div
            style={{ height: "80vh", width: "80vw" }}
            className="card__outer"
          >
            <ProjectCard item={data[0]} />
          </div>
          <div style={{ height: "80vh", width: "80vw" }}>
            <ProjectCard item={data[1]} />
          </div>
          <div style={{ height: "80vh", width: "80vw" }}>
            <ProjectCard item={data[2]} />
          </div>
        </ReactSimpleCarousel>
      </div>

      <div className="carousel__actions">
        <button className="btn__carousel darken" onClick={prev}>
          &#8592;
        </button>
        <button className="btn__carousel darken" onClick={next}>
          &#8594;
        </button>
      </div>
    </>
  );
};

export default ProjectsCarousel;