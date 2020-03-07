import React from "react";
import Header from "../Components/Header";

export default class MyAttendancePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listAttendances: [
        {
          userId: 1,
          punchInTime: new Date().toLocaleString(),
          punchOutTime: new Date().toLocaleString()
        },
        {
          userId: 2,
          punchInTime: new Date().toLocaleString(),
          punchOutTime: new Date().toLocaleString()
        },
        {
          userId: 3,
          punchInTime: new Date().toLocaleString(),
          punchOutTime: new Date().toLocaleString()
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Header history={this.props.history} />
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
                  {this.state.listAttendances.map((x, index) => (
                    <tr key={x.userId}>
                      <th scope="row">{index + 1}</th>
                      <td>{x.punchInTime}</td>
                      <td>{x.punchOutTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
