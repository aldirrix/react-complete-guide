import React, { useContext } from "react";

import classes from "./Person.module.css";
import AuthContext from "../../context/auth";

const Person = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        {authContext.authenticated
          ? `Im a ${props.name} and im ${props.age} years Old`
          : "Please login"}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
