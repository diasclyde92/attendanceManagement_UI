import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default class Header extends React.Component {

  onNavClick = pageName => {
    this.props.history.push("/AttendancePage");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-12">
            <Nav>
              <NavItem>
                <NavLink onClick={this.onNavClick}>
                  My Attendance History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Log Out</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink disabled href="#">
                  Disabled Link
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}
