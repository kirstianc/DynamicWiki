import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import '../styles.css';

const Footer = () => {
    return (
        <footer>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><a href="https://www.linkedin.com/in/kirstian-chavez/">LinkedIn</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
