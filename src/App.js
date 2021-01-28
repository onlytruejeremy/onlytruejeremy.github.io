import "./styles.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/services" exact>
        <Services />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
      <Route path="/clients" exact>
        <Clients />
      </Route>
      <Route
        to=""
        render={(props) => {
          return <Home {...props} />;
        }}
      />
    </Switch>
  );
};

export default App;
