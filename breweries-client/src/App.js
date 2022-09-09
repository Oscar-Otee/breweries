import './App.css';

import Home from './components/Home';
import React from 'react';
import Header from './components/Header';


function App() {

  return (
    <div className="App" style={{background: "pink"}}>
        <Header />
        <Home />
    </div>
  );
}

export default App;
