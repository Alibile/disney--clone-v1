import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Headers from "./Components/Headers";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import Detail from "./Components/Detail";
function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
