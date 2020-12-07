import React, { useState } from 'react';

function Searchbar({ onTermSearch }) {
  const [term, setTerm] = useState('');

  const onTermChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  
    onTermSearch(term);
  };

  return (
    <form className='ui form' onSubmit={onFormSubmit}>
      <div className='field'>
        <label>Search here</label>
        <input type='text' value={term} onChange={onTermChange} />
      </div>
      <div className='ui-inverted-segment'>
        <button className='ui inverted green button' onClick={onFormSubmit}>
          Find Green Solution
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
