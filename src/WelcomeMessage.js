import React, { Component } from "react";

class WelcomeMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to Sunita Rice Mills"
    };
  }

  render() {
    return (
      <div style={{ marginBottom: "20px", color: "#9a2020" }}>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default WelcomeMessage;
