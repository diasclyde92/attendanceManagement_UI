import React from "react";
import Header from "../Components/Header";

export default class MyAttendancePage extends React.Component {
  render() {
    return (
      <div>
        <Header  history={this.props.history}/>
        <div className="container h-100">
          <div className="row h-100" style={{ marginTop: "1em" }}>
            <div className="col col-md-6">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Punch In Time</th>
                    <th scope="col">Punch Out Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
