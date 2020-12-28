import React, { Component } from "react";

export default class Home extends Component {
  navigatePage = () => {
    this.props.history.push("/about");
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.navigatePage}>Goto About Us</button>
      </div>
    );
  }
}
