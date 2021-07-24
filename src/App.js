// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import Home from "./Components/Home";
import Floors from "./Components/Floors";
import FloorDetail from "./Components/FloorDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Arrange <Route /> from longest path url to the lowest  */}
        <Route path="/malls/:mall_ID/:floor_ID">
          <FloorDetail />
        </Route>
        <Route path="/malls/:mall_ID">
          <Floors />
        </Route>
        <Route path="/malls">
          <Home malls={[]} />
        </Route>

        <Redirect to="/malls" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
