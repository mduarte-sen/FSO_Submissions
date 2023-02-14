import React from 'react';


const Filter = (props) => {
  return (
    <div>
        <div>filter shown with <input id='filter' onChange={props.onChange} /></div>
    </div>
  )
}

export default Filter;