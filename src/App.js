import "./styles.css";
import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
