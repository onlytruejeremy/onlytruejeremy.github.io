import "./styles.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
const App = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/services",
      component: Services,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/clients",
      component: Clients,
    },
  ];
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route path={route.path} component={route.component} exact />
      ))}
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
