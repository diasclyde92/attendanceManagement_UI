import React from "react";
import { Nav, NavItem, NavLink } from "shards-react";

export default class Header extends React.Component {
  onNavClick = path => {
    this.props.history.push(`${path}`);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-12">
            <Nav>
              <NavItem>
                <NavLink onClick={() => this.onNavClick("/AttendancePage")}>
                  My Attendance History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={() => this.onNavClick("/")}>Log Out</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    );
  }
}
