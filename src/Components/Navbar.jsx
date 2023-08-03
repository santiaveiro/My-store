import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        My Store
      </a>
      <div className="search-input">
        <input className='input-navbar' type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
