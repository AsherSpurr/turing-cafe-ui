import './ResForm.css'
import { useState } from 'react';

function ResForm() {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')

    const createRes = (e) => {
        e.preventdefault()
        const newRes = {
            name: name,
            date: date,
            time: time,
            number: guests
        }
        addRes(newRes)
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='Name'></input>
                <input type='text' placeholder='Date(mm/dd)'></input>
                <input type='text' placeholder='Time'></input>
                <input type='text' placeholder='Number of guests'></input>
                <button type='submit' onClick={(e) => createRes(e)}>Make Reservation</button>
            </form>
        </div>
    )
}

export default ResForm