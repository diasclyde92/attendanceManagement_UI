import React from "react";

import { Form, FormInput, FormGroup, Button, Alert } from "shards-react";
import axios from "axios";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      showError: false
    };
  }

  onFormSubmit = async e => {
    e.preventDefault();

    let user = {
      username: this.state.userName,
      password: this.state.password
    };

    await axios
      .post("127.0.0.1:5000/api/v1/users/login", user)
      .then(response => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("publicId", response.publicId);
      })
      .catch(error => {
        this.setState({ showError: true });
      });
  };

  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col col-md-6">
            <Form onSubmit={this.onFormSubmit}>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput
                  id="#username"
                  placeholder="Username"
                  required
                  type="text"
                  value={this.state.userName}
                  onChange={e => this.setState({ userName: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                  required
                  type="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              <Button>Login</Button>
            </Form>
            <br />
            <Alert
              theme="danger"
              dismissible={() => this.setState({ showError: false })}
              open={this.state.showError}
            >
              User does not exist
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}
