import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from "./containers/Search/Search";
import Dashboard from "./components/Dashboard/Dashboard";
import Favorites from "./containers/Favorites/Favorites";
import { connect } from "react-redux";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
