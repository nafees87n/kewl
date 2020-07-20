import React, { Component } from "react";
import {
  Navbar,
  NavLink,
  NavItem,
  Nav,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Button,
} from "reactstrap";
class One extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <Nav navbar className="ml-auto" style={{color:"white"}}>
              <NavItem>Components</NavItem>
            </Nav>
          </div>
        </Navbar>
        </>
    );
  }
}

export default One;
