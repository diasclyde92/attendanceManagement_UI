import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import LoginPage from "./Pages/LoginPage";
import "./App.css";
import PortalPage from "./Pages/PortalPage";
import MyAttendancePage from "./Pages/MyAttendancePage"
import PunchPage from './Pages/Punch';
import ManageEmployePage from './Pages/ManageEmployePage';
import AddEmployePage from "./Pages/AddEmployePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={LoginPage} />
          <Route path="/Portal" component={PortalPage} />
          <Route path="/AttendancePage" component={MyAttendancePage} />
          <Route path="/Punch" component={PunchPage} />
          <Route path="/ManageEmployes" component={ManageEmployePage} />
          <Route path='/AddEmploye' component={AddEmployePage} />
        </Router>
      </div>
    );
  }
}

export default App;
