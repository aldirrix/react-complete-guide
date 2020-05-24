import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        Im a {props.name} and im {props.age} Old
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
