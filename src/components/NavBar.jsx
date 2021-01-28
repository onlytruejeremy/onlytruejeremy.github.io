import React from "react";
import { Link, useHistory } from "react-router-dom";
const NavBar = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const [barsActive, setBarsActive] = React.useState(false);
  const history = useHistory();
  return (
    <div className={`nav__container ${isActive ? "active" : null}`}>
      <div className={`nav__inner ${isActive ? "active" : null}`}>
        <h3
          className="nav__logo"
          onClick={(e) => {
            e.preventDefault();
            history.push("/");
          }}
        >
          Jeremy Barber
        </h3>
        <div
          className="bars__container"
          onClick={(e) => {
            e.preventDefault();
            setBarsActive(!barsActive);
            setIsActive(!isActive);
          }}
        >
          <div className={`bars ${barsActive ? "active" : null}`}></div>
        </div>

        <ul className={`nav__items ${isActive ? "active" : null}`}>
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/clients">Clients</Link>
          </li>
          <li className="nav__item">
            <Link to="/services">Services</Link>
          </li>

          <li className="nav__item">
            <Link to="projects">Projects</Link>
          </li>

          <li className="nav__item">
            <Link
              to={{
                pathname: "/",
                state: "contact",
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
