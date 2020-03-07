import React from "react";

import { Form, FormInput, FormGroup, Button, Alert } from "shards-react";

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      visible: false
    };
  }

  onFormSubmit = e => {
    e.preventDefault();

    console.log(this.state.userName);
    console.log(this.state.password);
    this.setState({ visible: true });
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
              dismissible={() => this.setState({ visible: false })}
              open={this.state.visible}
            >
              User does not exist
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}
