import React from "react";
import Header from "../Components/Header";

export default class PortalPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col col-md-12">
              <br/>
              <div class="jumbotron">
                <h1 class="display-4">Hello, Nathaniel!</h1>
                <p class="lead">
                  Welcome to the Employee Management Portal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
