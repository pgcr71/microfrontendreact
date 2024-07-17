import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./routes/GreetingCat";
import RandomCat from "./routes/RandomCat";
import "./App.css";
import CatGif from "./routes/CatGif";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {

  return (
    <Router history={history}>
      <Route exact path="/" component={RandomCat} />
      <Route exact path="/cat/:greeting" component={GreetingCat} />
      <Route exact path="/gif" component={CatGif} />
    </Router>
  );
}

export default App;