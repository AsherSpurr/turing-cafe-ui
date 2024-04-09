import './App.css';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
import { fetchReservations } from '../apiCalls';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetchReservations()
    .then(data => {
      if(data) {
        console.log(data)
        setReservations(data)
      }
    })
  }, [])
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