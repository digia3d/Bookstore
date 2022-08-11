import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>
      Bookstore CMS
      </h1>
      <nav className="mein-links">
        <Link className="meinLink" to="/">Home</Link>
        <Link className="meinLink" to="/Books">Books</Link>
        <Link className="meinLink" to="/Categories">Categories</Link>
      </nav>
    </header>
  );
}

export default Header;
