import React, { Fragment } from "react";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default App;