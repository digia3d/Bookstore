import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="Books" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
