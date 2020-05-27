import React, { useContext } from "react";

import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth";

const Cockpit = (props) => {
  const authContext = useContext(AuthContext);
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
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

export default Cockpit;
