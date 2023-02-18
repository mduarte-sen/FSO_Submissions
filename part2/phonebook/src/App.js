import { useEffect, useState } from 'react';
import Filter from "./components/Filter";
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => { 
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');


  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(
    response => {
      setPersons(response.data);
    }
    )
  }, []);
  

  const addName = (event) => {
    event.preventDefault();
    let inArray = person => person.name === newName;
    if(persons.some(inArray)){
      alert(`${newName} is already in phonebook`);
    } else {
      setPersons(persons.concat([{name: newName, number: newNumber, id: persons[persons.length - 1].id+1}]));
    }
  }

  const setProps = () => {
    setNewName(document.getElementById("name").value);
    setNewNumber(document.getElementById("number").value);
  }

  const filterBook = () => {
    setFilter(document.getElementById("filter").value);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterBook}/>
      <h2>add a new</h2>
      <PersonForm onClick={setProps} onSubmit={addName} />
      <h2>Numbers</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  )
}

export default App;