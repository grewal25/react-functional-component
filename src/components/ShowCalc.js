import React from "react";
import Diff from "./Diff";
import Sum from "./Sum";

//showSum is coming from <Calculate /> component.
//we are passing props to access the value of showSum defined
//in the <Calculate /> component.
function ShowCal(props) {
  const showSum = props.showSum;

  if (showSum) {
    return <Diff num1={10} num2={5} />;
  }

  return <Sum num1={10} num2={5} />;
}

export default ShowCal;
