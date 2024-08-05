import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };

    console.log(props);
  }

  render() {
    const { name, location, contact } = this.props;
    return (
      <div>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
        {/* // Never update the state directly. */}
        <button
          onClick={() =>
            this.setState({   
              count: this.state.count + 1,                //this is called batching it upp
              count2: this.state.count2 + 1,
            })
          }
        >
          {" "}
          {/* here we passed the object where we updated the value */}
          Click me
        </button>
        <h3>Count: {this.state.count}</h3>
        <h3>Count2: {this.state.count2}</h3>
      </div>
    );
  }
}

export default Userclass;
