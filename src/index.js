import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from "react-router-dom";

/* HashRouter assistance from Nelson Michael. 
*  This was the only way I could get the routing to work on GitHub Pages. I didn't realize GitHub Pages does not support browser history.
*  https://blog.logrocket.com/deploying-react-apps-github-pages/#how-to-deploy-react-app-with-routing-to-github-pages.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <App />
    </Router>
);