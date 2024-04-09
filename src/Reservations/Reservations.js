import './Reservations.css';
import React from 'react';
import Card from '../Card/Card';

function Reservations({reservations}) {
    const mappedRes = reservations.map((res) => {
        return (
            <Card 

            />
        )
    })
    return (
        <div className='res-card-wrapper'>
            {mappedRes}
        </div>
    )
}

export default Reservations