import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home/Home'
import Navigation from './Components/Navbar/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation fixed="top"/>
      <Home/>
    </div>
  );
}

export default App;
