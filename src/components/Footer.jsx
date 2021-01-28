import React from "react";

const Footer = (props) => {
  return (
    <div className="footer__container">
      <p>&#169; Jeremy Barber 2021</p>
      <a href="https://linkedin.com/in/barber-jeremy" target="_blank">
        <i className="fab fa-2x fa-linkedin"></i>
      </a>
      <a href="https://github.com/onlytruejeremy" target="_blank">
        <i className="fab fa-2x fa-github"></i>
      </a>
    </div>
  );
};

export default Footer;
