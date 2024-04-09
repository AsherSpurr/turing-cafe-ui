import './Card.css';
import React from 'react';

function Card({id, name, date, time, guests}) {
    return (
        <div className='card-wrapper'>
            <article>
                <h2>{name}</h2>
                <p>{time}</p>
                <p>{date}</p>
                <p>Number of guests: {guests}</p>
            </article>

        </div>
    )
}

export default Card