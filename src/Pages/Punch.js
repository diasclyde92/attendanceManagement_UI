import React, { Component } from "react";
import { Button } from "shards-react";
import { FormInput } from "shards-react";
import Usercard from '../Components/Usercard';

class Punch extends Component {
  state = {

  };

  componentDidMount() {

  }

  handelchange = (event) => {
    this.setState({ value: event.target.value });
  }

  submit = () => {
    console.log(this.state.value);
    fetch('', {
      method: 'POST',
      body: JSON.stringify({ userId: this.state.value })
    })
      .then()
      .catch(err => {
        console.log(err);
      });

  }

  render() {
    return (
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div className="col col-md-6">
            <FormInput placeholder="UserID" value={this.state.value} onChange={this.handelchange} />

            <Button block pill theme="success" style={{ marginTop: '20px' }} onClick={this.submit}>
              PunchIN
            </Button>
            <Button block pill theme="secondary" onClick={this.submit}>
              PunchOUT
            </Button>
          </div>
        </div>
      </div>

    );
  }
}


export default Punch;