import React from "react";

const PeopleCard = ({ data: { name, about, image, resume } }) => {
  return (
    <div className="people__card">
      <div
        className="people__header"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="people__body">
        <h4>{name}</h4>
        <p>{about}</p>
        <a href={resume} target="_blank" className="btn btn__primary">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default PeopleCard;
