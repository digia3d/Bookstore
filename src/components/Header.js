import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="mein-links">
        <ul className="mein-links_list">
          <li className="title"><h1>Bookstore CMS</h1></li>
          <li><Link className="meinLinkB" to="/">Books</Link></li>
          <li><Link className="meinLinkC" to="/Categories">Categories</Link></li>
        </ul>
      </nav>
      <div className="avatar">
        <FaUserAlt />
      </div>
    </header>
  );
}

export default Header;
