import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import MenuBar from './MenuBar';
import './MenuBar.css';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <nav>
        {/* animated menu on top of screen */}
        <MenuBar onClick={toggleMenu} isMenuOpen={isMenuOpen} />

        {/* dropdown menu */}
        <ul className={isMenuOpen ? 'header_ul menu-open' : 'header_ul'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Projects">Projects</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

      <h1><Link to="/">Computer Science Major at San Jose State University | Ian Chavez</Link></h1>

    </header>
  );
};

export default Header;
