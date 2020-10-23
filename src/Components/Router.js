import React from "react";
import { HashRouter as Router, Redirect, Route } from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Header />
    <Route path="/" exact component={Home} />
    <Route path="/tv" component={TV} />
    <Route path="/tv/popular" render={() => <h1>popular</h1>} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Router>
);
