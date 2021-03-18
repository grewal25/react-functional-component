import React from "react";

class Diff extends React.Component {
  render() {
    return (
      <p>
        the difference of two numbers are :{this.props.num1 - this.props.num2}
      </p>
    );
  }
}

export default Diff;
