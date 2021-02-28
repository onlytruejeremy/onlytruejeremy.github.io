import React from "react";
import Layout from "./Layout";
import Kraken from "../assets/kraken.jpg";
import WebMall from "../assets/webmall.jpg";
import Footer from "./Footer";
const Clients = (props) => {
  const data = [
    {
      title: "Kraken Koders",
      imgUrl: Kraken,
      about: `A veteran owned small business focused on graphic design, web development and 3d modeling. A place where creativity comes together and new experiences are born.`,
    },
    {
      title: "WebMall",
      imgUrl: WebMall,
      about: `An innovative eCommerce platform that allows brands to live-stream
          sales events, and engage with real customers all on one dynamic and
          easy portal. No other platform allows vendors to both live-stream and
          conduct eCommerce simultaneously. This will drive sales and engagement
          for brands and customers alike.`,
    },
  ];
  return (
    <Layout>
      <div className="clients__container">
        <h1 className="section__title__alt">Clients</h1>
        <p>
          No matter if you're a startup or a large corporation, I've got the
          skills necessary to help you service your clients better.
        </p>

        <div className="clients">
          {data.map((item, index) => {
            return (
              <>
                <div
                  className="client"
                  id={index}
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                  <p className="client__about">{item.about}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Clients;
