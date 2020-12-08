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
        <a href='https://www.oorjan.com/home' target='_blank' rel='noreferrer'>
          <img className='image' style={logoStyle} src={logo} alt='logo' />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
