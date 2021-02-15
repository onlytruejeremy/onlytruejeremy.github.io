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
              JavaScript, jQuery, ReactJS, JSON, Formik,
              Yup
              `,
      imgUrl:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Middle Tier",
      paragraph:
        "Enhancing an existing API or building something new? I've got the skills for both.",
      tech: `NodeJS, Tedious, Mongoose,
              MySQL, Joi, JWT, BCRYPT
              `,
      imgUrl:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Back End",
      paragraph:
        "Document-based or SQL-based database? Either way I'm ready to tackle the challenge.",
      tech: `MongoDB, FireBase, MSSQL,
              and MySQL
              `,
      imgUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  /*   React.useEffect(() => {
    const adjustHeight = () => {
      let cards = document.getElementsByClassName("service__card");
      let finalHeight = 0;
      for (let i = 0; i < cards.length; i++) {
        const current = cards[i];
        let height = current.getBoundingClientRect().height;

        if (height >= finalHeight) {
          finalHeight = height;
        }
        current.style.height = `${finalHeight}px`;
      }
    };
    adjustHeight();
  }, [data]); */

  return (
    <Layout>
      <div className="services__container">
        <h1 className="services__title">Services</h1>
        <p>
          From developing, creating and implementing first or third party APIs
          to building a custom website, I create effective systems that are
          flexible, intuitive, responsive. I'll help you expand your business
          while enhancing your customer experience.
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
