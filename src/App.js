import React from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import './assets/styles/style.css';

const App = () => {
  return (
    <div id="app">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
