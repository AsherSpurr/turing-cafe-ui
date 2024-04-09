import './ResForm.css'
import { useState } from 'react';

function ResForm({ postRes }) {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')

    const createRes = (e) => {
        e.preventDefault()
        const newRes = {
            id: Date.now(),
            name: name,
            date: date,
            time: time,
            number: Number(guests)
        }
        postRes(newRes)
        resetInputs()
    }

    const resetInputs = () => {
        setName('')
        setDate('')
        setTime('')
        setGuests('')
    }

    return (
        <>
            <form className='form'>
                <input className='input' type='text' placeholder='Name' id='form-name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input className='input' type='text' placeholder='Date(mm/dd)' id='form-date' name='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
                <input className='input' type='text' placeholder='Time' id='form-time' name='time' value={time} onChange={(e) => setTime(e.target.value)}></input>
                <input className='input' type='text' placeholder='Number of guests' id='form-guests' name='guests' value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                <button className='button' type='submit' value='submit' onClick={(e) => createRes(e)}>Make Reservation</button>
            </form>
        </>
    )
}

export default ResForm