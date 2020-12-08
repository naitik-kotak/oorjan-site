import React, { useState } from 'react';

function Searchbar({ onTermSearch }) {
  const [term, setTerm] = useState('');

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSearch(term);
    setTerm('');
  };

  const formStyle = {
    marginBottom: '2rem',
  };

  return (
    <form style={formStyle} className='ui form' onSubmit={onFormSubmit}>
      <div className='field'>
        <label>Search here</label>
        <input
          type='text'
          value={term}
          placeholder='Eg) Panel Cost, Solar Inverters'
          onChange={onTermChange}
        />
      </div>
      <div className='ui-inverted-segment'>
        <button className='ui  inverted green button' onClick={onFormSubmit}>
          Find Oorjan Solutions
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
