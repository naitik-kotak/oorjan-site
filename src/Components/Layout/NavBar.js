import React from 'react';
import logo from '../../assests/img/logo.png';

function NavBar() {
  const logoStyle = {
    width: '9.5rem',
    paddingTop: '2rem',
  };
  return (
    <nav>
      <div className='item'>
        <img className='image' style={logoStyle} src={logo} alt='logo' />
      </div>
    </nav>
  );
}

export default NavBar;
