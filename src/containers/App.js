import React, { useState } from "react";

import "./App.css";
import Persons from "../components/Persons";
import Cockpit from "../components/Cockpit";
import AuthContext from "../context/auth";

const App = () => {
  const defaultPersons = [
    { id: "idNumber1", name: "Aldo", age: 28 },
    { id: "idNumber2", name: "Bono", age: 26 },
    { id: "idNumber3", name: "Karenina", age: 23 },
  ];

  const [persons, setPersons] = useState(defaultPersons);
  const [authenticated, setAuthenticated] = useState(false);

  const switchNameHandler = () => {
    setPersons([
      { id: "idNumber1", name: "Ana", age: 21 },
      { id: "idNumber2", name: "El bobby", age: 2 },
      { id: "idNumber3", name: "Aldirrix", age: 3 },
    ]);
  };

  const deletePersonHandler = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  const authenticationHandler = () => {
    setAuthenticated(!authenticated);
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{ authenticated: authenticated, login: authenticationHandler }}
      >
        <Cockpit clicked={switchNameHandler} personsLength={persons.length} />
        <Persons clicked={deletePersonHandler} persons={persons} />
      </AuthContext.Provider>
    </div>
  );
};

export default App;
