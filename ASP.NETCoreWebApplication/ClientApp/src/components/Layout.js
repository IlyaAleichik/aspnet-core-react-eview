import React, { Component } from "react";
import { Container } from "reactstrap";
import Nav from "./navmenu/Nav";

export default class Layout extends Component {
  render() {
    return (
      <div>
       <Nav/>
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}
