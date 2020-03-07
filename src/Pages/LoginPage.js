import React from "react";

import { Form, FormInput, FormGroup, Button } from "shards-react";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col col-md-6">
            <Form>
              <FormGroup>
                <label htmlFor="#username">Username</label>
                <FormInput id="#username" placeholder="Username" required type="email"/>
              </FormGroup>
              <FormGroup>
                <label htmlFor="#password">Password</label>
                <FormInput
                  type="password"
                  id="#password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </FormGroup>
              <Button>Login</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
