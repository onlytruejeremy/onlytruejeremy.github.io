import React from "react";
import { Link } from "react-router-dom";
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
        <div className="people__buttons">
          <a href={resume} target="_blank" className="btn btn__primary">
            View Resume
          </a>
          <Link
            className="btn alt btn__primary"
            to={{
              pathname: "/",
              state: "contact",
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
