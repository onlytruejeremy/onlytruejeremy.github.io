import React from "react";
import Layout from "./Layout";
import Kraken from "../assets/kraken.jpg";
import WebMall from "../assets/webmall.jpg";
import Footer from "./Footer";
const Clients = (props) => {
  const data = [
    { title: "Kraken Koders", imgUrl: Kraken },
    { title: "WebMall", imgUrl: WebMall },
  ];
  return (
    <Layout>
      <div className="clients__container">
        <h1 className="about__title">Clients</h1>
        <p>
          No matter the project, big or small, I'll help you get to where you
          need to go.
        </p>
        <div className="clients">
          {data.map((item, index) => {
            return (
              <div
                id={index}
                className="client"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              ></div>
            );
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Clients;
