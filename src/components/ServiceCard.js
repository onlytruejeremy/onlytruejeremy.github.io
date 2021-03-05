import React from "react";
import { Link } from "react-router-dom";
const ServiceCard = (props) => {
  return (
    <div className="service__card">
      <div className="service__card__header">{props.data.title}</div>
      <div
        className="service__card__body"
        style={{ backgroundImage: `url(${props.data.imgUrl})` }}
      >
        <div className="card__body__inner">
          <p className="card__body__inner__hidden">{props.data.paragraph}</p>
          <p className="card__body__inner__hidden">Tech: {props.data.tech}</p>
        </div>
      </div>
      <div className="service__card__footer">
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
