import React from "react";
import Code from "../../assets/codeimage.jpg";
const ProjectCard = (props) => {
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
      <div className="card__footer">
        {props.item.projectImages.map((item) => {
          console.log(item);
          return <img src={`${item}`} alt="project" />;
        })}
      </div>
    </div>
  );
};

export default ProjectCard;