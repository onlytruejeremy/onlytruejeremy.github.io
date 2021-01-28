import React from "react";
import NavBar from "./NavBar";
const Layout = (props) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <div className="layout__container">
        <div className="layout__container__inner">
          <NavBar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Layout;
