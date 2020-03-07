import React, { Component } from "react";
import { FormInput, Button, Alert } from "shards-react";
import axios from "axios";
import Usercard from '../Components/Usercard';

class Punch extends Component {
  state = {
    punchValue: 0,
    showSuccess: false
  };

  componentDidMount() {}

  handelchange = event => {
    this.setState({ value: event.target.value });
  };

  submit = async punchType => {
    alert(`You have successfully ${punchType}`)
    // debugger;
    // let attendanceObject = {
    //   publicId: localStorage.getItem("publicId"),
    //   punchType: punchType
    // };
    // await axios
    //   .post("127.0.0.1:5000/api/v1/attendance-records/", attendanceObject)
    //   .then(response => {
    //     this.setState({
    //       punchValue: 1,
    //       showSuccess:true
    //     });
    //   })
    //   .catch(error => {});
  };

  render() {
    return (
      <div class="container h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div className="col col-md-6">
            <FormInput
              size="lg"
              placeholder="UserID"
              value={this.state.value}
              onChange={this.handelchange}
            />

            <Button
              size="lg"
              block
              pill
              theme="success"
              style={{ marginTop: "20px" }}
              onClick={() => this.submit("Punched In")}
            >
              PunchIN
            </Button>
            <Button
              size="lg"
              block
              pill
              theme="secondary"
              onClick={() => this.submit("Punched Out")}
            >
              PunchOUT
            </Button>
            <br />
            <Alert
              theme="success"
              dismissible={() => this.setState({ showSuccess: false })}
              open={this.state.showSuccess}
            >
              You have successfully{" "}
              {this.state.punchType === 1 ? "Punched In" : "Punched Out"}
            </Alert>
          </div>
        </div>
      </div>
    );
  }
}

export default Punch;
