import React from 'react';
import './Header.css';
import banner from '../assets/oil2.png';

function Header() {
  return (
    <div className='header pt-28'>
        <div className='header-contents'>
            <img src={banner} alt=''/>
        </div>

    </div>
  )
}

export default Header