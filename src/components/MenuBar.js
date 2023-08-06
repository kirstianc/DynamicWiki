import React from 'react';
import './MenuBar.css';

function MenuBar({ onClick, isMenuOpen }) {
  return (
    <div className={`container ${isMenuOpen ? 'change' : ''}`} onClick={onClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}

export default MenuBar;
