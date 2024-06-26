import './App.css';
import React, { useState, useEffect } from 'react';
import Reservations from '../Reservations/Reservations'
import { fetchReservations, postReservation } from '../apiCalls';
import ResForm from '../ResForm/ResForm';

function App() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    fetchReservations()
    .then(data => {
      if(data) {
        setReservations(data)
      }
    })

  }, [])

  const postRes = (newRes) => {
    postReservation(newRes)
    .then(data => {
      setReservations([...reservations, data])
    })
  }

  console.log(reservations)

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
        <ResForm postRes={postRes}/>
      </div>
      <div className='resy-container'>
        <Reservations reservations={reservations}/>
      </div>
    </div>
  );
}

export default App; 