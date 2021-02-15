import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = (props) => {
  return (
    <div className="service__card">
      <div className="service__card__header">
        <img src={props.data.imgUrl} alt="" />
      </div>
      <div className="service__card__body">
        <h2>{props.data.title}</h2>
        <p>{props.data.paragraph}</p>
        <p>Tech: {props.data.tech}</p>
        <Link
          to={{
            pathname: "/",
            state: "contact",
          }}
          className="btn btn__primary"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
