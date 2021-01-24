import React from "react";
import Code from "../../assets/codeimage.jpg";
const ProjectCard = (props) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
      <div className="card__footer">
        {props.item.projectImages.map((item, index) => {
          if (index > 1) {
            return <img src={`${item}`} alt="project" className="hide" />;
          } else {
            return <img src={`${item}`} alt="project" />;
          }
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
