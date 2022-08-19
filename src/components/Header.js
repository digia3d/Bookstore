import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Header className="header">
      <Link className="title" to="/"><h1>Bookstore CMS</h1></Link>
      <nav className="mein-links">
        <Link className="meinLink" to="/Books">Books</Link>
        <Link className="meinLink" to="/Categories">Categories</Link>
      </nav>
    </Header>
  );
}

export default Header;
