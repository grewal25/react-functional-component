import { useState } from "react";
import ShowCal from "./ShowCalc";

export default function Calculate() {
  //defining the state
  //showSum is a boolean, and setShowSum is a function
  const [showSum, setShowSum] = useState(false);

  //defining events
  function handleSumClick() {
    setShowSum(false);
  }

  function handleDiffClick() {
    setShowSum(true);
  }

  //conditional rendering
  if (showSum) {
    return (
      <>
        <button onClick={handleSumClick}>Show Sum</button>
        <ShowCal showSum={showSum} />
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleDiffClick}>Show Diff</button>
        <ShowCal showSum={showSum} />
      </>
    );
  }
}
