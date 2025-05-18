import React from 'react'
import '../styles/_Navbar.scss'
import { FiSearch } from 'react-icons/fi';
import logo from '../images/logo.svg'
import CreateButton from './CreateButton';

function Navbar({ onCreateClick }) {
  return (
    <nav className='nav-bar'>
      <div className="logo">
        <img src={logo} alt="Toddle Logo" className="logo-img"/>
      </div>

      <div className="search-bar"> 
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search.." />
      </div>

      {/* Pass the onClick handler down */}
      <CreateButton create="post" onClick={onCreateClick} />
    </nav>
  )
}

export default Navbar;
