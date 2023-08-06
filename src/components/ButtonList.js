import React from 'react';
import { Link } from 'react-router-dom';
import './buttonStyles.css';

const ButtonList = ({ items }) => {
  return (
    <ul>
      {items.map((items, index) => (
        <li key={index}>
          {items.link.startsWith('/') ? (
            // Internal link using react-router-dom's Link
            <Link to={items.link} className="button" style={{ backgroundImage: `url(${items.image})` }}>
              <h3>{items.title}</h3>
              <p>{items.description}</p>
            </Link>
          ) : (
            // External link using anchor tag
            <a href={items.link} className="button" style={{ backgroundImage: `url(${items.image})` }}>
              <h3>{items.title}</h3>
              <p>{items.description}</p>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ButtonList;
