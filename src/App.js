import React, { useState } from "react";

import "./App.css";
import Person from "./Person/Person";

const app = () => {
  const persons = [
    { id: "idNumber1", name: "Aldo", age: 28 },
    { id: "idNumber2", name: "Bono", age: 26 },
    { id: "idNumber3", name: "Karenina", age: 23 },
  ];

  const [personsState, setPersonsState] = useState(persons);

  const switchNameHandler = () => {
    setPersonsState([
      { id: "idNumber1", name: "Ana", age: 21 },
      { id: "idNumber2", name: "El bobby", age: 2 },
      { id: "idNumber3", name: "Aldirrix", age: 3 },
    ]);
  };

  const deletePersonHandler = (id) => {
    setPersonsState(personsState.filter((person) => person.id !== id));
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={switchNameHandler}>Click me</button>
      {personsState.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => deletePersonHandler(person.id)}
        />
      ))}
    </div>
  );
};

export default app;
