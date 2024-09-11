import React, { Component } from "react";

export default class Userclass extends Component {
  constructor() {
    super();
    console.log("constructor mounted");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("method mounted");
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
        <h4>Count: {this.state.count}</h4>
      </div>
    );
  }
}
