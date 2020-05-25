import React, { useState } from "react";

import "./App.css";
import Person from "./Person/Person";

const App = () => {
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

  const paragraphClasses = [];

  if (personsState.length < 3) {
    paragraphClasses.push("red");
  }
  if (personsState.length < 2) {
    paragraphClasses.push("bold");
  }

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hello</h1>
      <p className={paragraphClasses.join(" ")}>I am working!</p>
      <button onClick={switchNameHandler} style={buttonStyle}>
        Click me
      </button>
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

export default App;
