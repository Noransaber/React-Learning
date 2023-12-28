import React from 'react';
import Nav from "./components/Nav";
import Card from "./components/Card";
import cardData from "./CardData"
export default function App() {
    const data = cardData.map((d) => {
        return <Card
            key={d.id}
            {...d}
        />
    })
    return (
        <div className='container'>
            <Nav />
            {data}

        </div>
    )
}