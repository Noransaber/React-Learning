import React from 'react';
export default function Card(props) {
    return (
        <div className='card-container'>
            <div className='left-side'>
                <img src={ props.imageUrl} alt='jaban' />
            </div>
            <div className='right-side'>
                <span className='country'>{ props.location}</span>
                <a href={ props.googleMapUrl}> View on Google Map</a>
                <h2 className='place'>{ props.title}</h2>
                <span className='time'>{props.startDate} - { props.endDate}</span>
                <p className='info'>{props.description }</p>
            </div>
        </div>
    )
}