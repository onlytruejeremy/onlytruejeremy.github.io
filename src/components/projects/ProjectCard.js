import React from "react";
const ProjectCard = (props) => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    setImages(
      props.item.projectImages.map((item, index) => {
        return (
          <div className="carousel__image__container">
            <img
              src={`${item}`}
              id={index}
              alt="project"
              className="carousel__image"
            />
          </div>
        );
      })
    );
  }, [props.item.projectImages]);
  return (
    <div className="card">
      <div className="card__header">
        <h2>Title: </h2>
        <p>{props.item.projectTitle}</p>
      </div>
      <div className="card__body">
        <h4>About:</h4>
        <p>{props.item.projectAbout}</p>
      </div>
      <div className="card__body">
        <h3>Tech: </h3>
        <p>{props.item.projectTech}</p>
      </div>
      <div className="card__body">
        <h3>Links: </h3>
        <a href={props.item.viewUrl} target="_blank">
          View Site
        </a>
        <br />
        <a href={props.item.codeUrl} target="_blank">
          View Code
        </a>
      </div>
      <div className="card__footer">{images}</div>
    </div>
  );
};

export default ProjectCard;
