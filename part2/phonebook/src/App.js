import { useState } from 'react';
import Filter from "./components/Filter";
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => { 
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

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