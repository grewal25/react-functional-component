import React from "react";

class Sum extends React.Component {
  render() {
    return (
      <p>the sum of two numbers are :{this.props.num1 + this.props.num2}</p>
    );
  }
}

export default Sum;
