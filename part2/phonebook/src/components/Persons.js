import React from 'react';
import Person from './Person';

const Persons = (props) => {
  return (
    <div>
        {props.persons.filter(person => person.name.includes(props.filter)).map(person => <Person name={person.name} number={person.number} key={person.id} />)}
    </div>
  )
}

export default Persons;