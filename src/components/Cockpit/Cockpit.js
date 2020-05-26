import React from "react";

import classes from "./Cockpit.module.css";

const cockpit = (props) => {
  const paragraphClasses = [];

  if (props.personsLength < 3) {
    paragraphClasses.push("red");
  }
  if (props.personsLength < 2) {
    paragraphClasses.push("bold");
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello</h1>
      <p className={paragraphClasses.join(" ")}>I am working!</p>
      <button onClick={props.clicked} className={classes.Button}>
        Click me
      </button>
    </div>
  );
};

export default cockpit;
