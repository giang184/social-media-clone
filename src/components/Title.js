import React from "react";

function Title(){
  const name = "Andrew";
  const name2 = "Max";
  return (
    <React.Fragment>
      <h3>{name} and {name2}</h3>
      <p>links</p>
    </React.Fragment>
  );
}

export default Title;