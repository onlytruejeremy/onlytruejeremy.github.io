import React from "react";

const ProjectCard = ({
  data: {
    projectTitle,
    projectTech,
    projectAbout,
    projectImages,
    codeUrl,
    viewUrl,
    host,
  },
}) => {
  return (
    <div className="project">
      <div className="project__header">
        <img src={projectImages[0]} alt="" />
      </div>
      <div className="project__body">
        <h2>{projectTitle}</h2>
        <p>About: {projectAbout}</p>
        <p>Tech: {projectTech}</p>
        <p>Host: {host}</p>
        <div className="actions__container">
          <div>
            <a className="btn btn__primary" target="_blank" href={viewUrl}>
              View
            </a>
          </div>
          <div>
            <a className="btn btn__primary" target="_blank" href={codeUrl}>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
