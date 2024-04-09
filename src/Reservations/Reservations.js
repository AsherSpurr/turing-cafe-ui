import './Reservations.css';
import React from 'react';
import Card from '../Card/Card';

function Reservations({ reservations }) {
    const mappedRes = reservations.map((res) => {
        return (
            <Card
                name={res.name}
                date={res.date}
                time={res.time}
                guests={res.number}
                id={res.id}
                key={res.id}
            />
        )
    })
    return (
        <section className='res-wrapper'>
            <div className='res-card-wrapper'>
                {mappedRes}
            </div>
        </section>
    )
}

export default Reservations