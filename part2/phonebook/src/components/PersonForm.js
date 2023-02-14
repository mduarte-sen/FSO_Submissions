import React from 'react';

const PersonForm = (props) => {
  return (
    <div>
        <form onSubmit={props.onSubmit}>
        <div>name: <input id='name' /></div>
        <div>number: <input id='number' /></div>
        <div>
            <button type="submit" onClick={props.onClick}>add</button>
        </div>
        </form>
    </div>
  )
}

export default PersonForm;