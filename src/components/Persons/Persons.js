import React from "react";

import Person from "./Person";

const persons = (props) =>
  props.persons.map((person) => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      clicked={() => props.clicked(person.id)}
    />
  ));

export default persons;
