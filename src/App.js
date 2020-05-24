import React, { useState } from "react";

import "./App.css";
import Person from "./Person/Person";

const app = () => {
  const persons = [
    { name: "Aldirrixen", age: 28 },
    { name: "Aldirrixirrix", age: 26 },
    { name: "aldirrixorros", age: 23 },
  ];

  const [personsState, setPersonsState] = useState(persons);

  const switchNameHandler = () => {
    setPersonsState([
      { name: "Boninisen", age: 21 },
      { name: "Boniniirrix", age: 2 },
      { name: "boninixorros", age: 3 },
    ]);
  };

  return (
    <div className="App">
      <h1>Q pedorronskiasdfri</h1>
      <button onClick={switchNameHandler}>Click me</button>
      {personsState.map((person, i) => (
        <Person key={i} name={person.name} age={person.age} />
      ))}
    </div>
  );
};

export default app;
