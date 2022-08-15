import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/configureStore';
import './App.css';
import Header from './components/Header';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';

function App() {
  return (

    <Router>
      <Provider store={Store}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route exact path="Books" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
