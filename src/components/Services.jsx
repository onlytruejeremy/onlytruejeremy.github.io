import React from "react";
import Footer from "./Footer";
import Layout from "./Layout";
import ServiceCard from "./ServiceCard";

const Services = (props) => {
  const data = [
    {
      id: 1,
      title: "Front End",
      paragraph:
        "Looking for someone to transform a design into something useable?",
      imgUrl:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Middle Tier",
      paragraph: "Building an API or need someone with Node experience?",
      imgUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Back End",
      paragraph:
        "SQL-based or document-based? Doesn't matter, I can handle it!",
      imgUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  return (
    <Layout>
      <div className="services__container">
        <h1 className="services__title">Services</h1>
        <p>
          All the way from the viewable side of an application to business
          logic, I've got the skills ready to build or enhance your product.
        </p>
        <div className="services__cards">
          {data.map((item) => {
            return <ServiceCard data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Services;
