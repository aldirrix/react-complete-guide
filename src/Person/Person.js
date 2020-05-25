import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Im a {props.name} and im {props.age} years Old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
