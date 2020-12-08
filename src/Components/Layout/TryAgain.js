import React from 'react';

function TryAgain({ searchTerm }) {
  const termStyle = {
    fontSize: '25px',
    textDecoration: 'underline',
  };
  return (
    <div className='ui center aligned segment negative message'>
      <h5>
        Sorry, nothing found with the term <span></span>
        <span style={termStyle}>{searchTerm}</span>
      </h5>
      <h4> Please Search Again !!</h4>
    </div>
  );
}

export default TryAgain;
