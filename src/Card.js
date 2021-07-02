import React from 'react';
import CardContent from "./CardCont";
import "./Card.css";

function Card({title , text, btn}) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{text}</p>
            <button>{btn}</button>
        </div>
    )
}

export default Card
