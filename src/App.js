import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import LoginPage from "./Pages/LoginPage";
import "./App.css";
import PortalPage from "./Pages/PortalPage";
import MyAttendancePage from "./Pages/MyAttendancePage"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Portal" component={PortalPage} />
          <Route path="/AttendancePage" component={MyAttendancePage} />
        </Router>
      </div>
    );
  }
}

export default App;
