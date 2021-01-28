import React from "react";
import Footer from "./Footer";
import Layout from "./Layout";
import ServiceCard from "./ServiceCard";

const Services = (props) => {
  const data = [
    {
      id: 1,
      title: "Front End",
      paragraph: "Need someone to build the user side of an application?",
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
          From the front-end to the back-end, I've got you covered. Whether you
          need a simple website or a full stack application, you're in good
          hands.
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
