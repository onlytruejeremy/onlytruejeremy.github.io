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
        "We'll work together to produce an experience your customers will love.",
      tech: `HTML5, CSS3, Bootstrap,
              JavaScript, jQuery, ReactJS, Formik,
              Yup, Axios
              `,
      imgUrl:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Middle Tier",
      paragraph:
        "I'm ready to build a RESTful API from scratch or extend an existing one.",
      tech: `NodeJS, ExpressJS, Joi, JWT, BCRYPT, CORS, Helmet
              `,
      imgUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Back End",
      paragraph:
        "I've got experience using document-based databases and relational ones.",
      tech: `MongoDB, FireBase, MSSQL, MySQL
              `,
      imgUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <Layout>
      <div className="services__container">
        <h1 className="section__title__alt">Services</h1>
        <p>
          From developing, creating and implementing first or third party APIs
          to building a custom website, I create effective systems that are
          flexible, intuitive, and responsive.
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
