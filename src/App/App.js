import './App.css';
import React from 'react';
import Card from '../Card/Card'
import { useState, useEffect } from 'react-dom'

function App() {
  const [reservations, setReservations] = useState([])
  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='resy-container'>
        <Card reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 