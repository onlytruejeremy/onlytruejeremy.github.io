import React from "react";
import "./Footer.css";
const Footer = (props) => {
  return (
    <div className="footer__container" id="footerSection">
      <p>&copy; 2021 Jeremy Barber</p>
      <a
        className="hover__grow"
        target="_blank"
        href="https://github.com/onlytruejeremy"
        referrerPolicy="noreferrer"
      >
        {" "}
        <i class="fab fa-2x fa-github"></i>
      </a>
      <a
        className="hover__grow"
        target="_blank"
        href="https://linkedin.com/in/barber-jeremy"
        referrerPolicy="noreferrer"
      >
        {" "}
        <i class="fab fa-2x fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Footer;
