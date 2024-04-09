import './App.css';
import React from 'react';
import Card from '../Card/Card'
import { useState, useEffect } from 'react-dom'

function App() {
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <Card />
      </div>
    </div>
  );
}

export default App; 