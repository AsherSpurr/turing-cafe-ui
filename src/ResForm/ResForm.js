import './ResForm.css'
import { useState } from 'react';

function ResForm({ addRes }) {
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
        addRes(newRes)
        resetInputs()
    }

    const resetInputs = () => {
        setName('')
        setDate('')
        setTime('')
        setGuests('')
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type='text' placeholder='Date(mm/dd)' name='date' value={date} onChange={(e) => setDate(e.target.value)}></input>
                <input type='text' placeholder='Time' name='time' value={time} onChange={(e) => setTime(e.target.value)}></input>
                <input type='text' placeholder='Number of guests' name='guests' value={guests} onChange={(e) => setGuests(e.target.value)}></input>
                <button type='submit' value='submit' onClick={(e) => createRes(e)}>Make Reservation</button>
            </form>
        </div>
    )
}

export default ResForm