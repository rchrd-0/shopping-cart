import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './assets/styles/style.css';

const App = () => {
  return (
    <div id="app">
      <Router>
        <Nav />
        <Main />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
